# PZ Logo System

Source of truth
- `public/brand-assets/pz/pz-logo.svg` (primary mark)
- `public/brand-assets/pz/pz-icon.svg` (square-safe icon)
- Variants: `public/brand-assets/pz/pz-logo-dark.svg`, `public/brand-assets/pz/pz-logo-light.svg`

Generated assets
- `public/brand-assets/pz/png/` for logo and icon PNGs
- `public/brand-assets/pz/favicons/` for favicon and app icon sizes

Regenerate assets
1. `npm install --save-dev sharp`
2. `node scripts/generate-pz-assets.js`

Usage guidance
- Use `public/brand-assets/pz/pz-logo.svg` or `public/brand-assets/pz/pz-logo-dark.svg` on dark backgrounds.
- Use `public/brand-assets/pz/pz-logo-light.svg` on light backgrounds.
- Use `public/brand-assets/pz/pz-icon.svg` (or the PNG icon sizes) for square icons and favicons.
