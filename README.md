# Capital Rush v12.8 — true-proportion outlines

## What's new
- Redrawn all 195 country silhouettes using a country-centered geographic distance projection and **one uniform scale** for both axes, correcting high-latitude distortions such as Finland.
- The outline has a transparent background, with no rectangular border, inset panel or gradient. Only white country shapes appear against the app's dark surface.
- Refreshed the shape-only distractor similarities to match the corrected SVGs.
- Offline readiness covers all 195 updated outlines and the existing flag library.

## Minimum files to upload (if already using v12.7)
1. `index.html`
2. `sw.js`
3. **all files inside `outlines/`** (195 updated SVGs)

`offline-assets.js`, `manifest.webmanifest`, `icon-180.png`, and the whole `flags/` directory are **unchanged**. Keep them on your web host. README.md is optional for deployment but recommended for GitHub.

## Offline updates
Launch the newly deployed app while connected. The app version changes the cache name, so the updated outline assets can be downloaded. Wait for **Ready offline · all 5 modes**, then test in Airplane Mode. iOS may evict cached files when storage is constrained.

# Capital Rush v12.7 — Outline Lookalikes

## What's new

- **Outline Rush** displays an offline white country silhouette against the app's dark background.
- Each question offers **exactly four country names**: the correct country and three silhouette lookalikes. Distractors are chosen from the eight closest computed shapes, then shuffled. **No neighbor-based selection or random unrelated filler** is used.
- Timed mode retains the **7-second** limit and one-mistake-ends-run rule. Practice is untimed.
- Outline Rush has its own records, last-10 timed history, recent-question memory, and mistake review, following the other game modes.
- The offline-ready check verifies cached files across **all five modes** including 195 country outline SVG assets.
- Original modes and saved progress are preserved. Existing v12.5 local-storage keys remain unchanged.

## How to install

Deploy all files and directories with their structure intact (`flags/` and `outlines/` are both required). Open the deployed site in iPhone Safari while online, then select **Share → Add to Home Screen**. Launch it online at least once and wait for **Ready offline · all 5 modes** before using it without connectivity.

## Files

- `index.html`: complete game interface, questions, gameplay, and outline distractor data.
- `outlines/`: 195 standalone country silhouette SVGs generated from the existing world GeoJSON data.
- `flags/`: 195 local national flag SVGs.
- `sw.js` and `offline-assets.js`: versioned offline cache and asset inventory.
- `manifest.webmanifest`, `icon-180.png`: iPhone/PWA installation resources.
- `README.md`: this document.

Notes: silhouettes are derived from a simplified world dataset, so very small islands and outlying territories may have reduced detail. Local Safari storage can be evicted by iOS, and installed webapps do not sync progress to the cloud.
