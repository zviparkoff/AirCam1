const ALLOWED_ORIGINS = [
  'https://aircamvertical.com',
  'https://www.aircamvertical.com',
];

const TO_EMAIL = 'info@aircamvertical.com';
const FROM_EMAIL = process.env.FROM_EMAIL || 'AirCam Vertical Website <onboarding@resend.dev>';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function stripControlChars(value) {
  return String(value || '').replace(/[\r\n]+/g, ' ').trim();
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

  if (!process.env.RESEND_API_KEY) {
    console.error('Missing RESEND_API_KEY environment variable');
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
    const resendRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: [TO_EMAIL],
        reply_to: email,
        subject,
        text,
      }),
    });

    if (!resendRes.ok) {
      const errBody = await resendRes.text();
      console.error('Resend error:', resendRes.status, errBody);
      res.status(502).json({ error: 'Failed to send email.' });
      return;
    }

    res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Unexpected error sending email:', err);
    res.status(500).json({ error: 'Unexpected error.' });
  }
};
