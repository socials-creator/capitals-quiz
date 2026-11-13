# Capital Rush v12.5 — Premium Hybrid

An iPhone-friendly, installable offline geography game with **Capitals**, **Flags**, **Airports**, and **Area Rush**. The original timed game rules remain: one wrong answer ends a timed run; 7 seconds per standard question; 15 seconds per Area round. Practice has no timer.

## What's new

- 2-column touch-friendly mode selection on iPhone and improved responsive typography and spacing.
- A permanent **personal best** for each mode (stored separately from the last 10 timed results). Previous retained history is automatically used to initialize bests.
- **Review mistakes**: incorrect questions are saved separately for each mode on this device. Tap **Review mistakes** to practise only those questions without a timer; correct review answers clear the mistake. Area Rush saves missed sets of four countries.
- **Across-session anti-repetition**: recent question IDs are stored locally and less recently presented questions are prioritized when the next run is shuffled. Every run still includes the complete relevant dataset unless in mistake review.
- Optional haptic switch (only activates on browsers exposing the Vibration API; iPhone Safari typically does not support vibration from web pages).
- Improved touch sizes, screen reader semantics, subtle motion, reduced-motion support, and light next-question flag preloading.
- All-mode offline readiness indicator maintained. Tap it to retry caching missing files.

## Offline on iPhone

Host the whole folder under HTTPS, including all SVG files in `flags/`. Open in Safari online and wait for **Ready offline · all modes**, then use **Share → Add to Home Screen**. Open the installed app while online at least once. Cached files may be evicted by iOS when storage is constrained. Best scores, recent questions and mistakes are stored in browser local storage (not cloud-synced).

## Deploy

Upload the entire project, keeping filenames and the `flags/` directory. The new service worker uses cache `capital-rush-v12.5-all-modes` so updated sources are cached on next online visit.

## Files

- `index.html` – entire app and game logic
- `sw.js`, `offline-assets.js` – offline caching
- `manifest.webmanifest`, `icon-180.png` – installable PWA metadata and icon
- `flags/` – offline flag images
- `README.md` – this guide
