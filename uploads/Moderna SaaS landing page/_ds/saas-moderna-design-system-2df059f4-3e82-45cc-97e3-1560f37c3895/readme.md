# SaaS Moderna — Design System

A design system for **SaaS Moderna**, a no-code website builder: a freeform canvas editor, a template marketplace, and a marketing site that sells "design it, publish it, no rebuild."

## Sources

Ten screenshots supplied by the user, stored in `uploads/`:

| File | What it shows |
| --- | --- |
| `image-1786386319699.png` | Marketing home: nav, gradient hero, AI prompt bar, customer strip |
| `image-1786386328237.png` | Canvas editor: toolbar, layer tree, canvas, right inspector |
| `image-1786386330629.png` | Canvas close-up: selection chrome, object name tags, in-canvas components |
| `image-1786386332801.png` | Template gallery behind a full-screen "Publish" moment |
| `image-1786386335098.png` | Audience section with segmented tabs and two breakpoint frames |
| `image-1786386337548.png` | "Powerfully simple." section heading + first bento tile |
| `image-1786386340387.png` | Bento grid: Start with AI, Design & Layout, Figma plugin, Navigation, Effects |
| `image-1786386342353.png` | Bento grid: CMS, SEO, Plugins, Site management |
| `image-1786386344293.png` | Social-proof wall of testimonials |
| `image-1786386346445.png` | Gradient CTA + black footer with five link columns |

**No codebase, Figma file, font binary, logo file, or image asset was supplied** — screenshots only. Everything below is read off those screenshots and re-authored; nothing is copied from the source product's code or brand.

### Substitutions to confirm

1. **Typeface.** No font files were given. The reference sets a neutral Swiss grotesque with a tall x-height and flat terminals. This system loads **Geist / Geist Mono** from Google Fonts as the closest freely-licensed match. Send real binaries and `tokens/fonts.css` is a one-file swap.
2. **Icons.** No icon font, sprite, or SVGs were given. This system uses **Lucide** (2px stroke, rounded caps) from the `lucide-static` CDN, rendered as CSS masks by the `Icon` component so glyphs inherit `currentColor`.
3. **Logo.** No mark was supplied, and none was invented. The brand is set in type by the `Wordmark` component — `SaaS` in weight 900, `Moderna` in weight 400.
4. **Imagery.** No photography or illustration was supplied. Every place the source shows artwork, this system uses either a component-composed UI mock (bento tiles) or a flat gradient block (template thumbnails, canvas hero art).

## Products covered

| Surface | Kit |
| --- | --- |
| Marketing site | `ui_kits/marketing_site/` |
| Canvas editor (the product) | `ui_kits/editor/` |
| Template gallery | `ui_kits/templates/` |

---

## Content fundamentals

**Voice.** Confident, plain, a little swaggering. Claims are short and absolute; the sentence after them does the explaining. Never hedges ("might", "helps you to"), never over-explains.

**Casing.** Sentence case everywhere — headlines, buttons, nav, panel labels. The only uppercase is the 11px eyebrow above a section ("FROM DESIGN TO REAL SITE") and canvas object tags. Title Case appears nowhere.

**Person.** Second person for the reader ("Build sites of any size, solo or with your team"), first person plural almost never. The product is named, not personified: "SaaS Moderna makes building professional sites easy" — not "we make".

**Headlines.** One idea, ending in a full stop even when short. Frequently two clauses split by an em dash or a comma where the second clause is the payoff:
- "Start your dream site with AI. Zero code, maximum speed."
- "Ready to go live? Just hit publish — no rebuilding, no code."
- "Powerfully simple."
- "Build sites of any size, solo or with your team."
- "Design sites on a freeform canvas. Add animations, interactions and a CMS."

**Body copy.** 1–3 sentences, imperative or descriptive, concrete verbs: *iterate, publish, connect, run, manage, track*. Feature-tile bodies are one line, ~12 words: "Generate a beautiful first version of your site, then go in and customize."

**Feature titles.** One or two words, nouns: CMS, SEO, Plugins, Effects, Navigation, Site Management, Design & Layout, Figma Plugin, Start with AI.

**Buttons.** One or two words, verb-first: Publish, Update, Invite, Sign up, Log in, Insert, Learn more, Start with AI, Start Today. No "Get Started Today!" energy, no exclamation marks.

