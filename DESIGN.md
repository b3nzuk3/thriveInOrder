---
name: "Thrive in Order"
description: "Organized Spaces, Brighter Days."
colors:
  forest: "#173B2B"
  gold: "#C58B17"
  olive: "#DDE4B8"
  air: "#FAFFFF"
  ink: "#252A25"
  muted: "#F0F3E6"
  muted-ink: "#4B5D4D"
  border: "#D3DDBB"
  input-border: "#BDC9A7"
  focus-gold: "#8A6317"
  forest-hover: "#28553E"
  olive-hover: "#CCD79A"
  accordion-hover: "#477153"
  arrow-gold: "#A67211"
  field-hover: "#7C906A"
  placeholder: "#60705D"
  error: "#8C3C28"
typography:
  display:
    fontFamily: "DM Serif Display, serif"
    fontSize: "clamp(58px, 5.34vw, 82px)"
    fontWeight: 400
    lineHeight: 1.145
    letterSpacing: "-.02em"
  headline:
    fontFamily: "Cantata One, serif"
    fontSize: "clamp(32px, 3.1vw, 48px)"
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: "-.035em"
  page-title:
    fontFamily: "Cantata One, serif"
    fontSize: "clamp(42px, 4.5vw, 68px)"
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: "-.04em"
  title:
    fontFamily: "Cantata One, serif"
    fontSize: "27px"
    fontWeight: 400
    lineHeight: 1.3
    letterSpacing: "-.025em"
  body:
    fontFamily: "Manrope, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.5
  body-copy:
    fontFamily: "Manrope, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.85
  label:
    fontFamily: "Manrope, sans-serif"
    fontSize: "13px"
    fontWeight: 600
    lineHeight: 1.5
  wordmark:
    fontFamily: "Cantata One, serif"
    fontSize: "clamp(30px, 3.2vw, 49px)"
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: "-.04em"
rounded:
  field: "8px"
  image: "16px"
  panel: "24px"
  feature: "32px"
  pill: "9999px"
  circle: "50%"
spacing:
  gap-sm: "12px"
  md: "16px"
  field-gap: "22px"
  lg: "24px"
  practical-inset: "26px"
  gap-xl: "40px"
  section-mobile: "64px"
  section: "90px"
components:
  button-primary:
    backgroundColor: "{colors.forest}"
    textColor: "{colors.air}"
    rounded: "{rounded.pill}"
    padding: "0 28px"
    height: "52px"
  button-primary-hover:
    backgroundColor: "{colors.forest-hover}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.forest}"
    rounded: "{rounded.pill}"
    padding: "0 28px"
    height: "52px"
  button-outline-hover:
    backgroundColor: "{colors.olive}"
  button-secondary:
    backgroundColor: "{colors.olive}"
    textColor: "{colors.forest}"
    rounded: "{rounded.pill}"
    padding: "0 28px"
    height: "52px"
  button-secondary-hover:
    backgroundColor: "{colors.olive-hover}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.forest}"
    rounded: "{rounded.pill}"
    padding: "0 28px"
    height: "52px"
  button-ghost-hover:
    backgroundColor: "{colors.muted}"
  form-field:
    backgroundColor: "{colors.air}"
    textColor: "{colors.ink}"
    rounded: "{rounded.field}"
    padding: "14px 15px"
    width: "100%"
  service-filter:
    backgroundColor: "transparent"
    textColor: "{colors.forest}"
    rounded: "50px"
    padding: "11px 21px"
  service-filter-selected:
    backgroundColor: "{colors.forest}"
    textColor: "{colors.air}"
  practical-panel:
    backgroundColor: "{colors.muted}"
    textColor: "{colors.muted-ink}"
    rounded: "{rounded.image}"
    padding: "{spacing.practical-inset}"
  accordion-row:
    textColor: "{colors.forest}"
    padding: "22px 0"
---

# Design System: Thrive in Order

## Overview

**Creative North Star: "The Home Care Folio"**

