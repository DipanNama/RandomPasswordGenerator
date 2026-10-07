# Random Password Generator

A static on-device generator using Web Crypto. Length 8-64, selected-character-group coverage, optional lookalike exclusion, copy, reveal/hide, clear and saved light/dark theme. No account, uploads, analytics or password history. This is a generator, not a password vault.

## Local checks

Node 22: `npm test` (13 unit tests), `npm run build`. Serve `dist` with a static HTTP server. No installation step or client dependencies. Unit checks cover limits, selected groups, unbiased byte rejection and fail-closed behavior without secure randomness. Browser checks cover generation/masking/reveal/clear, invalid selection, length, theme persistence and mobile overflow.

## Security notes

Web Crypto `getRandomValues` supplies randomness. Byte rejection avoids modulo bias; whole-password rejection makes the output uniform over passwords satisfying selected-group coverage. No fallback to Math.random. Generated passwords exist in page memory and enter the system clipboard only on Copy. Clear removes them from this page, not your clipboard. Use a trusted password manager and MFA; avoid screenshots of real passwords. Theme is the only persisted value. Third-party scripts/fonts/assets are not loaded by the shipped page.

Reference: https://developer.mozilla.org/en-US/docs/Web/API/Crypto/getRandomValues

## Workflow

GitHub Pages Source: GitHub Actions; environment allowlist: main only. Only a push to main triggers Production Pages. Feature branches, PRs, tags and manual dispatch never build. Local tests/build and visual check precede one PR and squash merge to main. Dist is the only deployed artifact.

Legacy Next.js files remain in pages/components/public, with the old dependency manifest in legacy-package.json and yarn.lock. They are not shipped or installed by the production workflow. Issue #2's broader password-vault concept remains separate.

Button layout/styles adapted from Pines: https://devdojo.com/pines/docs/button . Component discovery checked through https://shoogle.dev/ and shadcn Button. Icons: Lucide (ISC), embedded locally from lucide-static; see LICENSE-icons. No remote dependencies.
