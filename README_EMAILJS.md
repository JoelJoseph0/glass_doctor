# 📧 EmailJS Contact Form - The Glass Doctor

## ✅ Implementation Complete!

The contact form is now configured to use **EmailJS** and will send emails to:
- ✉️ **sales@theglassdoctor.ae**
- ✉️ **accounts@theglassdoctor.ae**

---

## 🚀 What You Need to Do Next

You need to complete the EmailJS setup to make the contact form work:

### Option 1: Quick Start (5 minutes)
👉 **Open**: `EMAILJS_QUICK_START.md`
- Simple checklist format
- Just follow the steps
- Get up and running fast

### Option 2: Detailed Guide (10 minutes)
👉 **Open**: `EMAILJS_SETUP_GUIDE.md`
- Step-by-step with screenshots descriptions
- Advanced features
- Auto-reply setup (optional)

---

## 📁 Files Created for You

| File | Purpose |
|------|---------|
| `EMAILJS_QUICK_START.md` | ⚡ Fast setup checklist |
| `EMAILJS_SETUP_GUIDE.md` | 📖 Detailed instructions |
| `EMAILJS_TROUBLESHOOTING.md` | 🔧 Fix common issues |
| `.env.example` | 📝 Template for your credentials |

---

## 🎯 What's Already Done

✅ EmailJS library installed
✅ Contact form updated to use EmailJS
✅ Form configured to send to both email addresses
✅ Email addresses displayed in Contact section
✅ Email addresses displayed in Footer
✅ Full form validation (name, email, phone, message)
✅ Success/error messages
✅ Loading states
✅ Auto form reset after success
✅ Mobile responsive design
✅ Professional email formatting
✅ Environment variables structure ready

---

## 🎬 Quick Setup Steps

1. **Create EmailJS Account** → https://www.emailjs.com/
2. **Add Email Service** (Gmail recommended)
3. **Create Email Template** with both recipients
4. **Get your IDs** (Service ID, Template ID, Public Key)
5. **Create `.env` file** with your IDs
6. **Restart dev server**: `npm run dev`
7. **Test the form!**

Total time: ~5 minutes

---

## 🧪 Testing

After setup:
1. Open http://localhost:5173
2. Scroll to Contact section
3. Fill out the form
4. Click "Send Message"
5. Check both email inboxes!

---

## 📧 Email Template You'll Create

```
Subject: New Inquiry from {{from_name}}

To: sales@theglassdoctor.ae, accounts@theglassdoctor.ae

Body:
New inquiry from The Glass Doctor website:

Name: {{from_name}}
Email: {{from_email}}
Phone: {{from_phone}}
Company: {{from_company}}

Message:
{{message}}
```

---

## 💰 Pricing

- **Free Tier**: 200 emails/month (perfect for most businesses)
- **Paid Plans**: Start at $7/month for 1000 emails
- **No credit card required** for free tier

---

## 🔒 Security

✅ `.env` file is in `.gitignore` (won't be committed)
✅ Public Key is safe to use in frontend
✅ EmailJS has built-in spam protection
✅ Rate limiting prevents abuse

---

## 🆘 Need Help?

1. **Having issues?** → Open `EMAILJS_TROUBLESHOOTING.md`
2. **Want detailed guide?** → Open `EMAILJS_SETUP_GUIDE.md`
3. **Quick setup?** → Open `EMAILJS_QUICK_START.md`

---

## 🎉 What Happens After Setup?

Once EmailJS is configured:

1. ✨ User fills contact form on website
2. 📤 Form sends data to EmailJS
3. 📧 EmailJS forwards email to both addresses:
   - sales@theglassdoctor.ae
   - accounts@theglassdoctor.ae
4. ✅ User sees success message
5. 🔄 Form automatically resets

**All automatic!** No manual intervention needed.

---

## 🌐 Production Deployment

For GitHub Pages deployment, you'll need to add your EmailJS credentials as GitHub Secrets:

1. Repository → Settings → Secrets → Actions
2. Add three secrets:
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`

Or create `.env.production` with same values.

---

## ✨ Features Included

- ✅ Real-time form validation
- ✅ Email format validation
- ✅ Phone number validation
- ✅ Minimum message length check
- ✅ Loading spinner during send
- ✅ Success message with auto-dismiss
- ✅ Error handling with retry option
- ✅ Sends to multiple recipients
- ✅ Professional email formatting
- ✅ Includes all customer details
- ✅ Works on all devices

---

## 📞 Support Resources

- **EmailJS Documentation**: https://www.emailjs.com/docs/
- **EmailJS Dashboard**: https://dashboard.emailjs.com/
- **EmailJS Support**: support@emailjs.com

---

**👉 Start Here**: Open `EMAILJS_QUICK_START.md` and follow the 5 steps!

Once you create the `.env` file with your EmailJS credentials and restart the server, your contact form will be fully functional! 🚀
