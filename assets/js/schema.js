/* schema.js — JSON-LD Structured Data Injection | גיל סיטון */
'use strict';

(function injectSchema() {

  /* ========================
     Base entities
     ======================== */
  var BASE_URL = 'https://gilsitton.com';

  var person = {
    '@type': 'Person',
    '@id': BASE_URL + '/#person',
    'name': 'גיל סיטון',
    "sameAs": [
      "https://www.medabrimyahad.org",
      "https://www.dherech.com",
      "https://gilsitton.com"
    ],
    'jobTitle': 'עובדת סוציאלית קלינית',
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "name": "M.S.W — עובדת סוציאלית קלינית",
        "credentialCategory": "degree",
        "recognizedBy": {
          "@type": "Organization",
          "name": "אוניברסיטת בן גוריון בנגב"
        }
      },
      {
        "@type": "EducationalOccupationalCredential",
        "name": "APT — Authentic Path Therapy",
        "credentialCategory": "certification",
        "recognizedBy": {
          "@type": "Organization",
          "name": "בית הספר למטפלים בשיטת דרך"
        }
      }
    ],
    'description': 'מטפלת רגשית לילדים בשיטת מדברים ביחד ומטפלת רגשית קלאסית למבוגרים. בוגרת בית הספר למטפלים בשיטת דרך.',
    "knowsAbout": [
      "טיפול רגשי לילדים",
      "טיפול רגשי למבוגרים",
      "פגיעות מיניות",
      "אלימות במשפחה",
      "שיטת מדברים ביחד",
      "Authentic Path Therapy"
    ],
    "alumniOf": [
      {
        "@type": "EducationalOrganization",
        "name": "מכללת ספיר",
        "description": "תואר ראשון בעבודה סוציאלית"
      },
      {
        "@type": "EducationalOrganization", 
        "name": "אוניברסיטת בן גוריון בנגב",
        "description": "תואר שני קליני M.S.W"
      },
      {
        "@type": "EducationalOrganization",
        "name": "בית הספר למטפלים בשיטת דרך",
        "description": "הסמכת APT — Authentic Path Therapy, 3 שנים"
      }
    ],
    "yearsOfExperience": "8",
    'availableLanguage': { '@type': 'Language', 'name': 'Hebrew' },
    'areaServed': [
      { '@type': 'Place', 'name': 'רתמים' },
      { '@type': 'Place', 'name': 'ישראל' },
      { '@type': 'Place', 'name': 'זום — אונליין לכל הארץ' }
    ],
    'url': BASE_URL
  };

  var business = {
    '@type': 'MedicalBusiness',
    '@id': BASE_URL + '/#business',
    'name': 'גיל סיטון — מטפלת רגשית',
    'url': BASE_URL,
    'telephone': '+972587755445',
    'email': 'therapy@gilsitton.com',
    'address': {
      '@type': 'PostalAddress',
      'addressLocality': 'רתמים',
      'addressCountry': 'IL'
    },
    'areaServed': ['רתמים', 'ישראל'],
    'availableChannel': [
      { '@type': 'ServiceChannel', 'name': 'זום — אונליין' },
      { '@type': 'ServiceChannel', 'name': 'פנים אל פנים — רתמים' }
    ],
    'employee': { '@id': BASE_URL + '/#person' }
  };

  var serviceChildren = {
    '@type': 'Service',
    '@id': BASE_URL + '/children-therapy.html#service',
    'name': 'טיפול רגשי לילדים בשיטת מדברים ביחד',
    'description': 'טיפול רגשי לילדים מגיל 4 בשיטת מדברים ביחד — גישה ייחודית המשתמשת בשפת הדמיון, הסיפור והמשחק לעיבוד רגשי, עם ליווי הורים מלא לאורך התהליך.',
    'provider': { '@id': BASE_URL + '/#person' },
    'serviceType': 'טיפול רגשי לילדים',
    'url': BASE_URL + '/children-therapy.html',
    'areaServed': ['רתמים', 'ישראל'],
    'availableChannel': [
      { '@type': 'ServiceChannel', 'name': 'זום' },
      { '@type': 'ServiceChannel', 'name': 'רתמים' }
    ]
  };

  var serviceAdults = {
    '@type': 'Service',
    '@id': BASE_URL + '/adult-therapy.html#service',
    'name': 'טיפול רגשי למבוגרים',
    'description': 'טיפול רגשי קלאסי, עמוק ואישי למבוגרים — מרחב בטוח לעיבוד רגשות, הבנת דפוסים ויצירת שינוי אמיתי.',
    'provider': { '@id': BASE_URL + '/#person' },
    'serviceType': 'טיפול רגשי למבוגרים',
    'url': BASE_URL + '/adult-therapy.html',
    'areaServed': ['רתמים', 'ישראל'],
    'availableChannel': [
      { '@type': 'ServiceChannel', 'name': 'זום' },
      { '@type': 'ServiceChannel', 'name': 'רתמים' }
    ]
  };

  var faqItems = [
    {
      q: 'מהי שיטת מדברים ביחד?',
      a: 'שיטת "מדברים ביחד" היא גישה טיפולית ייחודית לילדים, המשתמשת בשפת הדמיון, הסיפור והמשחק לעיבוד רגשי. במקום לשאול ישירות "מה אתה מרגיש?", הגישה מאפשרת לילד לבטא את עצמו דרך עולמות מוכרים ובטוחים, ובכך לגעת ברגשות עמוקים בצורה טבעית.'
    },
    {
      q: 'למי מתאים טיפול רגשי לילדים?',
      a: 'הטיפול מתאים לילדים מגיל 4 המתמודדים עם קשיים רגשיים, שינויים משפחתיים, אירועים מעיקים, חרדות, קשיי שינה, קשיים חברתיים, או כל מצב שבו ההורה מרגיש שמשהו אינו כשורה — גם אם קשה לו להגדיר במדויק מה.'
    },
    {
      q: 'האם ההורים משתתפים בתהליך הטיפול?',
      a: 'כן — ליווי ההורים הוא חלק בלתי נפרד מהתהליך. לאורך הטיפול נקיים שיחות הורים כדי לשתף, להדריך, ולחזק את הקשר בין ההורה לילד. ההורה הוא שותף, לא צופה מהצד.'
    },
    {
      q: 'האם אפשר לקבל טיפול בזום?',
      a: 'כן. גיל מעניקה טיפול בזום הן לילדים והן למבוגרים, לכל הארץ. הטיפול בזום יעיל ומאפשר גמישות — הילד מטופל בסביבה המוכרת לו, דבר שלעתים קרובות מגביר את תחושת הביטחון.'
    },
    {
      q: 'איך קובעים שיחת היכרות?',
      a: 'פשוט מאוד — שולחים הודעה בוואטסאפ, מתקשרים, או ממלאים את הטופס באתר. אחרי הפנייה נקבע שיחת היכרות קצרה (ללא התחייבות) כדי להכיר, לשמוע, ולהחליט יחד מה הצעד הנכון.'
    },
    {
      q: 'מה ההכשרה של גיל סיטון?',
      a: 'גיל היא עובדת סוציאלית קלינית מוסמכת M.S.W, מטפלת בשיטת "מדברים ביחד", ובוגרת בית הספר למטפלים בשיטת "דרך". לצד ההכשרה הפורמלית, היא גם אמא — וזה מביא ממד נוסף של הבנה לעבודתה.'
    },
    {
      q: 'האם הטיפול מתאים גם למבוגרים?',
      a: 'כן. גיל מטפלת גם במבוגרים בטיפול רגשי קלאסי — מרחב אישי ועמוק לעיבוד רגשות, הבנת דפוסים, ויצירת שינוי בחיים. הטיפול מתאים למגוון מצבים: חרדה, משברים, יחסים, צמיחה אישית ועוד.'
    }
  ];

  var faqSchema = {
    '@type': 'FAQPage',
    '@id': BASE_URL + '/#faq',
    'mainEntity': faqItems.map(function(item) {
      return {
        '@type': 'Question',
        'name': item.q,
        'acceptedAnswer': { '@type': 'Answer', 'text': item.a }
      };
    })
  };

  /* ========================
     Breadcrumb per page
     ======================== */
  function getBreadcrumb() {
    var page = window.location.pathname.split('/').pop() || 'index.html';
    var crumbs = [{ '@type': 'ListItem', 'position': 1, 'name': 'בית', 'item': BASE_URL + '/' }];
    var pageMap = {
      'about.html':             { name: 'אודות',            url: BASE_URL + '/about.html' },
      'children-therapy.html':  { name: 'טיפול בילדים',    url: BASE_URL + '/children-therapy.html' },
      'adult-therapy.html':     { name: 'טיפול במבוגרים',  url: BASE_URL + '/adult-therapy.html' },
      'contact.html':           { name: 'יצירת קשר',       url: BASE_URL + '/contact.html' }
    };
    if (pageMap[page]) {
      crumbs.push({ '@type': 'ListItem', 'position': 2, 'name': pageMap[page].name, 'item': pageMap[page].url });
    }
    return { '@type': 'BreadcrumbList', 'itemListElement': crumbs };
  }

  /* ========================
     Inject
     ======================== */
  function inject(obj) {
    var s = document.createElement('script');
    s.type = 'application/ld+json';
    s.textContent = JSON.stringify({ '@context': 'https://schema.org', '@graph': Array.isArray(obj) ? obj : [obj] });
    document.head.appendChild(s);
  }

  inject([person, business, serviceChildren, serviceAdults, faqSchema, getBreadcrumb()]);

})();

(function() {
  const path = window.location.pathname;
  
  const breadcrumbs = {
    '/about.html': [
      { name: 'בית', url: 'https://gilsitton.com/' },
      { name: 'אודות', url: 'https://gilsitton.com/about.html' }
    ],
    '/children-therapy.html': [
      { name: 'בית', url: 'https://gilsitton.com/' },
      { name: 'טיפול בילדים', url: 'https://gilsitton.com/children-therapy.html' }
    ],
    '/adult-therapy.html': [
      { name: 'בית', url: 'https://gilsitton.com/' },
      { name: 'טיפול במבוגרים', url: 'https://gilsitton.com/adult-therapy.html' }
    ],
    '/contact.html': [
      { name: 'בית', url: 'https://gilsitton.com/' },
      { name: 'יצירת קשר', url: 'https://gilsitton.com/contact.html' }
    ]
  };

  const items = breadcrumbs[path];
  if (!items) return;

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map(function(item, i) {
      return {
        "@type": "ListItem",
        "position": i + 1,
        "name": item.name,
        "item": item.url
      };
    })
  };

  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(schema);
  document.head.appendChild(script);
})();
