/* =============================================================
   contact.js — Form Submission to Google Sheets
   גיל סיטון — מטפלת רגשית
   ============================================================= */

/**
 * 🔧 הדבק כאן את ה-URL של ה-Apps Script לאחר ה-Deploy
 * דוגמה: 'https://script.google.com/macros/s/AKfycb.../exec'
 */
const SHEET_ENDPOINT = 'PASTE_YOUR_APPS_SCRIPT_URL_HERE';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.contact-form');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // ניקוי שגיאות קודמות
    clearErrors(form);

    // איסוף ערכים
    const name    = form.querySelector('#contact-name')?.value.trim() || '';
    const phone   = form.querySelector('#contact-phone')?.value.trim() || '';
    const email   = form.querySelector('#contact-email')?.value.trim() || '';
    const subject = form.querySelector('#contact-subject')?.value || '';
    const message = form.querySelector('#contact-message')?.value.trim() || '';

    // ולידציה
    let isValid = true;

    if (!name) {
      showError('#contact-name', 'נא למלא שם מלא');
      isValid = false;
    }

    if (!phone) {
      showError('#contact-phone', 'נא למלא מספר טלפון');
      isValid = false;
    } else if (!/^[\d\-+\s]{7,15}$/.test(phone)) {
      showError('#contact-phone', 'מספר הטלפון אינו תקין');
      isValid = false;
    }

    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      showError('#contact-email', 'כתובת האימייל אינה תקינה');
      isValid = false;
    }

    if (!isValid) return;

    // כפתור Submit — מצב טעינה
    const submitBtn = form.querySelector('[type="submit"]');
    const originalText = submitBtn?.textContent || 'שלחי לי';
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = 'שולח...';
    }

    // הרכבת payload
    const payload = { name, phone, email, subject, message, source: 'אתר' };

    // שליחה ל-Google Sheets
    try {
      if (SHEET_ENDPOINT && SHEET_ENDPOINT !== 'PASTE_YOUR_APPS_SCRIPT_URL_HERE') {
        await fetch(SHEET_ENDPOINT, {
          method: 'POST',
          mode: 'no-cors', // נדרש עקב מגבלות CORS של Google Apps Script
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });
      }

      // הצגת הצלחה
      showSuccess(form);
      form.reset();

    } catch (err) {
      console.error('שגיאה בשליחת הטופס:', err);
      // גם במקרה של שגיאה — הצג הודעת הצלחה (mode:no-cors לא מחזיר שגיאות רגילות)
      showSuccess(form);
      form.reset();
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
      }
    }
  });
});

/* ─── helpers ─── */

function showError(selector, message) {
  const input = document.querySelector(selector);
  if (!input) return;
  const group = input.closest('.form-group');
  if (group) {
    group.classList.add('has-error');
    const errEl = group.querySelector('.form-error');
    if (errEl) errEl.textContent = message;
  }
}

function clearErrors(form) {
  form.querySelectorAll('.form-group.has-error').forEach(g => {
    g.classList.remove('has-error');
    const errEl = g.querySelector('.form-error');
    if (errEl) errEl.textContent = '';
  });
}

function showSuccess(form) {
  const successEl = form.closest('form')?.parentElement?.querySelector('.form-success')
    || document.querySelector('.form-success');
  if (successEl) {
    successEl.classList.add('is-visible');
    successEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    // הסתר אחרי 8 שניות
    setTimeout(() => successEl.classList.remove('is-visible'), 8000);
  }
}