The Home Care Folio makes practical home support feel soft, personal, and approachable. Forest ink, gentle olive fields, rounded photographs, and friendly everyday language give the interface the ease of a thoughtfully arranged home. The durable brand commitment is “Organized Spaces, Brighter Days.”

The system is spacious and mostly flat. Editorial serif headings establish warmth, Manrope keeps service choices and forms direct, and natural household imagery provides material richness. Open sections carry the story; softly filled cards group practical information. Motion reveals content or explains a change, with a quiet static alternative for reduced motion.

**Key Characteristics:**

- Soft, personal color and rounded details.
- Warm household photography paired with clear, open service choices.
- Editorial serif hierarchy with readable sans-serif copy and controls.
- Flat tonal surfaces, restrained gold cues, and purposeful motion.

## Colors

A dark forest anchor, sunlight gold, and pale olive sit on an airy near-white ground. The frontmatter owns the exact values; the names below describe their use.

### Primary

- **Forest** (`forest`): wordmark, headings, primary buttons, selected service filters, and the consultation closing field.

### Secondary

- **Sunlight Gold** (`gold`): restrained navigation underlines and small accents. Darker **Arrow Gold** and **Focus Gold** carry interactive cues with more contrast.
- **Gentle Olive** (`olive`): large supportive fields and secondary buttons, particularly against forest.

### Neutral

- **Air** (`air`): page ground, form fields, and text on dark actions.
- **Everyday Ink** (`ink`): stronger reading copy and field values.
- **Pale Linen** (`muted`): process cards, practical panels, enquiry containers, and soft hover fills.
- **Muted Leaf Ink** (`muted-ink`): secondary descriptions, help text, and supporting copy.
- **Soft Divider** (`border`) and **Field Edge** (`input-border`): quiet structural separation and form outlines.

The remaining extracted colors describe implemented states: forest and olive button hover fills, accordion text hover, field-edge hover, placeholders, and the warm rust error state. They are functional extensions of the palette. Tonal ramps in the sidecar are synthesized preview metadata, not additional production colors.

**The Five-Color Anchor Rule.** Keep the five confirmed brand colors as the visual anchor. Derived greens, golds, and the error color serve text, borders, focus, or interaction states rather than forming a competing palette.

## Typography

**Hero Display Font:** DM Serif Display (serif fallback). **Supporting Display Font:** Cantata One (serif fallback). **Body and Control Font:** Manrope (sans-serif fallback).

All three are loaded locally with `next/font/local`, CSS variables, and font-display swap. Font licenses sit beside the local TTF files in `public/fonts/`. The hero uses DM Serif Display’s native regular weight with font synthesis disabled. Its letterforms retain their natural proportions.

### Hierarchy

- **Display** (`display`): two-line home hero only. Below the main navigation breakpoint it uses a smaller fluid ramp, and the narrowest layout gives it more line-height.
- **Headline** (`headline`): primary section headings. Service-index, approach, and closing headings have local fluid sizes for their available measure.
- **Page title** (`page-title`): supporting page introductions. The contact title has its own more compact clamp; this is a page-specific variant rather than a new font role.
- **Title** (`title`): serif card headings. Service rows, practical subheadings, and FAQ triggers intentionally use Manrope instead.
- **Body** (`body`): the base reading role. Longer section copy uses `body-copy` and usually stays within a measure of 65ch; individual descriptions range from 38ch to 70ch.
- **Label** (`label`): form labels, with small supporting and error text below fields. Buttons use Manrope (14px, weight 600) by default, with contextual size and weight overrides.
- **Wordmark** (`wordmark`): lowercase identity treatment, kept on one line. Footer sizing is slightly smaller at wide widths.

The implementation uses an intentionally fluid, role-specific hierarchy rather than a fixed modular ratio. Home hero type is clamped to 48–70px at widths through 900px, then 34–51px (`clamp(34px, 10.8vw, 51px)`) with line-height 1.18 through 480px. Descriptive paragraphs generally use line-heights from 1.6 to 1.85; prepared email text uses 1.9.

