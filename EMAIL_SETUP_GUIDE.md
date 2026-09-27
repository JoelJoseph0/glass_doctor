# Email Setup Guide for The Glass Doctor Website

## Current Status
❌ **Email is NOT currently working**. The form only simulates sending and logs to the console.

## Recommended Solutions

---

## ✅ OPTION 1: EmailJS (EASIEST - No Backend Required)

### Why EmailJS?
- ✅ No backend server needed
- ✅ Free for up to 200 emails/month
- ✅ Easy setup in 10 minutes
- ✅ Works directly from React
- ✅ Reliable email delivery

### Step 1: Install EmailJS Package

Open your terminal in the project directory and run:
```bash
npm install @emailjs/browser
```

**If you get execution policy error:**
1. Open PowerShell as Administrator
2. Run: `Set-ExecutionPolicy RemoteSigned`
3. Try installing again

**OR use this command:**
```bash
cmd /c "npm install @emailjs/browser"
```

### Step 2: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" (free)
3. Verify your email

### Step 3: Setup Email Service

1. In EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider:
   - **Gmail** (easiest if you have Gmail)
   - **Outlook/Hotmail**
   - Or other SMTP service

4. For Gmail:
   - Click "Connect Gmail Account"
   - Sign in with **info@theglassdoctor.ae** (or your business Gmail)
   - Allow EmailJS access

5. Note your **Service ID** (e.g., `service_abc123`)

### Step 4: Create Email Template

1. Go to **Email Templates**
2. Click **Create New Template**
3. Use this template:

**Template Settings:**
- Template Name: `Glass Doctor Contact Form`
- Template ID: (note this, e.g., `template_xyz789`)

**Email Template:**
```
Subject: New Contact Form Submission - {{from_name}}

From: {{from_name}}
Email: {{from_email}}
Phone: {{from_phone}}
Company: {{from_company}}

Message:
{{message}}

---
Sent from The Glass Doctor website contact form
```

**To Email:** `info@theglassdoctor.ae`

4. Click **Save**

### Step 5: Get Your Public Key

1. Go to **Account** → **General**
2. Find your **Public Key** (e.g., `abc123xyz`)
3. Note this down

### Step 6: Create Environment File

Create a file named `.env` in your project root:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Replace with your actual IDs from EmailJS.

### Step 7: Update .gitignore

Make sure `.env` is in your `.gitignore` file to keep keys private:
```
.env
.env.local
```

### Step 8: Use the Updated Component

I've created an updated `ContactSection.tsx` component that uses EmailJS. Replace your current component with the new one (see `ContactSection_EmailJS.tsx`).

### Step 9: Test the Form

1. Run your development server: `npm run dev`
2. Fill out the contact form
3. Submit
4. Check `info@theglassdoctor.ae` inbox for the email

---

## ✅ OPTION 2: Backend API (More Professional)

### When to Use This:
- You want full control over emails
- You need to store form submissions in a database
- You want custom email templates and automation
- You have/can create a backend server

### Technologies Needed:
- Node.js/Express backend
- Email service (SendGrid, AWS SES, Mailgun, or Nodemailer)

### Quick Setup with Nodemailer:

1. Create a backend folder and initialize:
```bash
mkdir backend
cd backend
npm init -y
npm install express nodemailer cors dotenv
```

2. Create `server.js`:
```javascript
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD, // Use App Password for Gmail
  },
});

app.post('/api/contact', async (req, res) => {
  const { name, email, phone, company, message } = req.body;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'info@theglassdoctor.ae',
    subject: `New Contact Form: ${name}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Company:</strong> ${company || 'N/A'}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

3. Create `.env` in backend:
```
EMAIL_USER=info@theglassdoctor.ae
EMAIL_PASSWORD=your_app_password
PORT=3001
```

4. For Gmail, create App Password:
   - Go to Google Account → Security
   - Enable 2-Step Verification
   - App Passwords → Generate new password
   - Use this as `EMAIL_PASSWORD`

5. Update ContactSection to call API:
```typescript
const response = await fetch('http://localhost:3001/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData),
});
```

---

## ✅ OPTION 3: Simple Mailto Link (Temporary Fallback)

If you need something working immediately:

Update the submit button to open the default email client:

```typescript
const handleSubmit = (e: FormEvent) => {
  e.preventDefault();
  
  if (!validateForm()) return;

  const subject = `Contact Form: ${formData.name}`;
  const body = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Company: ${formData.company || 'N/A'}

Message:
${formData.message}
  `.trim();

  window.location.href = `mailto:info@theglassdoctor.ae?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
};
```

**Pros:** Works immediately, no setup
**Cons:** Opens email client, less professional, not recommended for production

---

## 🎯 My Recommendation

**Use Option 1 (EmailJS)** because:
- ✅ Works in 10 minutes
- ✅ No backend needed
- ✅ Professional appearance
- ✅ Reliable delivery
- ✅ Free for your needs (200 emails/month is plenty)
- ✅ Can upgrade if needed

---

## Need Help?

1. **Can't install package?**
   - Open PowerShell as Admin
   - Run: `Set-ExecutionPolicy RemoteSigned`

2. **Emails not sending?**
   - Check EmailJS dashboard for errors
   - Verify Service ID, Template ID, and Public Key are correct
   - Check spam folder

3. **Want me to implement it?**
   - Install the package: `npm install @emailjs/browser`
   - Get your EmailJS credentials
   - Tell me the IDs and I'll update the code

---

## Quick Start Checklist

- [ ] Choose Option 1, 2, or 3
- [ ] Install required packages
- [ ] Create EmailJS account (Option 1) or backend (Option 2)
- [ ] Get credentials/keys
- [ ] Create `.env` file with keys
- [ ] Update ContactSection component
- [ ] Test the form
- [ ] Verify email received at info@theglassdoctor.ae

---

**Ready to implement? Let me know which option you prefer!**
