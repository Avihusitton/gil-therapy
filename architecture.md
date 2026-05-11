# architecture.md — ארכיטקטורת הפרויקט | גיל סיטון — מטפלת רגשית

> קובץ זה הוא מסמך הארכיטקטורה הרשמי של הפרויקט.
> כל סוכן חייב לקרוא אותו לפני תחילת עבודה.
> **אחראי:** architect + lead-project-manager

---

## מטרת האתר

אתר תדמית מקצועי עבור **גיל סיטון** — עובדת סוציאלית קלינית M.S.W ומטפלת רגשית.

מטרות האתר:
1. **בניית אמון** — להציג את גיל כמטפלת מקצועית, חמה ואמינה
2. **יצירת פניות** — להניע הורים ומבוגרים לפנות לטיפול
3. **SEO** — להופיע בחיפושים רלוונטיים בגוגל ובמנועי AI
4. **מיתוג** — ליצור זהות מותגית עקבית, רכה ומכילה

---

## קהל היעד

### ראשי:
- **הורים לילדים** המחפשים טיפול רגשי לילד שלהם (גיל 4–16)
- **מבוגרים** המחפשים טיפול רגשי לעצמם

### משני:
- **אנשים מאזור רתמים** וסביבתה המחפשים מטפל קרוב
- **אנשים המחפשים טיפול בזום** מכל הארץ

### פרסונות:
- אמא לילד עם קשיים רגשיים אחרי אירוע קשה
- הורה שמחפש "טיפול בשיטת מדברים ביחד"
- מבוגר המחפש טיפול רגשי בסביבה שקטה ולא קלינית
- מישהו שגר ביישוב קטן וצריך מטפל נגיש (פנים/זום)

---

## פרטי המטפלת

```
שם: גיל סיטון
תואר: עובדת סוציאלית קלינית M.S.W
התמחויות:
  - טיפול בילדים בשיטת "מדברים ביחד"
  - טיפול רגשי קלאסי במבוגרים
הכשרה: בית הספר למטפלים בשיטת "דרך"
מאפיין אישי: אמא בעצמה
מיקום:
  - טיפול בזום (כל הארץ)
  - טיפול פנים אל פנים ביישוב רתמים
```

---

## היררכיית הדפים

```
index.html          — דף הבית | מי אני, שירותים, CTA
about.html          — אודות | גיל סיטון — הסיפור, הגישה, הערכים
children-therapy.html — טיפול בילדים | שיטת "מדברים ביחד", מה כולל, שאלות
adult-therapy.html  — טיפול במבוגרים | גישה, תהליך, שאלות
contact.html        — יצירת קשר | טופס, טלפון, זום/רתמים
```

---

## מבנה תיקיות

```
/                           שורש הפרויקט
├── agents.config.json      הגדרת סוכנים ומדיניות
├── audit.md                checklist איכות
├── architecture.md         מסמך זה
├── index.html
├── about.html
├── children-therapy.html
├── adult-therapy.html
├── contact.html
├── sitemap.xml
├── robots.txt
└── assets/
    ├── css/
    │   ├── tokens.css      משתני עיצוב גלובליים
    │   ├── base.css        reset + RTL + typography baseline
    │   └── components.css  כל הרכיבים: nav, hero, cards, footer...
    ├── js/
    │   ├── main.js         לוגיקה גלובלית (nav, theme toggle, scroll)
    │   └── contact.js      לוגיקת טופס יצירת קשר
    └── images/
        ├── og/             תמונות Open Graph (1200x630)
        └── ui/             תמונות עיצוביות, דקורטיביות
```

---

## קבצי CSS

### `assets/css/tokens.css`
CSS Custom Properties — משתנים גלובליים:
- `--color-*` — פלטת צבעים מלאה (light + dark)
- `--text-*` — גדלי טקסט ב-clamp()
- `--space-*` — מרווחים
- `--font-display`, `--font-body`
- `--radius-*` — עיגול פינות
- `--shadow-*` — צל
- `--transition-interactive`

### `assets/css/base.css`
- CSS reset מינימלי
- `* { box-sizing: border-box }`
- RTL globals
- Typography baseline (body, headings)
- Focus styles
- Smooth scroll
- Selection colors

### `assets/css/components.css`
- `.btn`, `.btn-primary`, `.btn-ghost`
- `.card`, `.card-soft`
- `.nav`, `.nav-mobile`, `.hamburger`
- `.hero`, `.hero-title`, `.hero-subtitle`
- `.section-header`, `.section-title`
- `.service-grid`, `.service-card`
- `.testimonial`, `.testimonial-card`
- `.faq`, `.faq-item`, `.faq-toggle`
- `.contact-form`, `.form-group`, `.form-input`
- `.footer`, `.footer-links`
- `.theme-toggle`
- `.skip-link` (accessibility)
- `.badge`, `.tag`