**The Three-Role Type Rule.** Use DM Serif Display for the home hero, Cantata One for the wordmark and supporting display headings, and Manrope for reading and interaction. Preserve the hero’s native weight and natural proportions.

## Layout

The general section container has a maximum width of 1536px, automatic inline margins, and percentage side gutters (4.45% on larger screens, 5% through 900px). Its standard section rhythm is captured in `spacing.section` and `spacing.section-mobile`. Section-specific top and bottom padding responds to the content rather than forcing every section to identical height.

Desktop layouts use unequal two-column grids for image-and-copy pairings, service descriptions, FAQs, and the contact flow. Three-step process information uses three equal columns. Broad olive and forest fields sit slightly inset from the viewport (1.5% margins), with generous inner padding; the inset becomes 2.5% on smaller layouts. The home hero uses a wider image column and is bounded to 1680px from 1600px upward.

Responsive behavior follows the actual stylesheet:

- **Through 1200px:** compact navigation and hero action sizes; hide the optional wide-only copy break.
- **Through 1000px:** reduce contact-panel padding and temporarily stack the name/email pair while the main contact layout remains two columns.
- **Through 900px:** show the menu button, stack the hero and service overview, simplify general grids, and make service detail sections single-column. Contact content becomes single-column overall while intro details and name/email fields can pair within it.
- **Through 600px:** stack the process cards, approach values, closing section, and form fields; simplify footer navigation; widen primary form actions.
- **Through 480px:** tighten the header and typography, stack hero actions, and use a taller photograph crop.
- **From 1600px:** cap the hero width and round its full image boundary.

The hero photograph changes from an absolutely positioned desktop region to normal document flow through 900px. Image aspect ratios change deliberately for smaller screens; object-fit cover preserves the crop rather than distorting the image. The services page keeps content open and uses chips to filter the visible sections. The homepage service and FAQ lists disclose one answer at a time.

## Elevation & Depth

Cards and fields are flat. Large tonal fields, photographic texture, thin borders, and generous breathing room supply depth. Inputs explicitly remove box shadows, and hover states change color rather than lifting cards.

### Shadow Vocabulary

- **Mobile menu separation** (`0 16px 24px rgb(23 59 43 / .08)`): a soft temporary boundary beneath the expanded mobile navigation.

**The Flat Surface Rule.** Use color, spacing, and fine dividers to separate content. Cards and fields carry no shadow; the open mobile menu alone has a diffuse separating shadow.

## Shapes

The form language is gently rounded. Fields use the small radius, photographs and practical cards use the image radius, supporting page introductions use the panel radius, and broad feature fields use the feature radius. Through 900px the broad fields reduce to the panel radius. Buttons are fully pill-shaped; filter buttons use a 50px radius. Step numbers, the draft confirmation mark, and the mobile menu hit area are circular.

Photographs clip cleanly inside their rounded boundaries. The desktop home image rounds its left edge while meeting the right viewport edge; its full corners return when the hero is capped at large widths. Thin quiet borders divide accordion rows and service sections. Image content retains natural scale and texture.

## Components

### Buttons

Friendly pill controls with clear labels and restrained color changes. The canonical default, outline, secondary, and ghost variants are recorded in frontmatter. Default controls are 52px tall with 28px horizontal padding; the large size is 60px tall with 36px horizontal padding, the small size is 40px tall with 20px horizontal padding, and the icon size is 44px square. Contextual hero and header rules deliberately adjust these measurements.

Primary hover uses forest-hover. Outline hover fills with olive. Secondary hover uses olive-hover. Ghost hover fills with pale linen. All retain keyboard focus (2px ring, 4px offset on the button primitive) and disabled controls reduce opacity to 50% and stop pointer interaction. The live pages use primary, secondary, and outline; ghost remains an available library variant.

### Text Links and Navigation

Text links pair friendly copy with a Lucide arrow. On hover the arrow moves 4px over 250ms and the label receives a gold underline. The desktop navigation uses open spacing, Manrope text, and a fine gold underline revealed on hover or the current Services page. Header consultation actions remain pill buttons.

