# Capital Rush v13.0 — Three strikes, 10-second rounds, and Airport Rush flags

## What's new in v13.0

- Timed runs now allow **three strikes** in every game mode. A wrong answer or a timeout counts as one strike; the run ends on the third. Correct answers continue the run and add to the score.
- This applies to Capital Rush, Flag Rush, Outline Rush, Airport Rush, and Area Rush. Area Rush keeps its **15-second** round timer; all other modes now use **10 seconds** per question.
- Practice and mistake-review remain untimed and do not consume strikes, so they continue to work as learning modes.
- Airport Rush answer choices now include a small flag for the country or territory each airport serves. Five territory flag assets (Hong Kong, Macao, French Polynesia, Puerto Rico, and Taiwan) are included for airport entries that are not represented in the 195-country flag set.
- Updated the service-worker cache to **v13.0** and added the new airport flag assets to offline verification and pre-caching.

## Deployment

For an existing v12.9 deployment, upload: `index.html`, `sw.js`, `offline-assets.js`, and the five new files in `flags/` (`hk.svg`, `mo.svg`, `pf.svg`, `pr.svg`, `tw.svg`). Keep the existing 195 national flag SVGs, all 195 outline SVGs, `manifest.webmanifest`, and `icon-180.png` unchanged. `README.md` is recommended but not required for the app to run.

After deployment, open the app online once and wait for **Ready offline · all 5 modes** before using it offline.

---

# Capital Rush v13.0 — Three strikes, 10-second rounds, and Airport Rush flags

## What's new in v13.0

- Timed runs now allow **three strikes** in every game mode. A wrong answer or a timeout counts as one strike; the run ends on the third. Correct answers continue the run and add to the score.
- This applies to Capital Rush, Flag Rush, Outline Rush, Airport Rush, and Area Rush. Area Rush keeps its **15-second** round timer; all other modes now use **10 seconds** per question.
- Practice and mistake-review remain untimed and do not consume strikes, so they continue to work as learning modes.
- Airport Rush answer choices now include a small flag for the country or territory each airport serves. Five territory flag assets (Hong Kong, Macao, French Polynesia, Puerto Rico, and Taiwan) are included for airport entries that are not represented in the 195-country flag set.
- Updated the service-worker cache to **v13.0** and added the new airport flag assets to offline verification and pre-caching.

## Deployment

Upload the complete project structure from this ZIP, or for an existing v12.9 deployment upload: `index.html`, `sw.js`, `offline-assets.js`, and the five new files in `flags/` (`hk.svg`, `mo.svg`, `pf.svg`, `pr.svg`, `tw.svg`). Keep the existing 195 national flag SVGs, all 195 outline SVGs, `manifest.webmanifest`, and `icon-180.png` unchanged. `README.md` is recommended but not required for the app to run.

After deployment, open the app online once and wait for **Ready offline · all 5 modes** before using it offline.

---

# Capital Rush v12.9 — Expanded Airport Rush and current flags

## Changes from v12.8

- Airport Rush expanded from **100 to 371** distinct IATA-code questions covering global hubs and smaller regional airports.
- Four-choice distractors now prefer other airports within the **same metropolitan region**, falling back to exact city, then same country, then elsewhere. Explicit metro groups support IAD/DCA/BWI, BOM/NMI, YYZ/YTZ/YHM/YKF, JFK/LGA/EWR, and many others.
- Updated `flags/af.svg` to the **de facto flag used by the Taliban-led administration since August 2021** (white field, black Shahada), represented as a locally generated Arabic calligraphic rendering. The older black-red-green tricolor remains used by some Afghan diplomatic and diaspora representatives; this app chooses the de facto flag.
- Existing files for Syria (green-white-black with three red stars), Kyrgyzstan (straight sun rays), and Honduras (navy blue) already reflected their more recent designs, so they were not reuploaded.
- Service-worker cache bumped to **v12.9** to refresh the flag and application code. All five modes remain offline-ready after caching.

Note: This quiz is a geography and airport-code learning game. Some airports in the dataset are primarily general-aviation, low-scheduled-service, or secondary-city facilities; inclusion does not imply current scheduled passenger service.

## Deployment from v12.8

Only upload **`index.html`**, **`sw.js`**, **`flags/af.svg`**, and optionally **`README.md`**. The other 194 flag SVGs, 195 outline SVGs, offline-assets.js, icon, and manifest are unchanged.

---

# Capital Rush v12.9 — Expanded Airport Rush and current flags

## Changes from v12.8

- Airport Rush expanded from **75 to 371** distinct IATA-code questions covering global hubs and smaller regional airports.
- Four-choice distractors now prefer other airports within the **same metropolitan region**, falling back to exact city, then same country, then elsewhere. Explicit metro groups support IAD/DCA/BWI, BOM/NMI, YYZ/YTZ/YHM/YKF, JFK/LGA/EWR, and many others.
- Updated `flags/af.svg` to the **de facto flag used by the Taliban-led administration since August 2021** (white field, black Shahada), represented as a locally generated Arabic calligraphic rendering. The older black-red-green tricolor remains used by some Afghan diplomatic and diaspora representatives; this app chooses the de facto flag.
- Existing files for Syria (green-white-black with three red stars), Kyrgyzstan (straight sun rays), and Honduras (navy blue) already reflected their more recent designs, so they were not reuploaded.
- Service-worker cache bumped to **v12.9** to refresh the flag and application code. All five modes remain offline-ready after caching.

Note: This quiz is a geography and airport-code learning game. Some airports in the dataset are primarily general-aviation, low-scheduled-service, or secondary-city facilities; inclusion does not imply current scheduled passenger service.

## Deployment from v12.8

Only upload **`index.html`**, **`sw.js`**, **`flags/af.svg`**, and optionally **`README.md`**. The other 194 flag SVGs, 195 outline SVGs, offline-assets.js, icon, and manifest are unchanged.

---

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
