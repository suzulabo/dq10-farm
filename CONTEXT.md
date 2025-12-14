# Project Context: DQ10 Farming Calculator

## Overview
A web-based tool for Dragon Quest 10 players to calculate optimal crop planting distribution.
URL: (Managed via Cloudflare Workers)

## Architecture
- **Tech Stack**: Single static HTML file (`static/index.html`) using Vue.js 3 (CDN) and Vanilla CSS.
- **Deployment**: Cloudflare Workers (Assets).
- **Package Manager**: pnpm.

## Key Files
- `static/index.html`: Contains all application logic, state management (localStorage), and UI styles.
- `wrangler.toml`: Cloudflare deployment configuration.
- `package.json`: Scripts for deployment.

## Features
1.  **Character Management**: Add/Rename/Delete characters.
2.  **Field Settings**: Toggle "Fairy" (2x yield) for Normal and Anywhere fields.
3.  **Inventory**: Input current stock levels.
4.  **Calculation**: Greedily assigns best-yield fields to lowest-stock crops to equalize inventory.
    - **Sorting**: output is post-processed to prioritize crop order: Potato -> Onion -> Lettuce -> Wheat -> Flower.

## Setup & Deployment
1.  Install dependencies:
    ```bash
    pnpm install
    ```
2.  Deploy to Cloudflare:
    ```bash
    pnpm run deploy
    ```
    *Note: Requires `vnt` (or `wrangler login`) authentication.*

## Future Work / Notes
- The app currently saves data to `localStorage`.
- Mobile layout has been optimized (prevented vertical text on buttons, adjusted body padding).
