---
name: Precision Engineering Portfolio
colors:
  surface: '#0f1418'
  surface-dim: '#0f1418'
  surface-bright: '#343a3e'
  surface-container-lowest: '#0a0f12'
  surface-container-low: '#171c20'
  surface-container: '#1b2024'
  surface-container-high: '#252b2e'
  surface-container-highest: '#303539'
  on-surface: '#dee3e8'
  on-surface-variant: '#bdc8d1'
  inverse-surface: '#dee3e8'
  inverse-on-surface: '#2c3135'
  outline: '#87929a'
  outline-variant: '#3e484f'
  surface-tint: '#7bd0ff'
  primary: '#8ed5ff'
  on-primary: '#00354a'
  primary-container: '#38bdf8'
  on-primary-container: '#004965'
  inverse-primary: '#00668a'
  secondary: '#ffb95f'
  on-secondary: '#472a00'
  secondary-container: '#ee9800'
  on-secondary-container: '#5b3800'
  tertiary: '#ffc176'
  on-tertiary: '#472a00'
  tertiary-container: '#f1a02b'
  on-tertiary-container: '#613b00'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#c4e7ff'
  primary-fixed-dim: '#7bd0ff'
  on-primary-fixed: '#001e2c'
  on-primary-fixed-variant: '#004c69'
  secondary-fixed: '#ffddb8'
  secondary-fixed-dim: '#ffb95f'
  on-secondary-fixed: '#2a1700'
  on-secondary-fixed-variant: '#653e00'
  tertiary-fixed: '#ffddb8'
  tertiary-fixed-dim: '#ffb960'
  on-tertiary-fixed: '#2a1700'
  on-tertiary-fixed-variant: '#653e00'
  background: '#0f1418'
  on-background: '#dee3e8'
  surface-variant: '#303539'
typography:
  display-xl:
    fontFamily: Syne
    fontSize: 84px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Syne
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Syne
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  body-editorial:
    fontFamily: Newsreader
    fontSize: 20px
    fontWeight: '400'
    lineHeight: '1.6'
  label-code:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: 0.05em
  ui-utility:
    fontFamily: DM Sans
    fontSize: 15px
    fontWeight: '500'
    lineHeight: '1'
    letterSpacing: 0.02em
  bg-number:
    fontFamily: Syne
    fontSize: 240px
    fontWeight: '800'
    lineHeight: '1'
spacing:
  unit: 8px
  gutter: 24px
  margin-safe: 5vw
  section-gap: 160px
  container-max: 1280px
---

## Brand & Style

This design system is built for a senior technical professional, balancing the cold precision of high-end engineering with the sophisticated pacing of a luxury editorial magazine. The aesthetic is "Technical Elegance"—it communicates deep expertise and architectural rigor.

The visual style leans into **Minimalism** with a **High-Contrast** edge. It avoids unnecessary soft shadows or rounded corners, opting instead for architectural lines, sharp 90-degree intersections, and subtle "Electric Cyan" glows that suggest live circuitry or high-performance hardware. Large, low-opacity typographic accents provide a rhythmic flow, ensuring the portfolio feels like a curated narrative rather than just a list of projects.

## Colors

The palette is anchored in a deep, near-black navy to create an atmosphere of focus and stability. 

- **Near-black navy (#080C14)**: Used for the main canvas to provide maximum contrast for text and interactive elements.
- **Surface navy (#0E1420)**: Used for cards and structural containers to create subtle tonal separation without breaking the dark immersion.
- **Electric Cyan (#38BDF8)**: Reserved strictly for interactive states, primary actions, and vital technical indicators. Use with a 10-15px outer glow for a "live" hardware effect.
- **Amber (#F59E0B)**: A utilitarian secondary color used for badges, status indicators (e.g., "In Production"), or specific technical tags that need to stand out from the primary cyan.
- **Off-white (#E2E8F4)**: High-legibility text for primary headers and body content.
- **Muted blue-grey (#7A8BAD)**: Low-emphasis text for labels, descriptions, and metadata.

## Typography

The typography system uses a four-way pairing to distinguish between narrative, data, and action.

1.  **Syne**: Used for high-impact headlines and the background "section numbers." It should feel heavy and architectural. 
2.  **Newsreader**: Utilized for long-form case studies and bio sections. The serif quality adds an intellectual, editorial layer to the technical environment.
3.  **JetBrains Mono**: The "Workhorse" for technical data, code blocks, and small category labels. It reinforces the developer's identity.
4.  **DM Sans**: Clean, unassuming, and highly legible. Used for navigation links, buttons, and functional UI elements where speed of recognition is paramount.

## Layout & Spacing

This design system employs a **Fixed Grid** model on desktop (12 columns) that transitions to a fluid single-column layout on mobile.

- **Rhythm**: All spacing is derived from an 8px base unit. 
- **The "Large Number" Motif**: Every major section (Experience, Projects, Lab) is preceded by a large `bg-number` (e.g., 01, 02) positioned absolutely behind the content, aligned to the top-left of the section container.
- **Section Pacing**: Use aggressive vertical margins (`section-gap`) to allow the engineering details room to breathe. Each project should feel like a distinct feature in a high-end magazine.
- **Breakpoints**: 
  - Mobile: < 768px (margins: 20px)
  - Tablet: 768px - 1024px (margins: 40px)
  - Desktop: > 1024px (max-container: 1280px)

## Elevation & Depth

This system rejects traditional ambient shadows in favor of **Tonal Layers** and **Cyan Glows**.

- **Z-axis**: Depth is communicated through color. The base background is the deepest layer. `Surface Navy` represents the next level up (cards, code blocks).
- **Glow Borders**: Instead of shadows, interactive elements (active buttons, focused inputs) utilize a 1px solid `Electric Cyan` border with a `38BDF8` outer glow (blur: 12px, spread: -2px, opacity: 0.4).
- **Glass Accents**: For navigation bars, use a backdrop-blur of 12px with a 70% opacity of the `Near-black navy` to maintain the editorial feel while scrolling.

## Shapes

The shape language is defined by **Sharp Edges (0px)**. This reinforces the "precision engineering" narrative. 

- **Buttons & Cards**: Must be perfectly rectangular. 
- **Separators**: Use thin 1px lines in `muted blue-grey` with 0.2 opacity to define structure without adding visual clutter.
- **Selection States**: Active states should use a sharp, 4px vertical bar of `Electric Cyan` on the left side of the element (e.g., active navigation or list items).

## Components

- **Buttons**: All-caps `DM Sans`, 1px `Electric Cyan` border, no background. On hover, the background fills with a 10% opacity Cyan and the text glows slightly.
- **Cards**: Sharp-edged `Surface Navy` rectangles. No borders. Content inside follows a strict internal padding of 32px.
- **Badges**: Using `JetBrains Mono` at 11px. `Amber` text on a transparent background with an `Amber` 1px border. Used for "Tech Stack" tags.
- **Input Fields**: Bottom-border only (1px `muted blue-grey`). Transitions to a full `Electric Cyan` glow on focus.
- **Code Blocks**: `Surface Navy` background with a subtle "terminal" header bar containing three dots. Line numbers are mandatory, styled in `muted blue-grey`.
- **Navigation**: Desktop nav uses a vertical fixed orientation on the left or a top-fixed bar with zero border-radius.