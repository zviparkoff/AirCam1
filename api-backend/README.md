# Contact form backend

A single Vercel serverless function (`api/contact.js`) that receives the contact
form POST from aircamvertical.com and emails it to info@aircamvertical.com via
[Resend](https://resend.com).

## Deploy

1. Sign up at https://vercel.com (free Hobby plan is fine) and connect your
   GitHub account.
2. "Add New Project" → import the `zviparkoff/AirCam1` repo.
3. Under **Root Directory**, select `api-backend` (this folder), not the repo
   root — the main site stays on GitHub Pages, only this function deploys to
   Vercel.
4. Leave build/output settings as default (no framework, no build command).
5. Sign up at https://resend.com (free tier: 3,000 emails/month), create an
   API key, then in the Vercel project → Settings → Environment Variables add:
   - `RESEND_API_KEY` = the key from Resend
6. Deploy.
7. In Vercel project → Settings → Domains, add `api.aircamvertical.com`.
   Vercel will show a CNAME target (typically `cname.vercel-dns.com`) — add
   that as a CNAME record for host `api` in Wix's DNS panel. This only adds a
   new subdomain record; it does not touch the existing apex/`www` records
   used by the main site on GitHub Pages.
8. Once DNS resolves, `https://api.aircamvertical.com/api/contact` is live.

## Optional: verify aircamvertical.com in Resend

By default the function sends from Resend's shared `onboarding@resend.dev`
address (works immediately, no setup, but looks less official). To send as
`you@aircamvertical.com` instead, verify the domain in Resend (adds SPF/DKIM
DNS records at Wix), then set the `FROM_EMAIL` environment variable in Vercel,
e.g. `AirCam Vertical Website <contact@aircamvertical.com>`.
