# EmailJS Setup Guide for The Glass Doctor

## ✅ What's Already Done

- EmailJS library installed (`@emailjs/browser@4.4.1`)
- Contact form configured to use EmailJS
- Form sends to both: `sales@theglassdoctor.ae` and `accounts@theglassdoctor.ae`
- Environment variables structure created

## 🚀 Quick Setup (5 Steps)

### Step 1: Create EmailJS Account

1. Go to **https://www.emailjs.com/**
2. Click "Sign Up" (Free account: 200 emails/month)
3. Verify your email address

### Step 2: Add Email Service

1. In EmailJS dashboard, click **"Email Services"** in the left menu
2. Click **"Add New Service"**
3. Choose your email provider:
   - **Gmail** (recommended for simplicity)
   - Outlook
   - Yahoo
   - Custom SMTP
4. Click "Connect Account" and authorize EmailJS
5. **IMPORTANT**: Copy the **Service ID** - you'll need it later

### Step 3: Create Email Template

1. Click **"Email Templates"** in the left menu
2. Click **"Create New Template"**
3. **Template Settings**:
   - **Template Name**: "The Glass Doctor Contact Form"
   - **Subject**: 
     ```
     New Inquiry from {{from_name}}{{#from_company}} - {{from_company}}{{/from_company}}
     ```
   - **Content** (copy this exactly):
     ```
     Hello,

     You have received a new inquiry from The Glass Doctor website:

     Name: {{from_name}}
     Email: {{from_email}}
     Phone: {{from_phone}}
     Company: {{from_company}}

     Project Details:
     {{message}}

     ---
     This email was sent from theglassdoctor.ae contact form.

     To reply, please respond to: {{from_email}}
     ```

4. **Recipients Configuration**:
   - Click on "To Email" field
   - Enter: `sales@theglassdoctor.ae,accounts@theglassdoctor.ae`
   - This sends to BOTH email addresses

5. Click **"Save"**
6. **IMPORTANT**: Copy the **Template ID** from the top of the page

### Step 4: Get Public Key

1. Click on your **account name** (top right corner)
2. Select **"Account"** from dropdown
3. Click **"General"** tab
4. Find **"Public Key"** section
5. **IMPORTANT**: Copy your **Public Key**

### Step 5: Configure Environment Variables

1. In your project root (`d:\Freelance\vitrum-glass\`), create a file named `.env`
2. Copy this content and **replace** with your actual values:

```env
# EmailJS Configuration
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxx
```

**Example** (with fake values):
```env
VITE_EMAILJS_SERVICE_ID=service_abc123def
VITE_EMAILJS_TEMPLATE_ID=template_xyz789ghi
VITE_EMAILJS_PUBLIC_KEY=dXm8K4JqL9oPqRsT
```

3. Save the file
4. **IMPORTANT**: Restart your development server:
   ```bash
   # Stop the current server (Ctrl+C)
   # Then start again:
   npm run dev
   ```

## 🧪 Testing the Setup

1. Open your website: http://localhost:5173
2. Scroll to the Contact section
3. Fill out the form with test data
4. Click "Send Message"
5. Check both email addresses:
   - sales@theglassdoctor.ae
   - accounts@theglassdoctor.ae
6. You should receive the email within seconds

## 📧 Email Template Variables

The form sends these variables to EmailJS:

| Variable | Description | Example |
|----------|-------------|---------|
| `{{from_name}}` | Customer's name | John Smith |
| `{{from_email}}` | Customer's email | john@example.com |
| `{{from_phone}}` | Customer's phone | +971 50 123 4567 |
| `{{from_company}}` | Customer's company | ABC Construction |
| `{{message}}` | Project details | Need glass for office... |
| `{{to_sales}}` | Sales email | sales@theglassdoctor.ae |
| `{{to_accounts}}` | Accounts email | accounts@theglassdoctor.ae |

## 🎨 EmailJS Dashboard - Advanced Options

### Auto-Reply Template (Optional)

You can create a second template to auto-reply to customers:

1. Create new template: "Customer Auto-Reply"
2. **To Email**: `{{from_email}}`
3. **Subject**: "Thank you for contacting The Glass Doctor"
4. **Content**:
   ```
   Dear {{from_name}},

   Thank you for contacting The Glass Doctor!

   We have received your inquiry and our team will get back to you within 24 hours.

   Your inquiry details:
   Name: {{from_name}}
   Email: {{from_email}}
   Phone: {{from_phone}}

   Best regards,
   The Glass Doctor Team
   
   Phone: +971 50 259 7995
   Email: sales@theglassdoctor.ae
   Website: https://theglassdoctor.ae
   ```

### Send Both Emails

In your `ContactSection_EmailJS.tsx`, add this code after the first email sends:

```typescript
// Send auto-reply to customer
await emailjs.send(
  serviceId,
  'template_autoreply', // Your auto-reply template ID
  templateParams,
  publicKey
)
```

## 🔒 Security Notes

- ✅ `.env` file is in `.gitignore` - your keys won't be committed to Git
- ✅ Public Key is safe to use in frontend code (it's designed for this)
- ✅ EmailJS has spam protection built-in
- ⚠️ Free tier: 200 emails/month
- 💰 Paid plans start at $7/month for 1000 emails

## 🐛 Troubleshooting

### Issue: "EmailJS not configured" error
**Solution**: 
- Check that `.env` file exists in project root
- Verify all three variables are set
- Restart development server: `npm run dev`

### Issue: Email not received
**Solution**:
1. Check EmailJS dashboard for failed sends
2. Verify template has correct recipient emails
3. Check spam folder
4. Verify email service is connected in EmailJS

### Issue: "Failed to send" error
**Solution**:
- Open browser console (F12) for detailed error
- Verify Service ID, Template ID, and Public Key are correct
- Check internet connection
- Verify EmailJS account is active

### Issue: Template variables not working
**Solution**:
- Ensure variable names match exactly: `{{from_name}}` not `{{name}}`
- Check template preview in EmailJS dashboard
- Variables are case-sensitive

## 📁 Project Files

| File | Purpose |
|------|---------|
| `.env` | Your EmailJS credentials (create this) |
| `.env.example` | Template for credentials |
| `src/components/sections/ContactSection_EmailJS.tsx` | Active contact form |
| `src/App.tsx` | Uses EmailJS version |
| `package.json` | Has `@emailjs/browser` dependency |

## 🎯 Production Deployment

When deploying to production (GitHub Pages):

1. **GitHub Actions Secrets**:
   - Go to: Repository → Settings → Secrets and variables → Actions
   - Add three secrets:
     - `VITE_EMAILJS_SERVICE_ID`
     - `VITE_EMAILJS_TEMPLATE_ID`
     - `VITE_EMAILJS_PUBLIC_KEY`

2. **Or use .env.production**:
   - Create `.env.production` with same content as `.env`
   - Deploy normally - Vite will use it during build

## 📞 Support

- **EmailJS Docs**: https://www.emailjs.com/docs/
- **EmailJS Support**: support@emailjs.com
- **Dashboard**: https://dashboard.emailjs.com/

## ✨ Current Form Features

✅ Sends to both emails simultaneously
✅ Full form validation (name, email, phone, message)
✅ Loading state during submission
✅ Success/error messages
✅ Auto form reset after success
✅ Mobile responsive
✅ Professional email formatting
✅ Includes all customer details

---

**Need help?** If you encounter any issues, check the browser console (F12) for error messages.