**Reassurance.** Under the final CTA, 4–5 checked fragments with no verbs: "100 free CMS items", "Publish for free", "Unlimited projects", "Mac & Windows".

**Testimonials are verbatim.** Lowercase, typos, "tbh", "sick AF", and 🤯 all stay exactly as written — the brand's own copy carries no emoji, but quoted users keep theirs. Handles are shown with the @.

**Numbers.** Used only where they are real and checkable: "100" Lighthouse score, "5 seconds", "1200+" breakpoint, "$39". Never invented stats.

**What the brand never does:** emoji in its own voice, exclamation marks, "revolutionary/seamless/unlock/empower", ALL-CAPS shouting outside eyebrows, rhetorical questions other than the one setup ("Ready to go live?"), or address-the-reader-as-friend chattiness.

---

## Visual foundations

**The core motif** is a blue → violet → magenta arc. It appears three ways and only three ways: as a full-bleed hero wash that fades to white behind the headline (`--gradient-hero`), as a 135° two-stop fill inside a bento tile (`--gradient-tile-*`), and as a footer wash that resolves into pure black. It is never used on body text, never on small UI, and never as a border.

**Color.** One saturated interactive color: `--accent` blue `#0099FF`. Everything else is a grey from a single ink ramp (`#000` → `#FFF`, ten steps). Orange `#FF4E17` marks canvas objects and demo components; green `#00E07A`/teal is reserved for success and performance; yellow is a pill inside artwork. Backgrounds are white or `#FAFAFA`; the footer and dark tiles are true black, not navy.

**Type.** One family, Geist, across marketing and app. Display sizes are bold (700) with heavy negative tracking (−0.035em) — dense, wide, almost touching. Body copy is grey (`--ink-500`/`--ink-700`), never pure black; only headings are `--ink-900`. Marketing type ranges 88 → 16px; in-app type ranges 14 → 11px with nothing between.

**Spacing.** 4px grid above 8px. Sections breathe at 120px vertical; content sits in a 1200px container with a 24px gutter. App panels are tight: 6–12px padding, 24–28px row heights.

**Corner radii.** Controls 8px, cards 12px, bento tiles 18px, hero prompt capsule 24/18px nested, pills 999px. In-app chips and inspector fields drop to 6px. Nothing is sharp-cornered except canvas frames and selection outlines.

**Cards.** White fill, 12px radius, and *either* a 1px hairline (`--line-subtle`) *or* a soft two-layer shadow — never both, never a colored left border. Testimonial cards use the shadow; panel groups use hairlines only.

**Shadows.** Neutral black at very low opacity, always two layers (a 1–3px contact shadow plus a 24–72px ambient one). The only colored shadow in the system is under a blue primary button (`--shadow-accent`). Insets are used as hairlines (`inset 0 -1px 0`) rather than CSS borders, so panel edges never round.

**Borders vs. shadows.** Structural separation (toolbar bottom, panel sides, table rows) is an inset hairline. Containment (cards, popovers) is a shadow. Emphasis (selection, focus) is a 1px blue outline or a 3px 30%-opacity blue ring.

**Transparency and blur.** Two places only: the sticky nav (`rgba(255,255,255,.82)` + 20px backdrop blur) and the halo around the hero prompt capsule (`rgba(255,255,255,.45)` + blur). No frosted panels inside the app.

**Protection.** Text over gradient is protected by fading the gradient itself, not by adding a scrim capsule — the hero radial washes to white behind the headline, and the footer gradient fades to black under the link columns. The testimonial wall fades to white on all four edges rather than being cropped.

