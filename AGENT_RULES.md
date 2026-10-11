# AGENT RULES — VELVET HOWL site (rebranded from FLORAL VOID, same structure)

Paste this at the start of every AI session. The AI must follow it.

## Identity
- Site: VELVET HOWL (was FLORAL VOID). Structure never changes, only identity.
- Owner: Dimeji / Discord `horla_dimeji` / `abdullahkolawole48@gmail.com`.
- TikTok: none. Telegram: pending (re-add when supplied).

## Start of every session
1. Read `PROJECT_STATUS.md` (full file).
2. Read `README.md`.
3. Read `data/site.config.json`.

## Rules
- Never invent prices, links, locations, reviews, awards, legal clauses, or business claims. Use visible placeholders.
- Never silently delete policies, pricing, assets, or contact info.
- Never put secrets in frontend code. Form posts to Web3Forms from the browser.
- Keep the same structure: `src/pages/`, `src/partials/`, `src/js/`, `data/`, `public/`, `scripts/`, `dist/`.

## End of every change
1. Append a dated entry to `PROJECT_STATUS.md` (§12/§13).
2. Run `node scripts/build.mjs`, `npm test`, `node scripts/qa-check.mjs`.
3. Report build + test + QA results.
4. Never finish a session with an unlogged change.