---

## קבצי JS

### `assets/js/main.js`
- Navigation mobile toggle
- Smooth scroll to anchor
- Theme toggle (light/dark) עם localStorage
- Intersection Observer לאנימציות כניסה
- Active nav link highlight

### `assets/js/contact.js`
- Form validation בעברית
- Form submit handler
- Success/error states
- WhatsApp link generation (optional)

---

## אסטרטגיית SEO

### מטרת כל דף:

| דף | Keyword ראשי | Keyword משני |
|----|--------------|--------------|
| index.html | מטפלת רגשית | גיל סיטון, עובדת סוציאלית קלינית |
| about.html | עובדת סוציאלית קלינית | גיל סיטון מטפלת רגשית |
| children-therapy.html | טיפול רגשי לילדים | מדברים ביחד, מטפלת לילדים |
| adult-therapy.html | טיפול רגשי למבוגרים | טיפול רגשי בזום |
| contact.html | טיפול רגשי ביישוב רתמים | טיפול בזום, לקביעת פגישה |

### Long-tail keywords לשילוב:
- טיפול לילדים אחרי אירועים קשים
- טיפול רגשי לילדים עם ליווי הורים
- טיפול בשיטת מדברים ביחד
- טיפול רגשי אונליין בזום
- עובדת סוציאלית קלינית רתמים
- מטפלת רגשית לילדים ומבוגרים
- טיפול רגשי קלאסי

### עקרונות:
- H1 אחד לדף — מכיל keyword ראשי
- H2/H3 לפי נושאי משנה טבעיים
- Keyword ב-title, meta description, H1, פסקה ראשונה
- לא keyword stuffing — טבעי ורהוט
- Internal links עם anchor text תיאורי

---

## אסטרטגיית Schema

כל Schema ב-JSON-LD בתוך `<script type="application/ld+json">`:

### `Person` (בכל הדפים):
```json
{
  "@type": "Person",
  "name": "גיל סיטון",
  "jobTitle": "עובדת סוציאלית קלינית M.S.W",
  "url": "https://gilsitton.com"
}
```

### `MedicalBusiness` (index.html, contact.html):
```json
{
  "@type": "MedicalBusiness",
  "name": "גיל סיטון — מטפלת רגשית",
  "address": { "addressLocality": "רתמים", "addressCountry": "IL" },
  "telephone": "...",
  "priceRange": "$$"
}
```

### `Service` (children-therapy.html, adult-therapy.html):
```json
{
  "@type": "Service",
  "name": "טיפול רגשי לילדים בשיטת מדברים ביחד",
  "provider": { "@type": "Person", "name": "גיל סיטון" }
}
```

### `FAQPage` (children-therapy.html, adult-therapy.html):
```json
{
  "@type": "FAQPage",
  "mainEntity": [...]
}
```

---

## עקרונות נגישות

- `lang="he" dir="rtl"` על `<html>`
- Skip to main content link
- Landmark roles: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`
- ARIA labels על אלמנטים ללא טקסט גלוי
- Focus visible על כל אלמנט אינטראקטיבי
- Contrast ≥ 4.5:1 לטקסט רגיל, ≥ 3:1 לכפתורים
- קישורים עם טקסט תיאורי (לא "לחץ כאן")
- Alt text בעברית לכל תמונה
- Labels לכל שדות טופס

---

## עקרונות ביצועים

- Static HTML — אין server-side rendering
- אין JavaScript framework — Vanilla JS בלבד
- `loading="lazy"` על כל תמונה (חוץ מ-hero ראשי)
- `width` + `height` על כל `<img>` למניעת CLS
- `defer` על כל `<script>`
- Google Fonts: `preconnect` + `display=swap`
- CSS inline קריטי לדף ראשוני (optional optimization)
- אין dependencies חיצוניות מיותרות
- כל CSS ו-JS minified לפני פרודקשן (optional)

---

## שיטת עבודה לוקלית בלבד

```
✅ מותר:
  - יצירה, עריכה, מחיקה של קבצים
  - ארגון תיקיות
  - עדכון כל קוד HTML/CSS/JS
  - בדיקה בדפדפן מקומי

❌ אסור:
  - git init / git add / git commit / git push / git pull
  - כל פעולת Git אחרת
  - התקנת dependencies (npm install)
  - שימוש ב-build tools (webpack, vite, npm run build)
  - שימוש ב-framework (React, Vue, Angular)
```

**Git יוגדר בעתיד בלבד ורק בהוראה מפורשת מהמשתמש.**

---

*עדכון אחרון: 2026-05-08*
