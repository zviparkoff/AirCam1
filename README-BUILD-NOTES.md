# AirCam Vertical — Website Build Notes
v4 — July 20, 2026. Supersedes the mockup, v2, and v3.
Draft for internal review only. Not for publication until the pre-launch checklist below is cleared.

## What this is
A complete 10-page static site: index (Home), charter, fleet, film (Film & TV), utility, vertiport, gallery, safety, about, contact.
Open index.html in any browser. Host directly (any static host) or use as the exact spec for the Wix build.

## Logos (v4 — FINAL art installed)
- The final AirCam Vertical logo SVGs (provided by Scott 7/20/2026) are in assets/logo/: AirCam_BigC, AirCam_Horizontal, AirCam_Stacked, each in Black and White. Purple #6D28D9, wordmark in Montserrat 600 with the A/V letterforms drawn and the rotor-C forming the "C" in AirCam.
- Header uses Horizontal_Black inlined; footer uses Horizontal_White inlined (footer copy has namespaced SVG ids to avoid collisions). IMPORTANT: the SVGs contain live Montserrat <text> — they are inlined in the HTML (not referenced as <img>) so the page's Google Fonts load applies. If you ever use them as standalone images, convert the text to outlines first or the wordmark falls back to a system font.
- favicon.png generated from the BigC rotor-C mark.
- Earlier art now deprecated: the rebrand-folder rotor-C SVGs (#7C2FE6) and the Website Assets "AIRCAM HELICOPTERS" C-emblem set. The heritage blue script AirCam_Logo.png remains on the About page as history.
- Brand purple #6D28D9. Footer background #141416.

## Vertiport rename + family (v4)
- The Heliplex is now Centennial Vertiport: heliplex.html renamed to vertiport.html, nav label "Vertiport", page reframed as "The Heliplex is now Centennial Vertiport" with contacts from the live site (info@centennialvertiport.com, 720-619-9061, centennialvertiport.com). Old Heliplex numbers (303-799-8877 / 303-478-7079) removed — republish only if still live.
- Footer now has "The Family" column and About has a family section linking Centennial Vertiport (centennialvertiport.com), Centennial Flyers (apaflyers.com), and Centennial Aero-Tech (centennialaerotech.com). Blurbs sourced from the live centennialvertiport.com site (verified 7/20/2026).
- Heritage photo captions still say "Heliplex" where historical — intentional.

## New pages (v3) and their sources
All copy sourced from the old-site page exports in the Admin shared drive: "ED'S STUFF/AIRCAM WEBSITE/" (page PDFs + IMAGES folder).
- film.html — Motion Picture & Television page: 35+ years, SAG/AFTRA, WESCAM/Tyler/IMAX/Cineflex/SpaceCam, FAA-approved Motion Picture & TV Flight Operations Manual, credits (Dumb & Dumber camera ship, Asteroid, foreign features).
- utility.html — Utility & Inspection: ROW patrol, pipeline/power line, LiDAR/photogrammetry/infrared, mountain-top maintenance, construction support, OAS-carded heritage. External-load (Part 133) presented as certificate held / operations "in reactivation" — NOT advertised as currently flying.
- heliplex.html — Heliplex FBO & Services: fuel farm + remote fueling, hangar/office/crew rest, Part 145 maintenance, Airbus/Bell type support list. Contacts: office 303-799-8877, on-call 303-478-7079, info@centennialvertiport.com. FLAG: old site claimed "the only Helicopter FBO in the United States"; the softer "a dedicated helicopter FBO" is used — restore the superlative only if you're comfortable defending it.
- gallery.html — Portfolio rebuilt from the old site's IMAGES export + Dale Drive photos, with captions.
- about.html — added Jim Dirker founder section (Vietnam, U of U air ambulance, Helicopter Methods, pilot/reporter for CBS/NBC affiliates, 27,000+ hours) and the heritage script logo.
- CREW PAGE NOT BUILT: old-site bios (Dirker/House/Silva) are Dirker-era. Dale House continues as Chief Pilot through transition, but the public roster should be confirmed before publishing a crew page.

## Photo sources (all from the AirCam Vertical shared drive — Dale Drive)
All images are AirCam's own archive; no stock. Optimized to max 1600px.
- hero-denver.jpg — IMG_8542.JPG (aerial over downtown Denver / Coors Field)
- night-denver.jpg — IMG_20210106_191128.jpg (Denver at night from cockpit)
- vip-transport.jpg — VIP Transport.JPG
- eclipse.jpg — Helicopter with Eclipse I.jpg
- film-crew.jpg — Crew discussing shots at Hill Climb.JPG
- lidar.jpg — LIDAR Installation.JPG
- remote-ops.jpg — Remote Refueling Operations.JPG
- mountain-twinstar.jpg — IMG_20210223_121719.jpg
- hangar-n710ac.jpg — N710AC (1).jpg
- building.jpg — Front of Bldg-Close-Best One.JPG
- ramp.jpg — Helo Refueling 0006.JPG
- external-load.jpg — Helicopter Special Project.jpg
- cockpit-view.jpg — IMG_7045.JPG
- site-tour.jpg — IMG_8537.JPG
- passenger-view.jpg — On the way to Hill Climb.JPG

## v5 updates (7/20/2026)
- Banner logo enlarged (nav 104px tall, lockup 88px; 60px on mobile).
- Family logos installed like the Vertiport site: CV_Horizontal_Black (local logo package), Centennial Flyers and Centennial Aero-Tech horizontal lockups downloaded from apaflyers.com (Scott-approved). Used in the About family cards and a Home partner strip.
- Pricing placeholder REMOVED per Scott: Charter now reads "A firm number up front — no mystery fees." No dollar figure published.
- VTOL positioning added (Scott-approved scope): "The Vertical Future" section on Home + a "Next" timeline entry on About. Strictly forward-looking — family infrastructure (H55 electric MRO capability, charging, eVTOL-ready facilities at Centennial Vertiport) plus AirCam's certificated-operator positioning. NO aircraft claims, NO timelines, NO air-taxi promises. Keep it that way until something certifies.

## v6 updates (7/20/2026)
- All em dashes removed from copy and page titles per Scott. Do not reintroduce them in future edits.
- Family logos trimmed and normalized to equal width (230px) so CENTENNIAL renders the same size across CV, Flyers, and Aero-Tech.
- AirCam banner logo enlarged again: SVG viewBox tightened to content and lockup raised to 100px inside the same 104px nav.
- Photo dedupe: every image now appears exactly once site-wide. Near-duplicate frames (old-vip, old-twinstar-mtn) are unreferenced and can be deleted. 10 fresh archive photos imported from the Dale Drive for the gallery and page swaps.
- Jim Dirker founder section replaced with Scott Smith owner section; bio adapted from the apaflyers.com/team page, headshot pulled from the card under SCOTT SMITH on that page (confirm it's the right photo). Jim's name also removed from the Film page; heritage facts retained without naming him.

## v7 update (7/20/2026): VTOL page
- vtol.html added: a dedicated page written for eVTOL manufacturers and operators evaluating KAPA (the "when Joby looks at the site" page). In nav and footer site-wide; the Home Vertical Future section links to it.
- Every claim is sourced from the live centennialvertiport.com site or existing sourced site copy: KAPA airport data (5,885 ft, 15 mi SE of Denver, Class D), Part 135 held since 1991, Part 145 on field, H55 partnership "establishing the first authorized electric aircraft MRO capability in the United States," charging "being built," Flyers' B23 Energic trainers.
- Deliberately included a "What we are not claiming" section: no eVTOL operations claimed, no timelines. Do NOT name specific OEMs (Joby, Archer, etc.) on the page: no partnership exists, and naming them uninvited reads as presumptuous and creates trademark/implied-endorsement exposure. The page is written so any OEM reads themselves into it.
- Nav tightened (14px / 17px gap) to fit 10 links.
- v7.1: "What we are not claiming" section removed per Scott. Hero now uses the Joby S4 photo (assets/img/joby-s4-usaf.jpg) from Website Assets: U.S. Air Force photo, PUBLIC DOMAIN per IMAGE_CREDITS.txt, credit line kept in the hero ("Joby Aviation S4, U.S. Air Force photo, public domain") matching centennialvertiport.com's treatment. Do not remove the credit.
- v7.1 RIGHTS FIX: the Pikes Peak hill climb chase photos (old-camera-ship.jpg, old-aircam-header.jpg) were removed from the Film page and About archive. Per Website Assets/IMAGE_CREDITS.txt these are professional portfolio shots (Hans Bjerno / John Trapman, Ken Block/Hoonigan shoot) requiring written clearance from the photographers and depicted brands. Files remain in assets/img but are UNREFERENCED. Do not republish without clearance. Film hero now uses old-23496 (own archive).

## Placeholders still open
1. R44 / N26BX photos — DONE (7/20/2026): Scott's ramp photo of N26BX (tail visible, KAPA tower behind) now on Home, Fleet, and Gallery (assets/img/n26bx-ramp.jpg). Optional upgrades from the original shot list: golden-hour 3/4 front, maintenance-bay shot. Compliance reminder: tail-number photos publish only once the purchase/lien release is fully closed out.
2. Charter hourly rate — "$[___]/hr" on the Charter page. Set pricing before launch (~$900/hr was the working number; confirm).
3. Email info@aircamvertical.com — used site-wide but NOT yet confirmed as a live mailbox. Domain aircamvertical.com is registered at Wix but not connected to a site or mail.
4. Contact form — static demo only. Wire to Wix Forms or a form service (Formspree/Basin) at hosting; add reCAPTCHA.
5. Phone 303-799-0079 — AirCam's long-standing published line (also set in Wix Site Properties). Confirm this is the line you want published, or swap for an OPS number.

## Pre-launch compliance checklist (from the v1 guide — still applies)
- Do NOT publish until the Part 135 certificate is active with the R44 on OpSpec D085. Advertising charter you cannot legally fly is an FAA holding-out problem.
- Register "AirCam Vertical" as a Colorado trade name and add it as a DBA on OpSpec A001 before advertising under that name.
- Confirm the R44 purchase has closed (lien released by Cache Valley Bank) before publishing tail-number photos or specifics.
- Confirm hull/liability insurance is bound for the R44 (Safety page "Insured" card).
- Safety page SMS card: confirm the SMS program status before launch.
- Heritage claims (1986 founding, film/utility history, states served) are sourced from the old aircamhelicopters.com site content in the Dale Drive "Old Web Site Content" folder. Utility/film/external-load work is presented as heritage (past tense) only — no active claims while the 133/137 remain dormant.
- Footer operator disclosure appears on every page — keep it there.

## Status of the old sites
- aircamhelicopters.com — domain disconnected (dead).
- apaflyers.wixsite.com/aircam-national-heli — returned 404 as of 7/19/2026 (renamed, unpublished, or moved). Check the Wix dashboard.
- aircamvertical.com — registered at Wix, not connected to any site.
