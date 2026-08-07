const dns = require('dns').promises;

const ALLOWED_ORIGINS = [
  'https://aircamvertical.com',
  'https://www.aircamvertical.com',
];

const TO_EMAIL = 'info@aircamvertical.com';
const FROM_EMAIL = process.env.FROM_EMAIL || 'contact@aircamvertical.com';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const DNS_TIMEOUT_MS = 4000;

function stripControlChars(value) {
  return String(value || '').replace(/[\r\n]+/g, ' ').trim();
}

function withTimeout(promise, ms) {
  return Promise.race([
    promise,
    new Promise((_, reject) => setTimeout(() => reject(new Error('timeout')), ms)),
  ]);
}

// Confirms the email's domain can receive mail (has MX, or falls back to A/AAAA).
// This catches typo'd/made-up domains; it can't confirm the specific mailbox exists.
async function domainCanReceiveMail(domain) {
  try {
    const mx = await withTimeout(dns.resolveMx(domain), DNS_TIMEOUT_MS);
    if (mx && mx.length > 0) return true;
  } catch (err) {
    // no MX records — fall through and try A/AAAA below
  }
  try {
    const a = await withTimeout(dns.resolve(domain), DNS_TIMEOUT_MS);
    return Boolean(a && a.length > 0);
  } catch (err) {
    return false;
  }
}

module.exports = async function handler(req, res) {
  const origin = req.headers.origin;
  if (ALLOWED_ORIGINS.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
    res.setHeader('Vary', 'Origin');
  }
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(204).end();
    return;
  }

  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const body = req.body || {};
  const name = stripControlChars(body.name).slice(0, 200);
  const email = stripControlChars(body.email).slice(0, 200);
  const phone = stripControlChars(body.phone).slice(0, 50);
  const type = stripControlChars(body.type).slice(0, 100);
  const message = String(body.message || '').slice(0, 5000);

  // Honeypot field: real visitors never fill this in, bots often do.
  if (stripControlChars(body.company)) {
    res.status(200).json({ ok: true });
    return;
  }

  if (!name || !email || !EMAIL_RE.test(email)) {
    res.status(400).json({ error: 'A valid name and email are required.' });
    return;
  }

  const emailDomain = email.split('@')[1];
  const domainOk = await domainCanReceiveMail(emailDomain);
  if (!domainOk) {
    res.status(400).json({ error: "That email address doesn't look reachable — please double check it." });
    return;
  }

  if (!process.env.SENDGRID_API_KEY) {
    console.error('Missing SENDGRID_API_KEY environment variable');
    res.status(500).json({ error: 'Server is not configured to send email.' });
    return;
  }

  const subject = `Quote request: ${type || 'General'} — ${name}`;
  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone || 'n/a'}`,
    `Mission type: ${type || 'n/a'}`,
    '',
    'Details:',
    message || '(none provided)',
  ].join('\n');

  try {
    const sgRes = await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        personalizations: [{ to: [{ email: TO_EMAIL }] }],
        from: { email: FROM_EMAIL, name: 'AirCam Vertical Website' },
        reply_to: { email: email, name: name },
        subject,
        content: [{ type: 'text/plain', value: text }],
      }),
    });

    if (!sgRes.ok) {
      const errBody = await sgRes.text();
      console.error('SendGrid error:', sgRes.status, errBody);
      res.status(502).json({ error: 'Failed to send email.' });
      return;
    }

    res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Unexpected error sending email:', err);
    res.status(500).json({ error: 'Unexpected error.' });
  }
};
