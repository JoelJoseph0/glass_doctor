# EmailJS Quick Start Checklist ✅

## You Need To Do These 5 Steps:

### ☐ Step 1: Create Account
- Go to: https://www.emailjs.com/
- Sign up (free)
- Verify email

### ☐ Step 2: Add Email Service
- Dashboard → Email Services → Add New Service
- Choose Gmail (or your provider)
- Connect your account
- **COPY THE SERVICE ID** → save it!

### ☐ Step 3: Create Template
- Dashboard → Email Templates → Create New Template
- Template Name: `Contact Form - The Glass Doctor`
- Subject: 
  ```
  New Inquiry from {{from_name}}
  ```
- To Email: 
  ```
  sales@theglassdoctor.ae,accounts@theglassdoctor.ae
  ```
- Content:
  ```
  New inquiry from The Glass Doctor website:

  Name: {{from_name}}
  Email: {{from_email}}
  Phone: {{from_phone}}
  Company: {{from_company}}

  Message:
  {{message}}
  ```
- Save
- **COPY THE TEMPLATE ID** → save it!

### ☐ Step 4: Get Public Key
- Click your name (top right) → Account → General
- **COPY THE PUBLIC KEY** → save it!

### ☐ Step 5: Create .env File
- In project root: `d:\Freelance\vitrum-glass\.env`
- Paste this (replace with YOUR values):
  ```
  VITE_EMAILJS_SERVICE_ID=service_YOUR_ID_HERE
  VITE_EMAILJS_TEMPLATE_ID=template_YOUR_ID_HERE
  VITE_EMAILJS_PUBLIC_KEY=YOUR_PUBLIC_KEY_HERE
  ```
- Save file
- Restart server: Stop (Ctrl+C) then `npm run dev`

## ✅ Test It!

1. Open: http://localhost:5173
2. Fill contact form
3. Click "Send Message"
4. Check emails: sales@theglassdoctor.ae AND accounts@theglassdoctor.ae

## 🎉 Done!

Both email addresses will now receive all contact form submissions automatically!

---

**📖 Need detailed instructions?** See `EMAILJS_SETUP_GUIDE.md`

**❓ Having issues?** 
- Check browser console (F12) for errors
- Verify all IDs are copied correctly
- Make sure you restarted the dev server
