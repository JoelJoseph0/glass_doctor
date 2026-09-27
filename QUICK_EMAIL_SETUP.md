# ⚡ Quick Email Setup - 5 Minutes

## Current Status
❌ **Email NOT working** - form only simulates sending

## ✅ Fastest Solution (EmailJS)

### 1. Install Package (1 min)
```bash
npm install @emailjs/browser
```

### 2. Create Account (2 min)
- Go to: https://www.emailjs.com/
- Sign up (free)
- Verify email

### 3. Setup Service (2 min)
**Dashboard → Email Services → Add New Service**
- Choose Gmail/Outlook
- Connect: `info@theglassdoctor.ae`
- Copy **Service ID** → Save it

### 4. Create Template (2 min)
**Dashboard → Email Templates → Create New Template**

**Template:**
```
Subject: New Contact: {{from_name}}

Name: {{from_name}}
Email: {{from_email}}
Phone: {{from_phone}}
Company: {{from_company}}

Message:
{{message}}
```

**To Email:** `info@theglassdoctor.ae`

Copy **Template ID** → Save it

### 5. Get Public Key (30 sec)
**Dashboard → Account → General**
- Copy **Public Key** → Save it

### 6. Create .env File (1 min)
Create `.env` in project root:
```env
VITE_EMAILJS_SERVICE_ID=paste_service_id
VITE_EMAILJS_TEMPLATE_ID=paste_template_id
VITE_EMAILJS_PUBLIC_KEY=paste_public_key
```

### 7. Replace Component (30 sec)
```bash
# Backup current
ren src\components\sections\ContactSection.tsx ContactSection_OLD.tsx

# Use new version
ren src\components\sections\ContactSection_EmailJS.tsx ContactSection.tsx
```

### 8. Test (1 min)
```bash
npm run dev
```

Fill form → Submit → Check inbox!

---

## 🚨 Quick Fallback (No Setup)

**Want it working in 30 seconds?**

Use mailto version (opens email client):
```bash
ren src\components\sections\ContactSection.tsx ContactSection_OLD.tsx
ren src\components\sections\ContactSection_Mailto.tsx ContactSection.tsx
```

Done! (Less professional but works immediately)

---

## Need Help?

See full guide: `EMAIL_SETUP_GUIDE.md`

Status & options: `CONTACT_FORM_STATUS.md`
