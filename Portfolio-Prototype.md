# UI/UX Design Specification: Portfolio "About Me" Section
**Designer Persona:** Senior UI/UX Designer (8+ Years Experience)
**Project Type:** Personal Portfolio - Hero / About Section
**Theme:** Dark Mode, Tech-Modern, High-Contrast
**Status:** Prototype Ready for Development

---

## 1. Project Overview
This document outlines the design system, layout, and component details for the "About Me" section of Muhammed Shaheed's graphic design portfolio. The layout utilizes a two-column grid to balance professional information with a strong visual identity, creating a premium, modern aesthetic.

---

## 2. Design System (Global Styles)

### 2.1 Color Palette
The color scheme utilizes a high-contrast dark mode base to make the accent color pop, ensuring visual hierarchy and user focus.

| Token Name | Hex Code | RGB | Usage |
| :--- | :--- | :--- | :--- |
| `bg-primary` | `#0D0D0D` | `13, 13, 13` | Main background color |
| `accent-neon` | `#C6F52B` | `198, 245, 43` | Highlights, Icons, Frame, Name |
| `text-primary` | `#FFFFFF` | `255, 255, 255` | Main headings, "Hello!" |
| `text-secondary`| `#B3B3B3` | `179, 179, 179` | Body copy, descriptions |
| `image-accent` | `#4A3B2A` | `74, 59, 42` | Warm brown (Subject's suit) |

### 2.2 Typography
The design uses a geometric sans-serif for structure and readability, paired with a custom script for a personalized touch.

*   **Primary Font Family:** Poppins / Montserrat / Gilroy (Geometric Sans-Serif)
*   **Secondary Font Family:** Great Vibes / Alex Brush (Script/Calligraphy - used for signature)

| Element | Font Weight | Size (Est.) | Line Height | Letter Spacing | Color |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Hero Title ("Hello!")** | Black / ExtraBold | 72pt - 90pt | 1.1 | -0.02em | `text-primary` |
| **Sub-title (Name)** | Bold | 32pt - 40pt | 1.2 | 0 | `accent-neon` |
| **Role Tag** | Regular | 14pt | 1.5 | 0.15em (Uppercase) | `text-primary` |
| **Body Copy** | Regular | 12pt - 14pt | 1.5 | 0 | `text-secondary` |
| **Value Prop Headings** | Bold | 12pt - 14pt | 1.4 | 0.05em (Uppercase) | `text-primary` |
| **Signature** | Regular | 28pt - 36pt | 1.0 | 0 | `accent-neon` |

---

## 3. Layout & Grid System
*   **Grid Type:** Two-Column Split Layout.
*   **Column Ratio:** ~55% (Left Content) / 45% (Right Image).
*   **Margins & Padding:** 
    *   Outer Container: 5% horizontal padding.
    *   Gutters (Between columns): 40px - 60px.
    *   Negative Space: Generous vertical padding between text blocks (approx. 24px - 32px) to allow the design to breathe.
*   **Alignment:** Left-aligned text for optimal readability. 

---

## 4. Component Breakdown

### 4.1 Left Column (Information Architecture)
*   **Breadcrumb / Tag:** 
    *   Text: "ABOUT ME" (Uppercase, tracked out).
    *   Element: 3 slanted neon green parallelograms placed to the left of the text.
*   **Hero Text Group:**
    *   H1: "Hello!"
    *   H2: "I'm Muhammed Shaheed"
    *   H3: "GRAPHIC DESIGNER" with a small neon green horizontal divider line below it.
*   **Bio Paragraphs:**
    *   Two distinct blocks of text.
    *   Text color: `text-secondary` to establish visual hierarchy and reduce eye strain.
*   **Value Proposition Grid (Bottom Left):**
    *   A 3-column layout (Creative, Focused, Dedicated).
    *   **Icons:** Minimalist line-art (1.5px - 2px stroke), colored `accent-neon`.
    *   **Text:** Centered below icons. Heading (Bold White), Subtext (Grey).

### 4.2 Right Column (Visual Identity)
*   **Portrait Image:**
    *   High-resolution photography.
    *   Subject styling: Brown double-breasted suit, dark sunglasses (complements the dark mode UI).
*   **Geometric Frame:**
    *   Angular, sci-fi/cyberpunk-inspired border framing the image.
    *   Stroke: 2px solid `accent-neon`.
    *   Notches: Slanted cuts on the top-right and bottom-left corners of the frame.
*   **Signature Overlay:**
    *   Position: Bottom-right corner, overlapping the portrait frame slightly.
    *   Style: Script font, `accent-neon`.

### 4.3 Background Elements (Depth & Texture)
*   **Abstract Typography:** Giant, faint letterforms (e.g., "AB") in the far left background. Opacity: ~5-10%.
*   **Geometric Lines:** Faint geometric outlines (similar to the main frame) in the right background. Opacity: ~10%.
*   **Edge Motif:** The slanted 3-line motif is repeated on the far right edge of the canvas.

---

## 5. Interaction & Animation Guidelines (Prototype Notes)
To elevate this from a static graphic to a dynamic web experience, the following micro-interactions are recommended for the development phase:

1.  **Page Load (Entrance Animation):**
    *   Text elements should fade in and slide up sequentially (Staggered delay: 100ms per element).
    *   The neon green frame around the portrait should "draw" itself (SVG stroke-dashoffset animation).
2.  **Hover States:**
    *   *Value Prop Icons:* On hover, icons could scale up by 1.1x and add a subtle drop-shadow glow in `accent-neon`.
    *   *Portrait:* On hover, the image could zoom in slightly (scale 1.05) within the frame.
3.  **Cursor:** Consider a custom cursor that turns into a neon green dot when hovering over interactive elements.

---

## 6. Accessibility (A11y) Checklist
*   [x] **Contrast:** White and Neon Green on Dark Charcoal pass WCAG AA standards for text readability.
*   [x] **Font Size:** Body copy remains at 12pt+ for legibility.
*   [x] **Visual Cues:** Icons are supported by text labels (not relying solely on imagery).
*   [x] **Focus States:** Ensure the signature and any clickable links have distinct focus outlines for keyboard navigation.