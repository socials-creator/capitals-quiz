# Capital Rush — v12.4

An offline-capable, installable iPhone-friendly geography quiz with four modes: **Capitals, Flags, Airports, and Area**. Timed and Practice modes are preserved from v12.3.

## Offline readiness

The status pill on the home screen verifies the entire local asset inventory, including every flag SVG needed by any mode. It shows **Ready offline · all modes** only when all assets are in browser Cache Storage. Tap to recheck/retry while online. The miniature game badge shows the same result.

Open the webapp online using Safari, allow it to finish installing its offline resources, and wait for the green status. Then use Share → Add to Home Screen. Safari can evict cached resources if storage is constrained; the readiness indicator will detect this the next time the app opens.

## Deployment

Upload every file and the `flags/` directory together to the same HTTPS origin. Do not deploy `index.html` alone. A service worker requires HTTPS (except localhost), and local files opened with `file://` will not support the PWA cache.

## UX v12.4

Improved compact-screen spacing, keyboard focus visibility, optional pointer hover states, reduced-motion accessibility, status checking on online/service-worker changes, while leaving the original game modes, questions, timers, scoring and saved history intact.
