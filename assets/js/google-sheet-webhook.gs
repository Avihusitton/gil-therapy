/**
 * ============================================================
 * Google Apps Script — Web App לקליטת לידים
 * אתר: גיל סיטון — מטפלת רגשית
 * ============================================================
 *
 * הוראות התקנה:
 * 1. פתח את ה-Google Sheet: https://docs.google.com/spreadsheets/d/1R7bLz4pqfqIb0zDb5DMDmzbBX5JMJxhJo44s6U8ko4g/
 * 2. לחץ על "Extensions" > "Apps Script"
 * 3. מחק את כל הקוד הקיים ב-Code.gs
 * 4. הדבק את הקוד הזה במקומו
 * 5. שמור (Ctrl+S)
 * 6. לחץ "Deploy" > "New deployment"
 *    - Type: "Web app"
 *    - Execute as: "Me"
 *    - Who has access: "Anyone"
 * 7. לחץ "Deploy" ואשר הרשאות
 * 8. העתק את ה-Web App URL שמתקבל
 * 9. הכנס אותו ב: assets/js/contact.js > שורת SHEET_ENDPOINT
 * ============================================================
 */

const SHEET_NAME = 'לידים'; // שם הגיליון — ניתן לשנות

function doPost(e) {
  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = ss.getSheetByName(SHEET_NAME);

    // אם הגיליון לא קיים — צור אותו עם כותרות
    if (!sheet) {
      sheet = ss.insertSheet(SHEET_NAME);
      sheet.appendRow([
        'תאריך ושעה',
        'שם',
        'טלפון',
        'אימייל',
        'סיבת הפנייה',
        'הודעה',
        'מקור'
      ]);
      // עיצוב כותרות
      sheet.getRange(1, 1, 1, 7).setFontWeight('bold').setBackground('#D28769').setFontColor('#ffffff');
      sheet.setFrozenRows(1);
    }

    // ניתוח הנתונים שנשלחו
    const data = JSON.parse(e.postData.contents);

    const now = new Date();
    const dateStr = Utilities.formatDate(now, 'Asia/Jerusalem', 'dd/MM/yyyy HH:mm');

    // הוספת שורה חדשה
    sheet.appendRow([
      dateStr,
      data.name    || '',
      data.phone   || '',
      data.email   || '',
      data.subject || '',
      data.message || '',
      data.source  || 'אתר'
    ]);

    // החזרת תגובת הצלחה (עם CORS headers)
    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// פונקציה לבדיקה — ניתן להריץ ידנית מ-Apps Script
function testInsert() {
  const fakeEvent = {
    postData: {
      contents: JSON.stringify({
        name: 'בדיקה',
        phone: '050-0000000',
        email: 'test@test.com',
        subject: 'ילדים',
        message: 'זוהי הודעת בדיקה',
        source: 'בדיקה ידנית'
      })
    }
  };
  doPost(fakeEvent);
}