Through 900px a labeled menu button exposes a vertical navigation region below the header. Escape, a route change, or choosing a link closes it. The menu alone uses the soft shadow listed above. Footer navigation uses quieter type and simple hover underlines. A keyboard-visible skip link precedes the header.

### Service Filters

Rounded outlined chips in a wrapping inline group. Unselected chips are transparent with a muted green edge; hover uses pale linen. The selected chip is forest with air text. Its pressed state is exposed with aria-pressed, and a polite count announces the resulting service set. The layout/filter change uses Motion (250ms), disabled for reduced motion.

### Cards / Containers

Practical cards have pale linen fill, the image radius, and no shadow. Practical service panels use the recorded inset; process cards use 30px desktop padding and responsive adjustments. The enquiry container uses the same fill and radius with a larger desktop inset (37px), reducing to 25px vertical and 20px horizontal on narrow phones. Cards group information; open page sections remain the dominant structure.

### Inputs / Fields

Air-filled fields have a quiet one-pixel edge, the field radius, and comfortable internal padding. Field values use everyday ink, with muted placeholders. Hover darkens the border. Focus changes to a 2px forest outline with 2px offset; invalid fields get a warm rust edge and associated error text. The error is communicated in words as well as color.

The same visual field supports input, native select, and a vertically resizable textarea (minimum height 144px). Mobile fields increase to 16px type through 600px. Required labels, linked help/error text, and focus transfer to the first invalid field keep the enquiry flow understandable. Preparing an enquiry reveals a readable email draft, then provides email, copy, and edit controls; it is not a server submission.

### Expandable Lists

Service summaries and FAQs use the shared Radix accordion with a fine bottom divider. The whole trigger row is clickable, the text shifts to a lighter forest on hover, and a small dark-gold arrow rotates 90 degrees when open. Service rows use fluid 17–22px Manrope text at desktop; their phone size is 16px. FAQ rows use 17px, reducing to 16px through 600px. Both use generous vertical padding.

The answer opens over 300ms with cubic-bezier(.16,1,.3,1) and closes over 200ms with ease, using Radix’s measured content height. Each list is single-open and collapsible. The sidecar includes a native details/summary preview of the same visual behavior so it works without React in a shadow DOM.

### Imagery and Motion

The two shipped generated household photographs are illustrative: a sunlit oak entryway and a practical linen cupboard. The entryway also appears on Contact. Reuse the local WebP assets with descriptive alternative text, preserve their provenance JSON/embedded metadata, and keep their warm natural materials consistent.

The home photograph has a one-time, 1.1-second clip reveal with cubic-bezier(.16,1,.3,1). The small olive sun in the consultation close is a locally authored Lottie, played once as it approaches the viewport (100px margin), using local WASM. It is decorative and hidden from assistive technology. Reduced motion uses the static Lucide sun, disables Motion layout/reveal movement, stops smooth scrolling, and reduces CSS transition/animation duration to .01ms. Enquiry form exit fades over 150ms; keep motion tied to a reveal or change of state.

## Do's and Don'ts

### Do:

- Do use the confirmed palette and assign forest to primary actions, olive to gentle emphasis, and air to the main ground.
- Do keep service text and forms in Manrope and use the three established serif roles deliberately.
- Do use rounded photographs and local imagery that feels warm, practical, and lived in.
- Do keep service summaries expandable, service detail sections open, and practical information grouped in flat filled panels.
- Do preserve visible keyboard focus, associated field errors, comfortable mobile controls, and reduced-motion alternatives.
- Do keep the existing generated-image provenance and self-hosted font license files with their assets.

### Don't:

- Don’t introduce ornamental UI clutter or hard card shadows into this soft, personal system.
- Don’t stretch or compress the hero letterforms to fit a reference.
- Don’t use the bright gold brand accent as small body text; the implementation uses darker gold for arrows and focus.
- Don’t present the generated household images as completed client work.
- Don’t turn the homepage composition into a required layout for every page.