**Animation.** Fast and unshowy: 140ms for hover/press/focus, 220ms for cards and panels, 420ms for scroll reveals. Easing is `cubic-bezier(.16,1,.3,1)` on anything entering, a symmetric ease for state changes. No bounce, no spring, no parallax on the marketing page itself (the product does parallax; the site doesn't brag with it).

**Hover states.** Solid buttons darken by one step (never fade opacity). Ghost/panel controls fill with `--surface-hover`. Cards and tiles lift 2–3px with a deeper shadow. Arrow links slide their arrow 3px right; bento tile arrows move up-and-right 2px.

**Press states.** Uniform `scale(0.97)` at 140ms, no color change beyond the hover step.

**Layout rules.** The marketing nav is sticky and translucent; nothing else is fixed. The editor shell is fixed at three columns (216 / fluid / 246) with an absolutely-positioned floating tool capsule bottom-center and popovers anchored under the toolbar. Bento grids are 6-column with tiles spanning 2/3/4/6.

**Artwork behaviour.** Every bento tile's artwork is cropped by the tile's bottom or right edge — never centred with even padding. Screens-inside-screens keep their own browser chrome (a 22px grey bar with three dots).

**Imagery vibe.** Cool and synthetic: blue/violet gradients, high-key whites, saturated flat illustration inside device mocks. No photography of people in the product marketing except tiny circular avatars in testimonials. No grain, no duotone, no black-and-white treatment.

---

## Iconography

- **Set:** Lucide, 2px stroke, rounded caps and joins, 24px grid. Substituted for the source's own icon set, which was not supplied — flag for review.
- **Delivery:** the `Icon` component masks the SVG from `https://cdn.jsdelivr.net/npm/lucide-static@0.428.0/icons/<name>.svg` with `background: currentColor`, so a glyph can be grey in a panel and white on a gradient tile without a second file. Never inline hand-written SVG paths.
- **Sizes:** 11–13px inside inspector rows and badges, 14–16px in buttons and nav, 18–20px in large buttons and plugin grids, 24px+ only inside artwork.
- **Color:** icons are `--text-subtle`/`--text-muted` by default, `--text-strong` when a row is active, white on gradient or selected fills. Icons are never the accent blue on their own except as an affordance glyph (the `+` next to Breakpoint).
- **Common glyphs:** `arrow-right` (every link and tile), `chevron-down` (dropdowns), `plus`, `check`, `x`, `play`, `sparkles` (AI), `layers`, `type`, `image`, `database`, `settings`, `globe`, `search`, `monitor`.
- **Emoji:** never in brand copy or UI. They survive only inside verbatim user quotes.
- **Unicode as icons:** only the arrow characters ↔ / ↕ inside the layout direction toggle, matching the source.
- **Avatars:** circular, 16–30px, overlapping by −5px with a 1.5–2px white ring when stacked.

---

## Index

Root
- `styles.css` — the single entry point consumers link. Imports only.
- `thumbnail.html` — homepage tile.
- `SKILL.md` — Agent Skills wrapper.
- `readme.md` — this file.

`tokens/`
- `fonts.css` · `colors.css` · `typography.css` · `spacing.css` · `radius.css` · `elevation.css` · `motion.css` · `base.css`

`guidelines/` — 21 specimen cards feeding the Design System tab: brand spectrum, accent blue, ink ramp, accents, surfaces, tile gradients, hero gradient, display/heading/body/UI/mono type, weights, space scale, control heights, layout grid, radius, elevation, motion, wordmark, voice.

`components/`
- **core/** — `Button`, `IconButton`, `Badge`, `Card`, `Icon`, `Wordmark`
- **forms/** — `Input`, `PromptBar`, `Select`, `Switch`, `Checkbox`, `SegmentedControl`
- **marketing/** — `FeatureTile`, `SectionHeading`, `ArrowLink`, `TestimonialCard`, `CheckList`, `LogoRow`
- **app/** — `Toolbar` (+`ToolbarItem`), `PanelSection`, `InspectorRow` (+`NumberField`), `LayerRow`, `CanvasLabel`

Each directory has a `.card.html` thumbnail; each component has a `.d.ts` props contract and a `.prompt.md` usage note.

`ui_kits/`
- `marketing_site/` — home page: `SiteNav`, `Hero`, `BentoSection`, `AudienceSection`, `TestimonialWall`, `CtaFooter`
- `editor/` — canvas editor: `LayersPanel`, `Canvas`, `Inspector`
- `templates/` — gallery: `TemplateCard`

### Intentional additions

No source defined a component inventory (screenshots only), so the set above was authored from what the screenshots actually contain. Two entries go beyond a generic primitive set and are deliberate:
- **`Icon`** — a wrapper so every glyph comes from one set and inherits color.
- **`PromptBar`** — the hero AI capsule is a distinct, repeated composition (hero and footer), not a plain input.

No Toast, Tooltip, Avatar, Dialog, Table, or Pagination component was authored: none appears in the supplied material.
