# Contact form backend

A single Vercel serverless function (`api/contact.js`) that receives the contact
form POST from aircamvertical.com and emails it to info@aircamvertical.com via
[SendGrid](https://sendgrid.com).

SendGrid was chosen over alternatives (e.g. Resend) because its domain
verification only requires CNAME/TXT records, no MX record on a subdomain —
Wix's DNS panel doesn't support subdomain MX records, which blocks providers
that need one.

## Deploy

1. Sign up at https://vercel.com (free Hobby plan is fine) and connect your
   GitHub account.
2. "Add New Project" → import the `zviparkoff/AirCam1` repo.
3. Under **Root Directory**, select `api-backend` (this folder), not the repo
   root — the main site stays on GitHub Pages, only this function deploys to
   Vercel.
4. Leave build/output settings as default (no framework, no build command).
5. Sign up at https://sendgrid.com (free tier: 100 emails/day), create an API
   key (Settings → API Keys → Create API Key, "Full Access" or at minimum
   "Mail Send" permission), then in the Vercel project → Settings →
   Environment Variables add:
   - `SENDGRID_API_KEY` = the key from SendGrid
6. Deploy.
7. In Vercel project → Settings → Domains, add `api.aircamvertical.com`.
   Vercel will show a CNAME target — add that as a CNAME record for host `api`
   in Wix's DNS panel. This only adds a new subdomain record; it does not
   touch the existing apex/`www` records used by the main site on GitHub
   Pages.
8. Once DNS resolves, `https://api.aircamvertical.com/api/contact` is live.

## Verify the sender in SendGrid (required — SendGrid rejects unverified senders)

Unlike Resend, SendGrid has no shared sandbox "from" address, so one of these
two steps is required before any email will send:

### Quick option: Single Sender Verification (minutes, good for testing)
1. SendGrid → Settings → Sender Authentication → Single Sender Verification →
   Create New Sender.
2. Use an inbox you can access right now (e.g. your own Gmail) as the "From"
   address, and verify it via the confirmation email SendGrid sends.
3. Set `FROM_EMAIL` in Vercel to that exact verified address, redeploy.

### Proper option: Domain Authentication (recommended for production)
1. SendGrid → Settings → Sender Authentication → Authenticate Your Domain →
   enter `aircamvertical.com`. Leave "advanced settings" defaults unless you
   have a reason to change them.
2. SendGrid shows a handful of CNAME records — add them exactly as shown in
   Wix's DNS panel (host and value copied verbatim, not retyped).
3. Once SendGrid shows the domain as "Verified," set `FROM_EMAIL` in Vercel to
   an address on that domain, e.g.
   `AirCam Vertical Website <contact@aircamvertical.com>`, then redeploy.
