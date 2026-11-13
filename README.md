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
