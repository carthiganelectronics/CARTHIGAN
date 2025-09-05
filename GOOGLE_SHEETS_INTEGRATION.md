# Google Sheets Integration for Mentorship Form

This document explains how to set up Google Sheets integration to save mentorship interest form submissions.

## Setup Instructions

### 1. Create Google Sheet

1. Go to [Google Sheets](https://sheets.google.com) and create a new spreadsheet
2. Name the spreadsheet "Mentorship Interest Submissions"
3. In the first row, create the following column headers:
   - Timestamp
   - Name
   - Email
   - Phone
   - Interest
   - Message

### 2. Create Google Apps Script

1. In your Google Sheet, click on "Extensions" > "Apps Script"
2. Replace the default code with the following:

```javascript
const SHEET_NAME = "Sheet1"; // Change if you renamed your sheet

function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
    
    // Get the data from the form submission
    const data = {
      timestamp: e.parameter.Timestamp || new Date(),
      name: e.parameter.Name || '',
      email: e.parameter.Email || '',
      phone: e.parameter.Phone || '',
      interest: e.parameter.Interest || '',
      message: e.parameter.Message || ''
    };
    
    // Append the data to the sheet
    sheet.appendRow([
      data.timestamp,
      data.name,
      data.email,
      data.phone,
      data.interest,
      data.message
    ]);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({result: 'success'}))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({result: 'error', error: error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

3. Click the "Save" icon (floppy disk) or press Ctrl+S
4. Name the project "Mentorship Form Handler"

### 3. Deploy as Web App

1. Click on the "Deploy" button (triangle play button) and select "New deployment"
2. Click the gear icon next to "Select type" and choose "Web app"
3. Set the following options:
   - Description: Mentorship Form Handler
   - Execute as: Me (your email)
   - Who has access: Anyone (or "Anyone with Google" for more security)
4. Click "Deploy"
5. In the popup, click "Copy" to copy the Web app URL
6. Click "Done"

### 4. Update the Mentorship Page

1. Open `/app/mentorship/page.tsx`
2. Find the line with `const scriptURL = 'YOUR_GOOGLE_APPS_SCRIPT_URL'`
3. Replace `'YOUR_GOOGLE_APPS_SCRIPT_URL'` with the URL you copied from the previous step

### 5. Test the Integration

1. Run your Next.js application
2. Navigate to the mentorship page
3. Fill out and submit the form
4. Check your Google Sheet to verify the data was saved

## Security Considerations

- The "Anyone" access setting allows anyone with the URL to submit data
- For better security, you can set access to "Anyone with Google" 
- Consider adding rate limiting or additional validation in the Apps Script if needed

## Troubleshooting

### If data isn't appearing in the sheet:

1. Check that column headers in your Google Sheet match the field names in the script
2. Verify the Web app URL is correctly set in the mentorship page
3. Check the Apps Script execution logs for errors

### If you get CORS errors:

1. Ensure you're using `mode: 'no-cors'` in the fetch request
2. Note that with `no-cors` mode, you can't read the response, but the request should still work

## Customization

You can modify the Apps Script to:
- Send email notifications when a new submission is received
- Add data validation
- Create multiple sheets for different interest areas
- Add formulas or charts to analyze submissions

## Alternative Solutions

If you prefer other solutions, consider:
- Using Google Forms instead of a custom form
- Integrating with Zapier to connect to various services
- Using a form backend service like Formspree or FormBackend