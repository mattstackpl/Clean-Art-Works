# 🎨 Clean Art Works - Design System

This file defines the entire visual system (Design System) for the Clean Art Works project. Maintaining consistency in colors and font sizes allows for the rapid development of new subpages.

## 1. Brand Colors (Token: `brand`)
The main color palette is based on blue shades of cleanliness.
- **Primary:** `#145A5E` (`bg-brand`, `text-brand`) - Used for primary buttons and accents.
- **Dark:** `#103B3E` - Darker shade for buttons on :hover state.
- **Light:** `#EAF2FF` - Soft, light blue backgrounds.
- **Pastel / Pastel Dark / Pastel Hover:** A set of special blue tones used, for example, in the About Us section.

## 2. Accents & Surfaces
- **Accent:** `#F2704A` (`bg-accent`, `text-accent`) - A bright, eye-catching color to draw attention to CTAs (Call To Action).
- **Surface (Backgrounds):**
  - Default page background: `#F8F9FB`
  - Dark section (Hero/Footer): `#0B1B36`
  - Warm background (Testimonials): `#FFF8F2`

## 3. Typography System
Instead of hardcoding values in HTML, use the following system classes (tokens) to maintain heading consistency.

- **Headings Font:** `Outfit`, sans-serif
- **Body Font:** `Inter`, sans-serif

### Text Classes (Tokens):
- `.text-display-hero`: Massive heading on the main banner (Hero).
- `.text-display-huge`: The largest text on the site, e.g., for the Reviews Wall.
- `.text-stat`: A tighter token for large numbers (e.g., "99%").
- `.text-h1`: Standard H1 (e.g., contact form heading, About section).
- `.text-h2`: Standard H2 subheading introducing a section.
- `.text-h3`: Titles in service cards / tiles.
- `.text-h4`: Small titles in elements (e.g., email address title, FAQ accordion header).
- `.text-body-lg`: Larger paragraph text for descriptions ("lead").
- `.text-body`: Standard paragraph size (16px).
- `.text-body-sm`: Smaller text for details and footers (14-15px).
- `.text-label`: Widely spaced, uppercase text for badges/tags (e.g., "MEET THE TEAM").

## 4. Grid System & Layout
To manage content width and centering, use the pre-built components:
- `.container-default`: `max-w-7xl` (1280px) with horizontal paddings `px-6 lg:px-8`. The main backbone of the page.
- `.container-full`: Used to stretch sections to the full width of the screen (`w-full`), maintaining an elegant 60px padding on both sides (e.g., the large office photo in About Us).

## 5. File Architecture (Frontend)
- `index.html` - Homepage.
- `about.html` - Subpage skeleton.
- `theme.js` - Tailwind CSS Configuration (Design Tokens, Colors, Typography System). Embedded as `.js` to work locally via the `file://` protocol without NodeJS/Webpack.
- `main.js` - Global interactions (Mobile menu handling, FAQ, scrolling header).
