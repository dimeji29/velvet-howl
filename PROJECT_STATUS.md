# FLORAL VOID 2.0 — PROJECT STATUS

> Handoff file. Update after every approved stage. Another developer/AI should be able to continue from here.

## 1. Overview
Premium creative-commission website for **FLORAL VOID** (artist: Kehinde; fursuits, fursona design, VRChat and VTuber avatars). Redesign of an existing static site. Hosting: Vercel. Repo: github.com/abdakeemk-web/FLORAL_VOID.

## 2. Workflow rules (locked)
- Work in stages; **stop after each stage and wait for explicit user approval.**
- Never invent prices, links, locations, reviews, awards, legal clauses or business claims. Use visible placeholders.
- Never silently delete business policies, pricing, assets or contact info.
- Never put credentials/API keys in frontend code. The commission form posts directly
  to Web3Forms from the browser (their intended architecture; the access key is public
  by design). No other secrets exist. No server code remains.
- SEO is a major requirement from the start. No ranking guarantees.

## 3. Stage tracker
| Stage | Scope | Status |
|---|---|---|
| 1 | Audit + architecture | Approved (user said continue) |
| 2 | Design system | **Approved** (user, Oct 7 2026). Form service selector corrected (see §12) |
| 3 | Global structure (nav, footer, shell, Discord/social component) | **Approved** (user: "that is great") |
| 4 | Homepage | **Approved** (user: "i agreed") |
| 5 | Gallery | **Approved** (user, with decisions in section 12) |
| 6 | Services | **Delivered** (user asked to continue; treat as approved unless changes requested) |
| 7 | Pricing | **Approved** (user, Oct 8 2026) |
| 8 | Contact / commission form + Web3Forms email | **Updated — awaiting user approval + access key** (Resend removed; form posts directly to Web3Forms; recipient abdakeemkehinde@gmail.com; Full Suit $7,000+ provisional; Furry gallery filter added) |
| 9 | Terms | **Approved** (user, Oct 9 2026 — "well and good"; client to read it over) |
| 10 | Performance / SEO / accessibility audit | **Delivered — awaiting user approval** (og share image added, fonts self-hosted, all contrast/label/heading checks pass) |
| 11 | Final QA | **Delivered — awaiting user approval** (9 automated checks pass, zero issues; live visual pass done by user with nothing broken) |

Reality check (user, Oct 7 2026): nothing had ever been delivered or pushed to GitHub before Stage 3. Stage 3 is the first real code.

## 4. Confirmed business information (from user, Stage 1)
| Item | Value |
|---|---|
| Discord username (always show visibly) | `eloradebby` |
| Discord profile link (keep as currently used) | https://discord.com/users/1251198237864362167 |
| Form recipient | abdakeemkehinde@gmail.com (server-side only) |
| TikTok (show username) | @nadafunk — https://www.tiktok.com/@nadafunk |
| Telegram (show username) | Eloradebby1234 — http://t.me/Eloradebby1234 |
| Pricing (fursuit) | Head Only $1,500+ · Mini Partial $2,700+ · Partial $5,000+ · Full Suit $7,000+ (provisional — change in data/site.config.json when confirmed). Fursona / VRChat / VTuber stay "Request a Quote" |

## 5. Placeholders still open
- Full Suit price is provisional ($7,000+ in data/site.config.json, pricing.html, services.html and the form selector). Change it in one place when the client confirms.
- Partial Suit no longer mentions a full bodysuit (client clarification applied Oct 8 2026); the "Full zippered body suit" line moved to Full Suit.
- `[CANONICAL_DOMAIN]` (current live URL: floral-void.vercel.app)
- `[BUSINESS_LOCATION]` (bio says "Northeast Ohio"; no address given — do not add LocalBusiness schema without one)
- `[PRIMARY_SEO_KEYWORDS]`, `[SITE_DESCRIPTION]`, `[SOCIAL_PROFILE_URLS]`
- Per-service Discord/TikTok links: default to the shared links above unless the client supplies different ones
- Pricing for Fursona / VRChat / VTuber (undecided whether to display)
- Gallery categories + titles (suggested only, not approved)
- WIP images: 12 photos added Oct 9 2026 (foam bases, feet paws, clay sculpt, fit tests; originals in source-images/work-in-progress/). 2 exact duplicates deleted. 1 MP4 video parked (gallery is photo-only; needs a small player upgrade).

## 6. Brand / design (carry-over; formal system comes in Stage 2)
- Primary navy `#0A1A3A`, accent gold `#D4AF37`, plus neutral white/off-white/gray/black.
- **Remove** off-brand orange `#e67e22` and green `#27ae60` (pricing.html) and any other stray colors.
- Fonts currently: Poppins (body), Playfair Display (headings). Keep unless Stage 2 proposes a change.
- Tone: premium, artistic, modern, professional. No generic SaaS look, no excessive motion.

## 7. Audit findings (existing site)
**Files:** index, gallary, services, pricing, contact, term (.html), style.css (440 lines), script.js (89 lines), images/ (50 portfolio JPGs, logo, 4 social icons + WhatsApp icon unused). 6.3 MB images total. Single Git commit.

**Structure/code**
- Header, footer, hero + slider duplicated on every page.
- pricing.html has its own `<style>` with global `ul/li/p/h1` overrides and orange/green colors.
- `fab fa-*` icon classes used but no Font Awesome loaded; the `<i>` tags render nothing (some contain link text).
- Inline `style="background-image"` on slides.
- script.js: slider code throws if a page has no `.slide`; preloader hides on window `load`, which on the gallery waits for all 50 images.
- Contact "form" does not exist on contact.html; script.js shows a fake "sent successfully" popup for any `<form>`.

