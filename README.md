# Thrive in Order

Next.js + TypeScript + Tailwind CSS, with shadcn/ui components, Motion, Lucide React, and the LottieFiles dotLottie React player.

## Run

`npm ci`

`npm run dev`

`npm run build` creates the static website in `out/`.

The build also normalizes Next 16.4 segment filenames emitted on Windows so the router's prefetch URLs resolve on ordinary static hosts. This step is a no-op when the export already contains the expected filenames.

`npm run typecheck` checks TypeScript.

## Content

Service descriptions, FAQs, and the contact email are in `src/lib/content.ts`. Replace the placeholder email and set `emailIsPlaceholder` to false before accepting enquiries. The contact form prepares an email draft in the browser; visitors review it and send it from their own email app. The site has no form submission server and stores no enquiry data.

The approved design combines the introduction from mockup A and the service list from mockup C. Home, Services, and Contact pages share the same design system. Supporting content mixes open sections and practical information cards.

## Assets and animation

The approved generated entryway and cupboard photographs are reused throughout the site. They are illustrative imagery, not client work. Originals are in `assets/plates/`, optimized WebP images in `public/images/`. Each image has embedded or sidecar provenance. Fonts are self-hosted under `public/fonts/` with their licenses.

The small sun animation is authored locally in `public/animations/brighter-days.json`, rendered with the LottieFiles player and a local WASM runtime. It plays once when visible. Motion and CSS transitions respect reduced-motion preferences. No external animation asset or photo request is required at runtime.

## Deployment

This is a static-exported Next.js site. Any host serving the `out/` directory can serve it. The `.openai/hosting.json` manifest tracks its private Sites preview.
