# Troopod-Shopify-Assignment

Purelane Shopify Dawn theme implementation with 5 merchant-editable sections.

## What's inside

- `purelane-dawn/` — Uploadable Dawn-based theme folder
  - `layout/theme.liquid` — Main layout with Google Fonts and CSS/JS includes
  - `templates/index.liquid` — Homepage template with section blocks
  - `assets/purelane.css` — Extracted V2 brand-colours CSS
  - `assets/purelane.js` — Reveal-on-scroll and rail sync
  - `sections/hero.liquid` — Hero banner with image, heading, CTAs
  - `sections/product-grid.liquid` — Real product grid bound to a Shopify collection
  - `sections/combos.liquid` — Horizontal-scroll combo rail with product picks
  - `sections/bundles.liquid` — Tiered bundle cards with product rows
  - `sections/reviews.liquid` — Auto-scrolling review marquee
  - `snippets/product-card.liquid` — Reusable product card with sold-out, no-image, long-title handling
  - `snippets/star-rating.liquid` — Star rating helper

## Setup

1. Create a Shopify Partner account and a new dev store.
2. Install the Dawn theme (latest) in the dev store.
3. Download the Dawn theme files via Shopify CLI or Theme Kit.
4. Copy the contents of `purelane-dawn/` into your Dawn theme folder, replacing/augmenting the equivalent files.
   - Place section files in `/sections/`
   - Place snippet files in `/snippets/`
   - Place `purelane.css` and `purelane.js` in `/assets/`
   - Update `layout/theme.liquid` to include the fonts and assets
   - Use `templates/index.liquid` as the homepage template
5. Upload the theme to Shopify and set the homepage to use the `index` template.
6. In the theme editor, configure each section:
   - **Hero**: Upload a background image, set heading/subheading/CTAs
   - **Product Grid**: Select a collection containing 8+ products
   - **Combos**: Add combo blocks with 2 product picks each
   - **Bundles**: Add bundle blocks with 1–3 product picks
   - **Reviews**: Add review blocks with name, title, text, and optional product

## Product requirements

Add 8+ products to the store, including:
- 1 sold-out product (inventory set to 0)
- 1 product with no featured image
- 1 product with a very long title

The `product-card.liquid` snippet handles all three edge cases gracefully.

## AI usage summary

- **Planning**: `deep-research-report.md` was generated as a structured 2-day plan using AI.
- **Schema design**: Section JSON schemas were drafted with AI assistance and then manually verified against Dawn conventions.
- **CSS extraction**: The prototype's V2 CSS block was extracted and cleaned using AI, with manual review for accessibility and performance.
- **Liquid templates**: Section and snippet files were generated iteratively with AI, then reviewed for Liquid syntax correctness and edge-case handling.

## Browser support

- Mobile-first responsive design
- Tested at 375px, 768px, and 1024px+
- Respects `prefers-reduced-motion`
- Keyboard navigable with visible focus states

## License

MIT — see `LICENSE`
