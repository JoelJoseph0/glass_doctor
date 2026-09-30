# Email Configuration for The Glass Doctor Website

## Overview

The contact form is configured to send inquiries to both email addresses:
- **sales@theglassdoctor.ae**
- **accounts@theglassdoctor.ae**

## How It Works

### Current Implementation (Mailto Link)

The contact form uses the browser's default email client to send messages. When a user submits the form:

1. User fills out the contact form with:
   - Name
   - Email
   - Phone
   - Company (optional)
   - Project details

2. On submission, the form creates a `mailto:` link with:
   - **To**: sales@theglassdoctor.ae, accounts@theglassdoctor.ae
   - **Subject**: "New Inquiry from [Name] - [Company]"
   - **Body**: Pre-formatted with all form data

3. The user's default email client opens with the message pre-filled
4. User clicks "Send" in their email client to complete the submission

### Form Behavior

- ✅ Full client-side validation
- ✅ Required fields: Name, Email, Phone, Message
- ✅ Email format validation
- ✅ Phone number validation (min 10 characters)
- ✅ Message minimum length (10 characters)
- ✅ Form resets after successful submission (3 seconds delay)
- ✅ User-friendly success/error messages

## Alternative: EmailJS Integration (Optional)

If you want to send emails directly without opening the user's email client, you can use EmailJS.

### EmailJS Setup Steps

1. **Create EmailJS Account**
   - Go to https://www.emailjs.com/
   - Sign up for a free account
   - Free tier: 200 emails/month

2. **Add Email Service**
   - In EmailJS dashboard, go to "Email Services"
   - Click "Add New Service"
   - Choose your email provider (Gmail, Outlook, etc.)
   - Connect your email account

3. **Create Email Template**
   - Go to "Email Templates"
   - Click "Create New Template"
   - Template content:

```
Subject: New Inquiry from {{from_name}}{{#from_company}} - {{from_company}}{{/from_company}}

Name: {{from_name}}
Email: {{from_email}}
Phone: {{from_phone}}
Company: {{from_company}}

Project Details:
{{message}}

---
This email was sent from The Glass Doctor website contact form.
```

4. **Configure Multiple Recipients**
   - In the template settings, set "To Email" to:
     ```
     sales@theglassdoctor.ae,accounts@theglassdoctor.ae
     ```
   - Or set individual templates for each department

5. **Get Credentials**
   - Service ID: Found in "Email Services"
   - Template ID: Found in "Email Templates"
   - Public Key: Found in "Account" → "General"

6. **Add Environment Variables**
   Create `.env` file in project root:
   ```
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

7. **Switch to EmailJS Implementation**
   In `src/App.tsx`, replace:
   ```tsx
   import ContactSection from '@/components/sections/ContactSection'
   ```
   with:
   ```tsx
   import ContactSection from '@/components/sections/ContactSection_EmailJS'
   ```

## Email Addresses Displayed

Both email addresses are displayed in:
- ✅ Contact Section (contact form page)
- ✅ Footer (all pages)

Users can click on either email to send a direct email.

## Testing the Contact Form

1. Fill out the form with test data
2. Click "Send Message"
3. Your default email client should open with:
   - Pre-filled recipients: sales@theglassdoctor.ae, accounts@theglassdoctor.ae
   - Pre-filled subject line
   - Pre-filled body with all form data
4. Click "Send" in your email client

## Troubleshooting

### Issue: Email client doesn't open
**Solution**: User may not have a default email client configured. They can:
- Manually copy the email addresses and send directly
- Use the clickable email links in the contact info section

### Issue: Want to send emails directly without email client
**Solution**: Follow the EmailJS setup instructions above

### Issue: Spam concerns
**Solution**: 
- Ensure both email addresses have proper SPF/DKIM records configured
- Add website domain to email whitelist
- Use EmailJS with proper CAPTCHA if spam becomes an issue

## File Locations

- Main contact form: `src/components/sections/ContactSection.tsx`
- EmailJS version: `src/components/sections/ContactSection_EmailJS.tsx`
- Footer: `src/components/layout/Footer.tsx`
- Dependencies: `@emailjs/browser` (already installed)

## Support

For questions about the email setup, contact the development team or refer to:
- EmailJS Documentation: https://www.emailjs.com/docs/
- React EmailJS Tutorial: https://www.emailjs.com/docs/tutorial/creating-contact-form/
