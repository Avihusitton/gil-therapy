/* schema.js — JSON-LD Structured Data Injection | גיל סיטון
 *
 * Per-page schema selection optimised for Google AI Overviews,
 * Perplexity, and ChatGPT citation pickup. See ai-seo principles:
 * stats + citations + per-page FAQ → highest citation lift.
 */
'use strict';

(function injectSchema() {
  var BASE_URL = 'https://gilsitton.com';
  var GEO = { lat: 30.9700, lon: 35.1700 }; // כפר רתמים (Mishav Rotem, Tamar Regional Council, IL)
  var DATE_MODIFIED = '2026-05-11';

  /* ============================================================
     Person — E-E-A-T anchor (qualifications + experience)
     ============================================================ */
  var person = {
    '@type': 'Person',
    '@id': BASE_URL + '/#person',
    'name': 'גיל סיטון',
    'givenName': 'גיל',
    'familyName': 'סיטון',
    'gender': 'Female',
    'jobTitle': 'עובדת סוציאלית קלינית M.S.W',
    'description': 'עובדת סוציאלית קלינית M.S.W ומטפלת רגשית עם 8 שנות ניסיון. מוסמכת בשיטת APT (Authentic Path Therapy) לטיפול במבוגרים ובשיטת "מדברים ביחד" לטיפול בילדים. התמחות בטראומה מורכבת, פגיעות מיניות ואלימות במשפחה.',
    'url': BASE_URL + '/about.html',
    'image': BASE_URL + '/assets/images/ui/gil-about.jpg',
    'sameAs': [
      'https://www.medabrimyahad.org',
      'https://www.dherech.com',
      'https://gilsitton.com'
    ],
    'worksFor': { '@id': BASE_URL + '/#business' },
    'hasCredential': [
      {
        '@type': 'EducationalOccupationalCredential',
        'name': 'M.S.W — עובדת סוציאלית קלינית',
        'credentialCategory': 'degree',
        'educationalLevel': 'Master',
        'recognizedBy': { '@type': 'Organization', 'name': 'אוניברסיטת בן גוריון בנגב' }
      },
      {
        '@type': 'EducationalOccupationalCredential',
        'name': 'APT — Authentic Path Therapy',
        'credentialCategory': 'certification',
        'recognizedBy': { '@type': 'Organization', 'name': 'בית הספר למטפלים בשיטת דרך' }
      },
      {
        '@type': 'EducationalOccupationalCredential',
        'name': 'מטפלת מוסמכת בשיטת "מדברים ביחד"',
        'credentialCategory': 'certification'
      }
    ],
    'alumniOf': [
      { '@type': 'EducationalOrganization', 'name': 'מכללת ספיר', 'description': 'תואר ראשון בעבודה סוציאלית' },
      { '@type': 'EducationalOrganization', 'name': 'אוניברסיטת בן גוריון בנגב', 'description': 'תואר שני קליני M.S.W' },
      { '@type': 'EducationalOrganization', 'name': 'בית הספר למטפלים בשיטת דרך', 'description': 'הסמכת APT, הכשרה בת שלוש שנים' }
    ],
    'knowsAbout': [
      'טיפול רגשי לילדים',
      'טיפול רגשי למבוגרים',
      'הדרכת הורים',
      'עיבוד טראומה',
      'טראומה מורכבת',
      'פגיעות מיניות',
      'אלימות במשפחה',
      'חרדה ולחץ',
      'אובדן ומשבר',
      'דפוסים רגשיים חוזרים',
      'שיטת מדברים ביחד',
      'Authentic Path Therapy',
      'APT'
    ],
    'knowsLanguage': [
      { '@type': 'Language', 'name': 'Hebrew', 'alternateName': 'he-IL' }
    ],
    'areaServed': [
      { '@type': 'Place', 'name': 'כפר רתמים' },
      { '@type': 'Country', 'name': 'ישראל' }
    ]
  };

  /* ============================================================
     MedicalBusiness — local SEO anchor
     ============================================================ */
  var business = {
    '@type': ['MedicalBusiness', 'LocalBusiness'],
    '@id': BASE_URL + '/#business',
    'name': 'גיל סיטון — עו"ס קלינית ומטפלת רגשית',
    'alternateName': ['גיל סיטון עו"ס קלינית', 'הקליניקה של גיל סיטון'],
    'description': 'קליניקה לטיפול דיאדי בילדים, הדרכת הורים, וטיפול רגשי למבוגרים בשיטות משחק, סיפור ו-APT. בכפר רתמים ובזום לכל הארץ.',
    'url': BASE_URL,
    'image': BASE_URL + '/assets/images/og/home.jpg',
    'logo': BASE_URL + '/assets/images/logo.svg',
    'telephone': '+972-58-7755445',
    'email': 'therapy@gilsitton.com',
    'priceRange': '₪₪',
    'currenciesAccepted': 'ILS',
    'medicalSpecialty': 'PsychiatricMedicine',
    'address': {
      '@type': 'PostalAddress',
      'addressLocality': 'כפר רתמים',
      'addressRegion': 'מחוז הדרום',
      'addressCountry': 'IL'
    },
    'geo': { '@type': 'GeoCoordinates', 'latitude': GEO.lat, 'longitude': GEO.lon },
    'areaServed': [
      { '@type': 'Place', 'name': 'כפר רתמים' },
      { '@type': 'Country', 'name': 'ישראל' }
    ],
    'serviceArea': { '@type': 'GeoShape', '@id': BASE_URL + '/#service-area', 'description': 'כל הארץ (טיפול בזום) + פגישות פיזיות בכפר רתמים ובסביבה' },
    'hoursAvailable': [
      { '@type': 'OpeningHoursSpecification', 'dayOfWeek': ['Sunday','Monday','Tuesday','Wednesday','Thursday'], 'opens': '08:00', 'closes': '20:00' }
    ],
    'availableChannel': [
      { '@type': 'ServiceChannel', 'serviceLocation': { '@type': 'Place', 'name': 'כפר רתמים' } },
      { '@type': 'ServiceChannel', 'serviceLocation': { '@type': 'VirtualLocation', 'name': 'זום' } }
    ],
    'paymentAccepted': ['Cash', 'Credit Card', 'Bit', 'Bank Transfer'],
    'keywords': 'טיפול דיאדי בילדים, טיפול רגשי לילדים, הדרכת הורים, טיפול רגשי למבוגרים, מטפלת רגשית, עו״ס קלינית, מדברים ביחד, APT, כפר רתמים, רתמים, זום',
    'founder': { '@id': BASE_URL + '/#person' },
    'employee': { '@id': BASE_URL + '/#person' },
    'sameAs': ['https://gilsitton.com']
  };

  /* ============================================================
     Services
     ============================================================ */
  var serviceChildren = {
    '@type': 'Service',
    '@id': BASE_URL + '/children-therapy.html#service',
    'name': 'טיפול דיאדי בילדים וטיפול רגשי בשיטת "מדברים ביחד"',
    'description': 'טיפול דיאדי בילדים וטיפול רגשי לילדים מגיל 4 בשיטת "מדברים ביחד" — המשתמשת בשפת המשחק, הסיפור והדמיון. ההורים שותפים מלאים בתהליך הטיפולי, תוך מתן הדרכת הורים צמודה.',
    'serviceType': 'טיפול דיאדי בילדים',
    'category': 'Mental Health',
    'provider': { '@id': BASE_URL + '/#person' },
    'audience': { '@type': 'PeopleAudience', 'audienceType': 'הורים לילדים מגיל 4 ועד גיל ההתבגרות', 'suggestedMinAge': 4 },
    'url': BASE_URL + '/children-therapy.html',
    'image': BASE_URL + '/assets/images/og/children.jpg',
    'areaServed': [{ '@type': 'Place', 'name': 'כפר רתמים' }, { '@type': 'Country', 'name': 'ישראל' }],
    'availableChannel': [
      { '@type': 'ServiceChannel', 'serviceLocation': { '@type': 'Place', 'name': 'כפר רתמים' } },
      { '@type': 'ServiceChannel', 'serviceLocation': { '@type': 'VirtualLocation', 'name': 'זום' } }
    ]
  };

  var serviceAdults = {
    '@type': 'Service',
    '@id': BASE_URL + '/adult-therapy.html#service',
    'name': 'טיפול רגשי למבוגרים בגישת APT',
    'description': 'טיפול רגשי קלאסי למבוגרים בגישת APT (Authentic Path Therapy) — עבודה עמוקה על דפוסים רגשיים, עיבוד טראומה, חרדה ויחסים. תהליך מובנה, בקצב המתאים לכל מטופל.',
    'serviceType': 'טיפול רגשי למבוגרים',
    'category': 'Mental Health',
    'provider': { '@id': BASE_URL + '/#person' },
    'audience': { '@type': 'PeopleAudience', 'audienceType': 'מבוגרים, ובפרט נשים, המחפשים טיפול רגשי' },
    'url': BASE_URL + '/adult-therapy.html',
    'image': BASE_URL + '/assets/images/og/adults.jpg',
    'areaServed': [{ '@type': 'Place', 'name': 'כפר רתמים' }, { '@type': 'Country', 'name': 'ישראל' }],
    'availableChannel': [
      { '@type': 'ServiceChannel', 'serviceLocation': { '@type': 'Place', 'name': 'כפר רתמים' } },
      { '@type': 'ServiceChannel', 'serviceLocation': { '@type': 'VirtualLocation', 'name': 'זום' } }
    ]
  };

  /* ============================================================
     Per-page FAQ schemas (matches HTML FAQ on each page)
     ============================================================ */
  function faq(items) {
    return {
      '@type': 'FAQPage',
      'mainEntity': items.map(function (it) {
        return {
          '@type': 'Question',
          'name': it.q,
          'acceptedAnswer': { '@type': 'Answer', 'text': it.a }
        };
      })
    };
  }

  var faqHome = faq([
    { q: 'מהי שיטת "מדברים ביחד"?', a: 'שיטת "מדברים ביחד" היא גישה טיפולית לילדים המשתמשת בשפת הדמיון, הסיפור והמשחק. הילד מתבטא בדרכו הטבעית, ובכך מגיע לרגשות עמוקים בלי לחץ ובלי עימות ישיר.' },
    { q: 'האם ההורים משתתפים בטיפול?', a: 'כן. ליווי הורים הוא חלק אינטגרלי מהתהליך. לאורך הטיפול מתקיימות שיחות הורים שוטפות כדי לשתף, להדריך, ולחזק את הקשר בין ההורה לילד.' },
    { q: 'האם אפשר לקבל טיפול בזום?', a: 'כן. גיל מעניקה טיפול בזום לכל הארץ, לילדים ולמבוגרים כאחד. הטיפול בזום יעיל ומאפשר גמישות מרבית.' },
    { q: 'איך קובעים פגישה ראשונה?', a: 'שולחים הודעה בוואטסאפ ל-058-7755445, מתקשרים, או ממלאים את הטופס באתר. תשובה תוך יום עסקים אחד. פגישת היכרות ראשונה היא ללא התחייבות.' },
    { q: 'מה ההכשרה של גיל סיטון?', a: 'גיל סיטון היא עובדת סוציאלית קלינית M.S.W מאוניברסיטת בן גוריון בנגב, מוסמכת APT (Authentic Path Therapy) ובוגרת בית הספר למטפלים בשיטת "דרך", ומטפלת מוסמכת בשיטת "מדברים ביחד". 8 שנות ניסיון קליני.' }
  ]);

  var faqChildren = faq([
    { q: 'מה זה שיטת "מדברים ביחד"?', a: 'גישה טיפולית ייחודית לילדים, המשתמשת בשפת הדמיון, המשחק והסיפור. הילד לא נשאל ישירות — הוא מוזמן לבטא את עצמו בדרכו, ובכך לגעת ברגשות עמוקים בצורה בטוחה וטבעית.' },
    { q: 'מאיזה גיל מתאים הטיפול?', a: 'הטיפול מתאים לילדים מגיל 4 ועד גיל ההתבגרות. הגישה מותאמת לשלב ההתפתחותי.' },
    { q: 'האם ההורים מעורבים בתהליך?', a: 'כן. ליווי ההורים הוא חלק אינטגרלי. לאורך הטיפול מתקיימות שיחות הורים כדי לשתף, להדריך ולחזק את הקשר בין ההורה לילד.' },
    { q: 'האם אפשר טיפול בילדים בזום?', a: 'כן. הטיפול בזום עובד מצוין עם ילדים — הם מטופלים בסביבה המוכרת להם, מה שלעתים קרובות מגביר את תחושת הביטחון.' },
    { q: 'כמה זמן נמשך תהליך הטיפול?', a: 'הטיפול מותאם לכל ילד ומשפחה. חלק מהתהליכים נמשכים מספר חודשים, אחרים יותר. הקצב והמטרות נקבעים בשיתוף מלא עם ההורים.' }
  ]);

  var faqAdults = faq([
    { q: 'האם הטיפול מתאים גם אם אני לא עובר משבר?', a: 'בהחלט. רבים מגיעים לטיפול לא בגלל משבר, אלא כי רוצים להכיר את עצמם טוב יותר, לשפר יחסים, או לצמוח.' },
    { q: 'מה ההבדל בין עובדת סוציאלית קלינית לפסיכולוג?', a: 'עובדת סוציאלית קלינית M.S.W מוסמכת לטיפול רגשי עמוק ומקיף. הפוקוס הוא על הקשר הטיפולי, עיבוד רגשי ויצירת שינוי — ללא אבחנות פסיכיאטריות ותרופות.' },
    { q: 'כמה זמן נמשך תהליך הטיפול?', a: 'זה תלוי בכם. יש תהליכים שנמשכים כמה חודשים, ויש שנמשכים יותר. הקצב והמטרות מוגדרים בשיתוף מלא לאורך הדרך.' },
    { q: 'האם הטיפול בזום באמת יעיל?', a: 'כן. טיפול בזום יכול להיות עמוק ומשמעותי בדיוק כמו טיפול פנים אל פנים. הרבה מטופלים מגלים שדווקא הסביבה המוכרת של הבית מאפשרת להם להיפתח יותר בקלות.' },
    { q: 'מה קורה בפגישה הראשונה?', a: 'הפגישה הראשונה היא שיחת היכרות — אני מקשיבה, שואלת כמה שאלות, ומסבירה איך אני עובדת. אתם לא צריכים "להתכונן". ממשיכים רק אם מרגישים שזה נכון.' }
  ]);

  /* ============================================================
     Breadcrumb per page (single implementation; no duplicate inject)
     ============================================================ */
  var pageMap = {
    'about.html':            { name: 'אודות',           url: BASE_URL + '/about.html' },
    'children-therapy.html': { name: 'טיפול בילדים',   url: BASE_URL + '/children-therapy.html' },
    'adult-therapy.html':    { name: 'טיפול במבוגרים', url: BASE_URL + '/adult-therapy.html' },
    'contact.html':          { name: 'יצירת קשר',      url: BASE_URL + '/contact.html' }
  };
  var page = window.location.pathname.split('/').pop() || 'index.html';
  var crumbs = [{ '@type': 'ListItem', 'position': 1, 'name': 'בית', 'item': BASE_URL + '/' }];
  if (pageMap[page]) {
    crumbs.push({ '@type': 'ListItem', 'position': 2, 'name': pageMap[page].name, 'item': pageMap[page].url });
  }
  var breadcrumb = { '@type': 'BreadcrumbList', 'itemListElement': crumbs };

  /* ============================================================
     Per-page schema selection
     ============================================================ */
  var pageSchemas = {
    'index.html':            [serviceChildren, serviceAdults, faqHome],
    '':                      [serviceChildren, serviceAdults, faqHome],
    'about.html':            [],
    'children-therapy.html': [serviceChildren, faqChildren],
    'adult-therapy.html':    [serviceAdults, faqAdults],
    'contact.html':          []
  };

  var bundle = [person, business].concat(pageSchemas[page] || []).concat([breadcrumb]);

  /* ============================================================
     Inject as one @graph (better than scattered scripts)
     ============================================================ */
  var script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': bundle
  });
  document.head.appendChild(script);

  /* expose for debugging in DevTools */
  window.__gilsittonSchema = bundle;
})();