**SEO:** only short `<title>`s. No meta descriptions, canonicals, OG/Twitter, JSON-LD, favicon, robots.txt, sitemap.xml. Alt text generic ("Gallery Image 1", many duplicates). Files named 1–50.jpg. Misspelled URLs `gallary.html`, `term.html`. Missing/weak `<h1>` on some pages (pricing's h1 is outside the hero). Services hero claims "Professional photography and creative design solutions" (inaccurate).

**Accessibility/mobile:** hamburger is a `<div>` (not keyboard accessible); icon links have empty alt (no accessible name); pricing cards fixed 300px with hover scale (overflow risk on 320px); gallery loads all 50 images eagerly, no width/height (layout shift); no focus styles audited.

**Content issues:** "Fursuts", "Forsona", "VRchats", "yur", "commision", "Vtuber", "Term of services"; contact link label `@infoabdakeeemkehinde` for mailto abdakeemkehinde@gmail.com; Terms contain literal asterisks (`*estimates only*`, `*non-refundable deposit*`) from unrendered markdown; "pricing" lowercase in nav on some pages; nav label "Term of Services".

## 8. Existing content to preserve
- **Bio:** Northeast Ohio furry creator with a hearing impairment; business began 2019; Animation degree 2021, full-time since; animation, illustration, tailoring; CTA "Come join the FLORAL VOID Family!".
- **Services:** Fursuit making, Fursona (spelled "Forsona" currently), VRChat avatar creation, VTuber avatar.
- **Terms (7 sections, preserve meaning):** 1 General Policy & Agreement (18+; under-18 needs parent/guardian to sign; right to refuse; no liability for allergic reactions; terms may change but not for already-secured commissions) · 2 Quoting & Pricing (prices are estimates; quotes valid 60 days; major changes after deposit may cost extra) · 3 Payment & Deposits (non-refundable deposit applied to cost; payment plans; full payment before physical creation begins; failure-to-pay forfeiture) · 4 Commission Process (order of payment; dates may change; WIP updates; minor changes only after creation starts; refund incl. deposit if Artist cancels) · 5 Shipping & Completion (client pays shipping; not responsible for loss/damage; customs/duties on client) · 6 Warranty & Repairs (30 days structural seams/components; exclusions; client pays after) · 7 Copyright & Usage (artist keeps copyright and may use photos; client owns physical item, may resell but must pass on terms).
- All pricing feature lists in pricing.html, all 50 images, all social handles above.

## 9. Proposed architecture (pending approval)
HTML5 + Tailwind CSS (built, not CDN) + vanilla JS modules; GSAP only if justified; no framework. Small Node build step (runs on Vercel) to: compile Tailwind, inject shared header/footer/Discord block into static HTML so content is crawlable without JS, and render gallery HTML from a data file.

```
/ index.html gallery.html services.html pricing.html contact.html terms.html 404.html
/ robots.txt sitemap.xml PROJECT_STATUS.md
/src      Tailwind input, JS modules, page templates + partials
/data     site.config (all links/placeholders in ONE place), gallery data
/api      Vercel serverless function for commission form email
/images   descriptive filenames, WebP/AVIF + thumbnails (originals kept in images/source)
```
- `gallary.html` → `gallery.html`, `term.html` → `terms.html` with permanent (301) redirects in vercel.json.
- Form: server-side send, honeypot + server validation, real success/error states; secrets in Vercel environment variables only.
- Discord/social component: shows username visibly, Copy Username + Open Discord (Home, Services, Contact, Footer); same pattern for TikTok `@nadafunk` and Telegram `Eloradebby1234`.
- SEO: unique title/description/canonical per page, OG + Twitter, JSON-LD (Organization/Brand, Service), one h1/page, sitemap + robots, descriptive alt/filenames, Search Console-ready.

## 10. Decisions
**Answered by user:**
- Remove the WhatsApp icon (do not show WhatsApp anywhere).
- Show **fursuit pricing only** (no Fursona/VRChat/VTuber prices; those services use a "request a quote" CTA).
- Work in Progress category shows fursuits still being built **and** completed ones, with an In progress / Completed status tag. No WIP photos identified yet; the user must supply which images are in progress.
- User said "let continue" → Stage 1 approved, Stage 2 started.

**Not answered — working defaults (change anytime):**
- Public email: form-only, plus obfuscated address in footer (not a plain mailto on every page).
- Canonical domain: floral-void.vercel.app until a custom domain exists (`[CANONICAL_DOMAIN]`).
- Preloader: removed.
- Email provider: decide at Stage 8 (Resend or Gmail SMTP via Vercel env vars).
- Node build step (Tailwind + templates + image processing): accepted.
- "Northeast Ohio" may be used as region served in copy/schema; no street address, no LocalBusiness schema.

**Stage 2 review (approved with the design system):** functional error-red `#B3261E` for form errors only (extra colour); gold-ink `#8A6F12` for small gold-toned text on light.

## 11. Gallery categorization (SUGGESTION ONLY — not approved)
Head: 3,7,8,13,17,19,21,22,23,28,34,35,37,38,42,44,47,49 · Partial: 1,11,24,25,26,27,29,31,32,39,50 · Full suit: 2,4,5,6,9,10,12,14,15,16,18,20,30,33,36,40,41,43,45,46,48 · WIP: none identified.
Likely same-character groups (merge into one project): 3+49, 4+46, 5+15+42, 7+47, 8+24+43, 11+13, 17+50, 19+30+41, 20+31, 22+27+32, 16+36+40, 21+28, 38+44+48, 14+45, 6+9, 25+29.
Flags: 1.jpg is 299x252 (too small); 2, 12, 22 are wide strips; 6,10,25,29,33,39 show people (confirm permission). Do not apply until user approves.

## 12. Last changes
- Stage 2 approval: user approved design system and direction ("do not redesign or restart"). Required correction: commission form Service selector must list ALL services, grouped, with a clear note that Fursona Design, VRChat Avatar and VTuber Avatar are available (priced "Request a Quote"). Options: Fursuit Head Only ($1,500+), Mini Partial ($2,700+), Partial ($5,000+), Full Suit ([FULL_SUIT_PRICE_TO_BE_PROVIDED]), Fursona Design, VRChat Avatar, VTuber Avatar, Other / Custom Request. Applied in design-system.html. Stage 8 form must use the same list (values: fursuit-head, fursuit-mini-partial, fursuit-partial, fursuit-full, fursona-design, vrchat-avatar, vtuber-avatar, other) and the serverless function must validate against it.
- Stage 3 (built from scratch, Oct 7 2026): Node build (scripts/build.mjs -> dist/), shared head/header/footer/social partials, accessible hamburger button (Esc closes, focus moves in), skip link, Discord/TikTok/Telegram block with Copy + Open, footer email reveal button (no plain mailto), 6 page shells + 404 with unique title/description/canonical/OG/Twitter, Organization JSON-LD on home, sitemap.xml, robots.txt, vercel.json 301 redirects (gallary/term). data/site.config.json holds the 8 form services. Tested 320-1920px: no horizontal overflow; menu works. Page bodies are visible placeholders until Stages 4-9.
- DEVIATIONS (need approval): (a) plain CSS from the approved design system instead of Tailwind, because Tailwind could not be installed offline; can switch later. (b) Google Fonts link instead of self-hosted fonts (no network to download); self-host in Stage 10. (c) build outputs to dist/ rather than repo-root HTML. (d) No images, favicon or og:image yet: none supplied.
- Note (superseded): the repo itself was not accessible in this session (no network), so Stage 3 code is not verified here; inspect git status before continuing.
- Stage 1: audit completed; PROJECT_STATUS.md created.
- Stage 2: added `design-system/index.html` (standalone preview: colours, type, buttons, cards, pricing, nav, Discord/TikTok/Telegram block, form, motion, responsive rules). Live site files untouched. Noted content question for Stage 7: Partial tier text says "Full zippered body suit" — confirm wording with client now that a separate Full Suit tier exists; existing pricing note says prices are starting estimates and "Negotiable" — preserve.

- Stage 4 (Oct 7 2026): homepage built. Hero (H1 "Custom fursuits and character design", original tagline, CTA to /contact and /gallery), About (original bio kept; "the Kenny behind" reworded to "the creator behind", typos fixed), 4-service preview (fursuit links to /pricing; other three "Request a quote" to /contact), 4-image gallery strip, contact band with Discord/TikTok/Telegram. Images: 6 portfolio photos converted to WebP (480/960) via scripts/optimize-images.py; alt text describes only what is visible. Favicon + apple-touch icon generated from "Floral void.png". Tested 320-1920px, no overflow, lazy images load. Original 50 JPGs and the zip's old pages are NOT in this project yet (Stage 5 will import images).
- User style note: all code must read as clean, human-written (see preferences). Service-card copy and the hero tagline wording are draft: confirm with client.
- Original site facts confirmed from the uploaded repo: single commit "Initial website"; images/A is a 2-byte stray file (ignore); logo "Floral void.png" is 2000x2000 RGBA.

- Stage 5 (Oct 7 2026): gallery built from data/gallery.json (one place to edit categories, alt text, hidden flags). 43 photos shown: Heads 18, Partials 7, Full Suits 18, Work in Progress 0 (visible placeholder `[WIP_PHOTOS_TO_BE_PROVIDED]` until supplied). Same-character photos sit next to each other in "All". Filter buttons (aria-pressed, live count), masonry layout, lazy thumbnails with width/height (no layout shift), native <dialog> viewer (arrows, Esc, focus returns to tile). Tested 320-1920px: no overflow, no JS errors.
- Image quality: every photo is served as WebP quality 92 at its full original size (capped at 1000px, which is what the originals are) with a 480px thumbnail at quality 90. Untouched originals are kept in source-images/. Homepage images regenerated at the same quality (file suffix -960 became -1000).
- HELD BACK from the gallery (hidden:true in data/gallery.json) until permission is confirmed because they show people: 6, 10, 25, 29, 33, 39. Also left out: 1.jpg (299x252, too small). Set hidden to false to publish any of them.
- Titles/captions: none invented; the photo's alt text is shown as its caption.

- Stage 5 decisions (user): gallery approved as built. Keep 6, 10, 25, 29, 33, 39 and 1.jpg excluded until client confirms permission. Work in Progress stays at 0 with its placeholder until the client names the photos. Original JPGs stay in source-images/. Viewer behaviour stays thumbnail first, full-size only when a photo is opened.
- WIP follow-up (Oct 9 2026): user supplied 14 photos + 1 video in public/work-in-progress/. 2 were exact byte-duplicates (deleted: 12.11.20 PM (3) and (4)); the other 12 published as gallery items wip-01…wip-12 (category wip, all tagged "In progress" with a tile badge + viewer caption prefix). Originals moved to source-images/work-in-progress/ (not deployed); WebP 480/1000 outputs in public/images/portfolio/. The `[WIP_PHOTOS_TO_BE_PROVIDED]` empty message is now generic ("No photos in this category yet") since Furry is still at 0. Two WIP photos show a person (wip-06 fit test with eyes visible through the base; wip-07 lower-body try-on, no face) — user supplied them, so published; remove on request. Video parked: gallery renderer/viewer is photo-only.
- WIP video player (Oct 9 2026): MP4 published as gallery item wip-video-01
  (400x720 portrait, 2.6 MB in public/videos/). Tile shows first frame
  (preload metadata only) with play overlay + "In progress" badge;   viewer dialog
  now swaps between photo and video, pauses on close/navigation. Status line says
  "items" instead of "photos". Checked Oct 9 2026: the MP4 contains a real audio
  track (655 samples), and the viewer plays it unmuted with controls — sound starts
  when the visitor presses play (browsers block autoplay with sound). The tile
  preview itself is silent by design. Video alt text confirmed.
- Video sound (Oct 9 2026, user picked #3): mixed Kevin MacLeod “As I Figure”
  (mellow guitar, CC BY 3.0) into public/videos/wip-video-01.mp4 — first 15.2s,
  0.5s fade-in, 2s fade-out, AAC 128k; picture stream copied untouched (+237 KB).
  Silent original kept in source-images/work-in-progress/. Credit line renders in
  the viewer caption via the item's credit field. Other previews were
  Meditation Impromptu 01/02 (rejected). User approved Oct 9 2026 ("perfect").
- Stage 6 (Oct 7 2026): Services page built. H1 "Services" (old "photography" claim removed), jump links, four sections with anchors (#fursuit-making, #fursona-design, #vrchat-avatar-creation, #vtuber-avatar-creation). Copy is the original service text with typos fixed. Fursuit section lists Head Only from $1,500, Mini Partial from $2,700, Partial from $5,000, Full Suit [FULL_SUIT_PRICE_TO_BE_PROVIDED], plus the original estimate/deposit note, and links to /pricing. Other three show "Request a Quote". Each CTA links to /contact?service=<value> (values match data/site.config.json; the Stage 8 form must read this parameter and preselect the service; "other" is used by the custom-request link). Service JSON-LD for all four services (build supports meta.jsonLd). Closing band with Discord/TikTok/Telegram and a link to Terms.
- Bug fixes this stage: outline buttons on navy sections (homepage hero and contact band) were navy on navy and invisible; now white with gold border. Build script now accepts multi-line page meta.
- Tested: no horizontal overflow at 320, 360, 375, 390, 414, 768, 1024, 1280, 1440, 1920px; one 320px overflow (long price placeholder) found and fixed. Only inline text links in paragraphs are under 44px tall.
- Open copy questions: service descriptions are the client's original short lines (no extra claims added); confirm whether the client wants more detail (what is delivered, turnaround) and supply it, since none is confirmed.

- Packaging (user request): each stage zip unzips to one `floral-void/` folder (src, data, public, source-images, scripts, dist, vercel.json, README, PROJECT_STATUS.md). `dist/` is the built site for previewing with VS Code Live Server; Vercel builds it itself.
- Stage 7 (Oct 8 2026): Pricing page built. H1 "Fursuit Commission Pricing". Cards: Head Only $1,500+, Mini Partial Suit $2,700+, Partial Suit $5,000+, each with the ORIGINAL feature list preserved (typos fixed, meaning unchanged, incl. "Full zippered body suit fitted to your duct tape dummy"; still to confirm wording with client). Full Suit card shows [FULL_SUIT_PRICE_TO_BE_PROVIDED] and [FULL_SUIT_FEATURES_TO_BE_PROVIDED]; no price or features invented. "Before you commission" notes: starting estimates vary with complexity, colors, extras (removable tongues, LED eyes, extra padding), negotiable; non-refundable deposit secures the slot; quotes valid 60 days (from Terms section 2) with link to /terms. "Priced by quote" cards for Fursona Design, VRChat Avatar, VTuber Avatar and Other / Custom Request. All buttons link to /contact?service=<value>.
- Fixes this stage: hero sections were padded twice (design-system .hero plus page padding), making heroes too tall on every page; fixed. Footer "Open Discord/TikTok/Telegram" outline buttons were dark on navy; now white/gold. Long placeholders no longer cause overflow on phones.
- Tested: no horizontal overflow at 320, 360, 375, 390, 414, 768, 1024, 1280, 1440, 1920px on Pricing; 320/414/1280 re-checked on Home, Gallery and Services after the hero fix.

- Stage 7 decisions (user): Pricing approved. Partial Suit wording "Full zippered body suit" stays unchanged. CLIENT CLARIFICATION NEEDED: confirm whether the Partial Suit should still be described as a "Full zippered body suit" now that a separate Full Suit tier exists. Full Suit price and features stay as placeholders on the Pricing page; do not invent either.
- Stage 8 (Oct 8 2026): commission form built on /contact, sending through Resend via a Vercel serverless function.
  - Files: api/commission.js, api/_lib/validate.js, api/_lib/email.js, src/pages/contact.html, src/js/contact.js, scripts/contact-form.mjs, scripts/dev-server.mjs, scripts/test-commission.mjs, .env.example, README.md (setup), vercel.json (function config), package.json (scripts), .gitignore (.env), CSS in src/site.css, data/site.config.json.
  - Form: Name, Email (required); Discord username, Budget (optional); Service, Project description (required, min 20 chars); Character info, Reference links, Additional notes (optional); Terms checkbox (required, links to /terms); hidden honeypot. All 8 services in the selector, grouped, with the same prices as the Pricing page. ?service= from Pricing/Services buttons preselects (unknown values are ignored).
  - Full Suit in the form shows "Request a Quote" (a professional placeholder, no price invented). The Pricing page still shows [FULL_SUIT_PRICE_TO_BE_PROVIDED]. To publish the real price: set price (and priceConfirmed true) for fursuit-full in data/site.config.json and update pricing.html and services.html.
  - Server: validates and sanitizes independently, ignores unknown fields, escapes HTML, rejects header injection, honeypot (quiet success, nothing sent), same-site check, JSON only, size limit, per-address rate limit (best effort), idempotency keys so a retry cannot send twice, generic errors to the browser. If the owner email fails, the user sees an error (never a false success). If only the confirmation email fails, the user is told the application was received but the confirmation could not be sent.
  - Emails: owner notification lists every field plus date/time (UTC) with Reply-To = applicant email. Applicant confirmation names the service, makes no response-time promise, lists Discord/TikTok/Telegram, and has Reply-To = owner email. Threading in Gmail is not guaranteed.
  - Env vars (Vercel only): RESEND_API_KEY (required), COMMISSION_FROM_EMAIL (required, must be on a verified Resend domain), COMMISSION_TO_EMAIL (optional, defaults to abdakeemkehinde@gmail.com).
  - Tests run: 17 API tests with a fake Resend (npm test) all pass. Browser tests (mock email dev server): no overflow, clipped inputs or small touch targets at 320, 360, 375, 390, 414, 768, 1024, 1280, 1440, 1920px; all 8 options present; all 8 Pricing buttons preselect correctly; client validation and focus; server 400, 500, network failure and slow response (single request, button disabled, "Sending…"); success state and focus; Reply-To verified; secret scan of src, dist, public, data found no keys. Only console errors were Google Fonts blocked by the sandbox and the deliberately simulated failures.
  - NOT tested: real delivery through Resend (no key available here) and the live Vercel deployment. First real test must be done after the env vars are set.
- Fixes this stage: "Open Discord/TikTok/Telegram" buttons on the contact aside were invisible (dark on navy); fixed.

- Stage 8 provider swap (Oct 8 2026, no custom domain): Resend removed because the client
  will not purchase a custom domain (Resend needs a verified sending domain). The form UI,
  validation, responsive behavior, accessibility and all 8 service options are unchanged;
  only the delivery layer changed to Web3Forms (browser posts to
  https://api.web3forms.com/submit; static-only Vercel deploy, no server code, no DNS).
  - Removed: api/commission.js, api/_lib/validate.js, api/_lib/email.js, .env.example,
    RESEND_API_KEY / COMMISSION_FROM_EMAIL variables and docs, the vercel.json functions
    block, the dev-server Resend mock, and the Resend API tests. No Resend npm package
    was ever installed (it used fetch), so nothing to uninstall.
  - Added: access_key hidden input (value from data/site.config.json forms.accessKey,
    currently the WEB3FORMS_ACCESS_KEY placeholder), botcheck honeypot (was
    companyWebsite), subject/from_name fields, Reply-To via the applicant `email` field
    (free Web3Forms behavior). Success is only shown on a real {success:true} response and
    never promises a confirmation email (autoresponder is a paid Web3Forms feature).
  - Client-confirmed content applied at the same time: Full Suit $7,000+ provisional
    starting price (one place: data/site.config.json) with the 5 confirmed features
    (head, handpaws, feetpaws, full zippered bodysuit, tail); Partial Suit no longer
    claims a full bodysuit; Fursona / VRChat / VTuber stay "Request a Quote"; VRChat
    section links https://www.tiktok.com/@kehindestudio__1; gallery gains a Furry filter
    (0 items until the client supplies media; WIP now has 12 photos, video still parked).
  - Recipient: abdakeemkehinde@gmail.com (the Web3Forms account/key must belong to this
    address; abdakeemk@gmail.com is NOT used). No file-upload input added: attachments
    are a paid Web3Forms feature, so reference links stay the primary method on free.

- Stage 10 (Oct 9 2026): audit completed, 2 fixes shipped.
  - Measured: dist 11.7 MB total, but initial page loads stay light — the heavy
    files (2.6 MB video, 100–235 KB full-size viewer images) only download on
    demand; gallery thumbs lazy-load; HTML pages 8–32 KB.
  - Contrast: all 12 text/background pairs pass WCAG AA (lowest: gold-ink on
    ivory 4.53). Labels/names: every field, button and link has an accessible
    name (gallery tile buttons named by their photo alt). One h1 per page,
    no missing alt, empty alts only where legitimate (lightbox JS placeholder,
    aria-hidden hero slides).
  - Fix 1 (SEO): share image added — public/og-image.jpg (1200x630, 77 KB:
    portfolio photo + gold FLORAL VOID + tagline on navy). og:image on all
    pages, twitter card upgraded to summary_large_image.
  - Fix 2 (performance): Google Fonts removed — 5 latin woff2 files (~98 KB)
    self-hosted in public/fonts/ with display=swap. Zero third-party requests
    site-wide now.
  - Left for owner after deploy: Search Console submission. No ranking
    guarantees, per workflow rules.
- Stage 11 (Oct 9 2026): final QA sweep, 9/9 checks pass, zero issues:
  internal links + anchors resolve, all referenced assets exist, no stray
  placeholders/lorem/TODOs, no duplicate ids, all JSON-LD parses, sitemap has
  all 6 URLs, robots references sitemap, all ?service= links valid, no stale
  provider/secret refs in dist. npm test 11/11. User confirmed live site shows
  nothing broken.

## 13. Next recommended action
Owner reviews the Terms page, then approves Stage 9. Next: gallery WIP/Furry details
when the client supplies media (Stage 5 follow-up), then Stage 10 (Performance / SEO /
accessibility audit).

- Stage 9 (Oct 9 2026): Terms page built from the ORIGINAL term.html recovered from the
  repo's first commit (68b6f2c) — all 7 sections preserved in meaning and wording
  (typos fixed; literal `*asterisks*` from unrendered markdown now render as
  emphasis/strong; no clause added, removed or softened). Native `<details>`
  accordions (no JS, keyboard accessible, section 1 open by default), numbered badges,
  closing "Ask before you commission" band linking to /contact. Tested via build +
  npm test 11/11; visual check at all widths still needed on user approval.
- Terms age-clause change (Oct 9 2026, user-requested): first removed the under-18
  parental-consent sentence, then removed the 18+ requirement entirely from
  section 1. The page now has NO age condition — anyone of any age may commission.
  This differs from the original site; confirm with the client. User confirmed
   Oct 9 2026 ("yes") — no age limit stands.
- Fursona gallery follow-up (Oct 10 2026, user-supplied): 11 fursona ref sheets
  added as gallery items furry-01…furry-11 (category furry, all visible).
  Originals moved to source-images/fursona/fursona-01…11.jpg (not deployed);
  WebP 480 (q90) / full (q92, capped 1000px) outputs as
  public/images/portfolio/portfolio-furry-NN-*.webp. The misspelled
  public/images/portfolio/forsona/ upload folder is gone. Filter renamed
  Furry → Fursona Art (scripts/gallery.mjs label only; category id stays
  furry; gallery title/meta now say "Fursona Art"). Alt text describes only
  what is visible, including visible character labels (Kentaro, J, LYCOS,
  KAIL, Shiny Bunny, JFET, Gargoyle). Verified: build ok, npm test 11/11,
   67 visible tiles of 73 items, 11 furry tiles, all 22 WebP present.
   (Video placement resolved Oct 10 2026 — see WIP videos follow-up below.)
- Avatar gallery follow-up (Oct 10 2026, user-supplied): 4 Blender screenshots
  added as gallery items avatar-01…avatar-04 (new category avatar, filter
  label "Avatars"). Originals copied to source-images/avatar/ (not deployed);
  deployed JPGs stay at public/images/portfolio/avatar/IMG-20261009-WA*.jpg
  (24–200 KB; served as-is — no WebP conversion tooling in this env, so
  scripts/gallery.mjs now supports an explicit `file` field per item).
  Gallery title/meta/lead now mention avatars. Alt text describes only what
  is visible (model colours, view, Blender — no service claims invented).
   Verified: build ok, npm test 11/11, 71 visible tiles (Avatars 4), 4 tiles
   reference the JPGs, dist carries the 4 files.
- WIP videos follow-up (Oct 10 2026, user confirmed both are workshop clips):
  video2.mp4 (23s, 360x642, 2.24 MB) + video3.mp4 (17s, 360x642, 1.66 MB)
  added as gallery items wip-video-02/03 (category wip, "In progress" tag).
  Tiles use preload="metadata" (first frame only); viewer preload="none"
  (full file only on play) — no page-load data cost. No music mixed yet:
  user picking from 4+4 Kevin MacLeod shortlist (CC BY 3.0); mix recipe is
  the video-1 one (trim to duration, 0.5s fade-in, 2s fade-out, AAC 128k,
  picture copied). After mixing, replace the MP4s and add the `credit`
  field — no other gallery change needed.
   Verified: build ok, npm test 11/11, 73 visible tiles (WIP 15 = 12 photos + 3 videos).
- Music decision (Oct 10 2026, user: "leave it"): wip-video-02/03 keep their
  original workshop audio — no music mixed. Both files contain a real AAC
  audio track (verified by byte check: 1 vide + 1 soun/mp4a each); the earlier
  "silent" claim was a bad shell-property read, corrected. Music (Cattails,
  CC BY 3.0) can be added anytime later: replace the MP4s + add `credit` —
  no gallery change needed.
- REBRAND to VELVET HOWL (Oct 10 2026, user: new owner, same structure):
  brand FLORAL VOID -> VELVET HOWL everywhere in src/, data/, scripts/
  (header/footer/SEO/JSON-LD/form messages/build log); artist Kehinde ->
  Dimeji (bio otherwise identical); Discord eloradebby ->
  horla_dimeji (url placeholder https://discord.com/app until numeric ID
  supplied); Telegram removed (not supplied yet); TikTok removed (none;
  VRChat TikTok button deleted from services.html); email + form
  recipient abdakeemkehinde@gmail.com -> abdullahkolawole48@gmail.com;
  Web3Forms accessKey reset to WEB3FORMS_ACCESS_KEY placeholder (new
  owner must create key with the new Gmail); domain ->
  https://velvet-howl.vercel.app (confirm); package name ->
  velvet-howl; README updated. Gallery/pricing/services structure
  unchanged (73 tiles). Verified: build 6 pages, npm test 11/11,
  qa-check 9/9. Still open: Web3Forms key, Discord numeric ID,
  Telegram, domain confirm, og-image/favicon still show old art,
  git remote still origin abdakeemk-web/FLORAL_VOID.
- MOONLIT VELVET palette (Oct 10 2026, user approved option A — own
  identity color, not the teal file, not old gold): src/design-system.css
  tokens navy #0A1A3A/deep #060F24/soft #16294F -> plum #221335/#150B20/
  #342049; gold #D4AF37/light #E6CB6F/ink #8A6F12 -> lilac #B79CDB/
  #D9C8F2/#6E4E9E; ivory/line/muted/mist -> #FAF7F2/#E6DFD6/#5F5B6E/
  #C9C4D6; shadows/glows remapped (10,26,58->34,19,53; 212,175,55->
  183,156,219; 6,15,36->21,11,32); input border #AEB4C2->#B7B1C6;
  theme-color #0A1A3A->#221335 in head.html. Variable names (--navy/
  --gold) kept to avoid churn. Layout, typography, states, animations
  untouched. design-system-for-Velvet.html (teal draft) superseded, left
  in place. Verified: build 6 pages, npm test 11/11, qa-check 9/9,
  dist carries new tokens, zero stale navy/gold values in src or dist.
  Still open: visual side-by-side approval, og-image/favicon art.
- Brand word gap (Oct 10 2026, user: words looked joined in header):
  the brand link is display:inline-flex, which trims the plain space
  between VELVET and the HOWL span — so it rendered as one joined word.
  Fixed with margin-left:.2em on .brand span (src/site.css:11); applies
  to header + footer (same class). Verified: build ok, qa-check 9/9.
- Brand size (Oct 10 2026, user: brand looks too big): header/footer
  brand 1.25rem/.14em tracking -> 1.05rem/.12em (src/site.css).
  Verified: build ok, qa-check 9/9.
- HEAD gallery batch (Oct 10 2026, user-supplied 27 photos, replace mode):
  all 18 old head items set hidden:true (reversible); 27 new items
  vhead-01…27 added (category head, deployed JPGs at
  public/images/portfolio/head/vhead-NN.jpg served as-is like the
  avatar batch, no WebP tooling for these names; originals stay in
  source-images/HEAD/). Alt text written from viewing each photo.
  Incident: the append edit dropped avatar-03 (id mismatch in my
  oldString); caught by item-count check (105 vs 106) and restored —
  verified 106 items, no dup ids, avatars 01-04 intact. Verified:
  build 6 pages, npm test 11/11, qa-check 9/9, 82 visible tiles.
  Flags for user: vhead-10 shows a person wearing the head; vhead-07
  collage has another maker's signage in the background; vhead-25 is
  an unfinished   foam base; near-duplicate pairs imported per
  instruction (19/22, 20/23, 21/24); vhead-10 (552px) is the softest
  source. Next batches: PARTIAL (18), cat (4), avatars (50),
  work_in_progressvelt (21).
- Quality-hold rule (Oct 10 2026, user: "anything you think may not fit
  well, tell me, don't add it"): vhead-10 (person visible), vhead-07
  (another maker's signage), vhead-25 (unfinished foam base) set
  hidden:true — files kept, one-line change restores any of them.
  Near-duplicate pairs stay live (user explicitly chose import-all).
  Rule applies to all future batches: hold back + report, never
  silently publish. Verified: build ok, qa-check 9/9, 79 tiles.
- Foam base moved to WIP (Oct 10 2026, user approved): vhead-25 ->
  wip-foam-01, category wip, status "In progress", visible. File stays
  at public/images/portfolio/head/vhead-25.jpg (no move needed).
- PARTIAL gallery batch (Oct 10 2026): all 18 viewed. 7 old partials
  hidden:true (reversible); 13 new items vpartial-01…13 added
  (deployed JPGs at public/images/portfolio/partial/, served as-is;
  originals in source-images/PARTIAL/). Held back per quality rule
  (in source-images/ only, never published): 5.03.09 PM (2) + 5.03.09
  PM + 5.03.12 PM (people visibly modeling suits), 5.03.09 PM (3)
  (human hands in collage frames). Counts verified by script:
  119 items, 0 dup ids, partials 13 visible. Verified: build 6 pages,
  npm test 11/11, qa-check 9/9, 86 visible tiles
  (full 18 / wip 16 / furry 11 / avatar 4 / head 24 / partial 13).
  Remaining: cat (4), avatars (50), work_in_progressvelt (21).
- Hand collage released (Oct 10 2026, user: clients accept seeing
  people with suits): vpartial-14 added (blue partial seven-view
  collage, hands visible, alt text says so). 4 modeled shots stay
  held. Verified: build ok, qa-check 9/9, 87 tiles.
- Cat batch (Oct 10 2026): all 4 viewed — judgment call: these are
  full-body suit photos (orange tiger fullsuit outdoors x2, brown
  tabby full suit indoors x2), NOT fursona ref-sheet art, so added as
  vfull-01…04 in Full Suits (added alongside the 18 old fulls, which
  stay). Fully-covered wearers, no identifiable person. Verified:
   build 6 pages, npm test 11/11, qa-check 9/9, 91 visible tiles.
   Remaining: avatars (50), work_in_progressvelt (21).
- AVATAR gallery batch (Oct 11 2026, replace mode per user): all 50
  viewed. 4 old avatar-01…04 set hidden:true (reversible); 42 new
  items vavatar-01…42 added (deployed JPGs at
  public/images/portfolio/avatar/IMG-20261009-WA*.jpg served as-is;
  originals stay in source-images/avatars/). Alt text written from
  viewing each shot. 8 held back per quality rule in source-images/
  only, never published: WA0168 + WA0170 + WA0176 + WA0198
  (explicit genitalia), WA0177 (fully nude human), WA0175
  (Snipping-Tool popup overlay), WA0201 (Blender error-text
  overlay), WA0187 (gun prop) — user confirmed extra holds
  ("Hold watermarked + gun"). Notes: 0164/0204 + 0165/0212 +
  0173/0174 are front/back pairs of the same models; 0211 cap
  shows a Kirby logo; many screenshots carry an "Activate Windows"
  watermark (left as-is, no edit). Verified: build 6 pages,
  npm test 11/11, qa-check 9/9, 129 visible tiles
  (full 22 / wip 16 / furry 11 / avatar 42 / head 24 / partial 14).
   Remaining: work_in_progressvelt (21).
- WIP-VELT gallery batch (Oct 11 2026, additive, user: "let do work in progress"):
  all 21 viewed. 20 new items vwip-01…20 added (category wip, "In progress"
  tag, deployed JPGs at public/images/portfolio/wip/vwip-NN.jpg served
  as-is; originals stay in source-images/work_in_progressvelt/). Alt text
  written from viewing each photo (foam legs/feet, foam + 3D-printed head
  bases, Bambu Lab printer, mannequin busts). 1 held back per quality rule
  in source-images/ only, never published: 6.04.23 PM (2).jpeg (Avito
  listing screenshot with X button + Avito watermark). Flag: vwip-01 lower
  panels show a person trying on a footpaw with bare leg/foot visible —
  consistent with published wip-06/07 try-ons; remove on request. Verified:
  build 6 pages, npm test 11/11, qa-check 9/9, 149 visible tiles
  (full 22 / wip 36 / furry 11 / avatar 42 / head 24 / partial 14).
- Old full suits removed (Oct 11 2026, user: "remove all the full suit from
  websit before"): all 21 pre-rebrand full items set hidden:true
  (reversible; 18 were visible, 3 already hidden). Only vfull-01…04
  (user-sent cat batch) stay visible. Verified: build 6 pages,
  npm test 11/11, qa-check 9/9, 131 visible tiles
  (full 4 / wip 36 / furry 11 / avatar 42 / head 24 / partial 14).
- Videos removed (Oct 11 2026, user: new owner sent no videos): all 3
  wip-video-01/02/03 set hidden:true (reversible; files stay in
  public/videos/). Gallery is photo-only again. Verified: build 6 pages,
  npm test 11/11, qa-check 9/9, 128 visible tiles
  (full 4 / wip 33 / furry 11 / avatar 42 / head 24 / partial 14).
- About image swap (Oct 11 2026, user asked for a suitable new-owner image):
  homepage About now uses vhead-09 (white/light blue fox, 735x994) instead
  of old portfolio-03. Picked for friendly front view over vhead-06
  (pro Sabre-tooth but fanged) per visitor appeal. Verified: build 6 pages,
  npm test 11/11, qa-check 9/9, 128 tiles.
- About image re-pick (Oct 11 2026, user rejected vhead-09): homepage About
  now uses vhead-12 (black/white husky, tongue out, 810x1080, clean white
  background) over vhead-02 (cluttered background) and vhead-19. Verified:
  build 6 pages, npm test 11/11, qa-check 9/9, 128 tiles.
- About image cat pick (Oct 11 2026, user asked for a cat): homepage About
  now uses vhead-11 (cream/black/gray cat, purple eyelids, pink nose,
  810x1080) — the only finished cat head; full-cat suits and Blender cat
  avatars don't fit the portrait About frame. Verified: build 6 pages,
  npm test 11/11, qa-check 9/9, 128 tiles.
- About image fullsuit cat (Oct 11 2026, user clarified: the cat under Full
  Suits): homepage About now uses vfull-04 (brown tabby full cat on green
  ottoman, front view, 810x1080) over vfull-03 (floor sit, 3/4 angle).
  Verified: build 6 pages, npm test 11/11, qa-check 9/9, 128 tiles.
- Homepage images swap (Oct 11 2026, user: hero + strip still showed old
  website): hero slideshow now vfull-01 (tiger fullsuit outdoors) /
  vhead-06 (sabre-tooth studio) / vpartial-02 (partial set) / vhead-12
  (husky); recent-work strip now vhead-02 (turquoise dog) / vhead-11 (cat)
  / vhead-19 (rust-orange) / vfull-04 (tabby fullsuit). No old portfolio-*
  images remain on the homepage. Verified: build 6 pages, npm test 11/11,
  qa-check 9/9, 128 tiles.
- About copy rewrite (Oct 11 2026, user-supplied draft polished): homepage
  About no longer carries the old-owner bio (location, hearing impairment,
  2021 degree, since 2019 — unverified for the new owner). New copy follows
  the user's draft, names the real services (fursuits, fursona, VRChat /
  VTuber avatars), makes no invented claims, and ends with a /contact CTA.
  Verified: build 6 pages, npm test 11/11, qa-check 9/9, 128 tiles.
  Flag: page meta description still says "Northeast Ohio fursuit maker" —
  confirm if that location still applies or remove it.
- Location claim removed (Oct 11 2026, user: "remove it"): homepage meta
  description no longer says "Northeast Ohio fursuit maker". Verified no
  "Ohio" remains in src pages/partials or dist HTML. PROJECT_STATUS history
  lines keep the old bio for the record. Verified: build 6 pages,
  npm test 11/11, qa-check 9/9, 128 tiles.
- Pushed to GitHub (Oct 11 2026, user: "let push to github"): commit
  499fbdf "Homepage new-owner photos, About rewrite, hide old fulls and
  videos" (61 files) pushed to origin main (ZACCH0/-velvet-howl). First
  push attempt hit HTTP 408 on the large photo payload; retried with a
  larger http.postBuffer and it went through. Vercel builds automatically
  on push. Note: this PROJECT_STATUS push note itself is unpushed; push
  again to sync it.
- Old-website audit (Oct 11 2026, user asked to check for harmful or
  confusing leftovers): clean — no old brand text (FLORAL/VOID, Kehinde,
  eloradebby, nadafunk, Telegram, Ohio) in src/data/dist, no secrets, no
  http:// links, no lorem/TODO. Two live leftovers fixed: (1) build.mjs
  hardcoded a preload for old portfolio-21 hero — now vfull-01;
  (2) Services fursuit section still showed old portfolio-20 magenta suit
  — now vfull-02 tiger close-up. Only placeholder left is the known
  WEB3FORMS_ACCESS_KEY. Verified: build 6 pages, npm test 11/11,
  qa-check 9/9, 128 tiles, zero stale homepage/services photo refs.
  Still open, needs user call: old-owner WIP-01…12 tiles still live in the
  gallery; hidden old fulls/videos ship as dead files in dist (22.8 MB);
  og-image + favicon still show old art.
- Old-website purge (Oct 11 2026, user: delete, don't hide — also keep it
  off GitHub): user deleted source originals (49 portfolio JPGs,
  source-images/work-in-progress/, source-images/avatar/) + 3 public
  videos; I removed 68 gallery entries (49 numbered old items, wip-01…12,
  wip-video-01/02/03, avatar-01…04) and deleted 122 dead public WebPs
  (98 numeric + 24 wip). Kept 4 old avatar JPG filenames: visible
  vavatar-07/11/20/29 reuse those files (new-batch overwrite). Verified:
  build 6 pages, npm test 11/11, qa-check 9/9, 116 visible tiles
  (full 4 / wip 21 / furry 11 / avatar 42 / head 24 / partial 14),
  dist 22.8 MB -> 7.9 MB. Still open: og-image + favicon old art
  (needs new art first).
- Brand art refresh (Oct 11 2026): og-image.jpg rebuilt (1200x630, plum
  + tiger fullsuit photo + VELVET HOWL tagline, no old gold/art);
  favicon.png (48) + apple-touch-icon.png (180) now ivory VH monogram on
  plum. Verified: build 6 pages, npm test 11/11, qa-check 9/9, 116 tiles.

## 14. Session rule (locked, Oct 10 2026)
- At the START of every session: read PROJECT_STATUS.md, README.md and
  data/site.config.json before doing anything.
- At the END of every change: append a dated entry to §12/§13, run
  `node scripts/build.mjs`, `npm test`, `node scripts/qa-check.mjs`,
  and report results. Never finish a session with an unlogged change.
