# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static Hebrew (RTL) marketing site for Gil Sitton — clinical social worker (M.S.W) and emotional therapist. Vanilla HTML/CSS/JavaScript only. No build tools, no frameworks, no runtime dependencies. Five top-level pages:

```
index.html  about.html  children-therapy.html  adult-therapy.html  contact.html
```

## Local development

There is no build step, no test suite, no linter, no formatter.

```bash
# preview the site
python3 -m http.server 8765      # then open http://localhost:8765

# re-compress JPGs (used after replacing photos in assets/images/{ui,og}/)
python3 _scripts/compress_images.py
```

`compress_images.py` rewrites JPGs in `assets/images/ui/` (max 1600px, q85) and `assets/images/og/` (max 1200px, q82), and emits `.webp` siblings for the `ui/` set.

## CRITICAL — git is locked

`agents.config.json` and `architecture.md` explicitly forbid all git operations: `init`, `add`, `commit`, `push`, `pull`, `branch`, `merge`, `checkout`. **Never run a git command unless the user explicitly asks.** Deployment happens manually outside this repo. `git push origin main` is in `forbidden_commands`. If the user requests git work, default to `stage` branch, never `main`.

## Big-picture architecture

### CSS chain (order is mandatory)
Every page loads the same three stylesheets in this order:

1. `assets/css/tokens.css` — OKLCH palette, fluid type scale, spacing, radii, shadows, light + dark variables.
2. `assets/css/base.css` — reset, RTL globals, typography, `.reveal` fade-in, `prefers-reduced-motion` overrides.
3. `assets/css/components.css` — every visual component used anywhere on the site lives here.

Fonts are loaded via `<link rel="stylesheet">` in `<head>` only. **Do not `@import` fonts inside CSS** — it's render-blocking and serialized after the stylesheet itself.

### JS files
- `assets/js/main.js` — theme toggle (localStorage), hamburger, smooth scroll anchors, FAQ accordion, `.reveal` IntersectionObserver, scroll shadow on nav.
- `assets/js/schema.js` — injects JSON-LD per page (`Person`, `MedicalBusiness`, `Service`, `FAQPage`, `BreadcrumbList`).
- `assets/js/contact.js` — Hebrew form validation + submit (loaded on contact page only).
- `assets/js/google-sheet-webhook.gs` — reference copy of the Apps Script webhook that backs the contact form (deployed outside this repo).

### Dark-mode flash prevention
Every page contains an inline `<script>` in `<head>` that reads `localStorage.theme` and sets `data-theme="dark"` on `<html>` **before** CSS evaluates. This is required to avoid a flash of the light theme for returning dark-mode users — don't remove it.

### Multi-agent file scopes
`agents.config.json` defines six historical agents with strict file scopes that originally built this site under an "Antigravity Vibe Coding" pipeline. When operating as Claude Code, respect these scopes informally — don't silently change copy while doing CSS, or vice versa:

| Agent | Owns |
|---|---|
| `lead-project-manager` | Supreme; launch sign-off. |
| `architect` | `architecture.md`, `*.html` structure, `sitemap.xml`, `robots.txt`. **Cannot** touch CSS. |
| `frontend-developer` | `assets/css/**`, `assets/js/**`. **Cannot** change HTML text. |
| `content-strategist` | Hebrew copy inside `*.html`. **Cannot** change CSS/JS/meta. |
| `seo-ai-specialist` | `<head>` meta + JSON-LD. **Cannot** change body copy. |
| `qa-engineer` | Read-only on everything; owns `audit.md`. |

`skills-lock.json` pins 42 marketing skills from the `coreyhaines31/marketingskills` GitHub repo. Informational only — don't fetch or execute.

## Brand & content constraints

From `product-context.md` and `architecture.md`:

- **Palette is fixed**: Terracotta `#D28769` + Cream `#FAF6F1` + Sage Taupe. No green-as-primary, no hi-tech-blue accents.
- **No emoji** anywhere user-facing. Icons must be inline SVG with `stroke="currentColor"` and color `var(--color-primary)`.
- **Tone**: professional, warm, direct — **not poetic**. The brand specifically avoids the words "מסע" (journey), "מרחב" (space), "הדהד" (resonated).
- **One subtle `.reveal` opacity-fade per section** — no slide-ins, no pulses, no other entrance animations.
- **All copy in Hebrew, RTL**. `<html lang="he" dir="rtl">` on every page.
- **Unified primary CTA copy**: every primary call-to-action reads `לתיאום פגישה ראשונה`.
- **Never mention online-calendar booking** — listed as a critical constraint in `product-context.md`.

## Frozen identifiers — do not modify without an explicit user request

| Item | Value |
|---|---|
| Phone | `058-7755445` (link form: `tel:0587755445`) |
| Email | `therapy@gilsitton.com` |
| WhatsApp | `wa.me/972587755445` (always opens `target="_blank" rel="noopener noreferrer"`) |
| Google Analytics | `G-1X5XN4T4SM` |
| Canonical domain | `https://gilsitton.com/` |

Also frozen: every `<meta>` tag, `og:*`, `twitter:*`, `<link rel="canonical">`, the JSON-LD logic inside `schema.js`, `sitemap.xml`, `robots.txt`. These are SEO/architect territory.

## Status tracking docs

- `architecture.md` — official page hierarchy, CSS responsibilities, schema strategy, SEO strategy, accessibility principles. Update when structure changes.
- `audit.md` — QA checklist with `[x]` items. Update when you ship a verified change so the next session sees what's been confirmed.
- `product-context.md` — brand voice, target personas, CTA constraints (including the calendar-booking ban).
- `README.md` — short Hebrew project overview.
