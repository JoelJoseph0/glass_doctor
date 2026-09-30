# EmailJS Troubleshooting Guide 🔧

## Common Issues & Solutions

### ❌ Error: "EmailJS not configured"

**Symptoms**: 
- Form shows error message
- Console says: "EmailJS not configured. Please set up .env file"

**Solutions**:
1. ✅ Check `.env` file exists in project root (next to `package.json`)
2. ✅ Verify file is named exactly `.env` (not `.env.txt`)
3. ✅ Check all three variables are set:
   ```
   VITE_EMAILJS_SERVICE_ID=service_xxxxx
   VITE_EMAILJS_TEMPLATE_ID=template_xxxxx
   VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxx
   ```
4. ✅ Restart development server:
   - Press `Ctrl+C` to stop
   - Run `npm run dev` again
5. ✅ Hard refresh browser: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)

---

### ❌ Error: "Failed to send email"

**Symptoms**:
- Form submits but shows error
- Console shows EmailJS error

**Solutions**:

#### A) Check Service ID
1. Go to EmailJS Dashboard → Email Services
2. Copy the Service ID (looks like: `service_abc123`)
3. Compare with your `.env` file
4. Must match exactly (case-sensitive)

#### B) Check Template ID
1. Go to EmailJS Dashboard → Email Templates
2. Click on your template
3. Copy Template ID from top (looks like: `template_xyz789`)
4. Compare with your `.env` file
5. Must match exactly (case-sensitive)

#### C) Check Public Key
1. EmailJS Dashboard → Click your name → Account → General
2. Copy Public Key
3. Compare with your `.env` file
4. Must match exactly (case-sensitive)

#### D) Verify Email Service Connected
1. EmailJS Dashboard → Email Services
2. Check status shows "Connected" (green)
3. If not, click "Reconnect" and authorize again

---

### ❌ Email Not Received

**Symptoms**:
- Form says "Success"
- But no email arrives

**Solutions**:

#### 1. Check Spam/Junk Folder
- Look in spam folder of both:
  - sales@theglassdoctor.ae
  - accounts@theglassdoctor.ae

#### 2. Verify Template Recipients
1. EmailJS Dashboard → Email Templates
2. Click your template
3. Check "To Email" field shows:
   ```
   sales@theglassdoctor.ae,accounts@theglassdoctor.ae
   ```
4. No spaces between emails!
5. Save if you made changes

#### 3. Check EmailJS Dashboard
1. Dashboard → History (or Logs)
2. Look for recent sends
3. Check status:
   - ✅ Green = Sent successfully
   - ❌ Red = Failed (click for details)

#### 4. Verify Email Addresses
- Test sending to your personal email first
- If that works, issue is with company emails
- Contact email administrator to whitelist EmailJS

---

### ❌ Template Variables Not Showing

**Symptoms**:
- Email received but shows `{{from_name}}` instead of actual name

**Solutions**:

1. ✅ Check variable names match exactly:
   ```
   {{from_name}}     ✅ Correct
   {{name}}          ❌ Wrong
   {{ from_name }}   ❌ Wrong (spaces)
   ```

2. ✅ Verify template in EmailJS dashboard:
   - Click "Test it" button
   - Fill test form
   - Check preview shows actual values

3. ✅ Check ContactSection_EmailJS.tsx has correct mapping:
   ```typescript
   const templateParams = {
     from_name: formData.name,      // ✅
     from_email: formData.email,    // ✅
     from_phone: formData.phone,    // ✅
     from_company: formData.company,// ✅
     message: formData.message,     // ✅
   }
   ```

---

### ❌ Form Validation Errors

**Symptoms**:
- Can't submit form
- Red error messages under fields

**Solutions**:

#### Name Field
- ✅ Must not be empty
- ✅ Must contain text

#### Email Field
- ✅ Must not be empty
- ✅ Must be valid format: `user@domain.com`
- ❌ Wrong: `user@domain` or `user.com`

#### Phone Field
- ✅ Must be at least 10 characters
- ✅ Can include: numbers, spaces, dashes, (), +
- ✅ Valid: `+971 50 123 4567` or `0501234567`

#### Message Field
- ✅ Must not be empty
- ✅ Must be at least 10 characters long

---

### ⚠️ Rate Limiting

**Symptoms**:
- First few emails work
- Then starts failing
- Error about quota exceeded

**Solutions**:

1. **Free Tier Limit**: 200 emails/month
   - Check EmailJS Dashboard → Usage
   - Upgrade plan if needed

2. **Daily Limit**: 50 emails/day on free tier
   - Wait until next day
   - Or upgrade to paid plan

3. **Spam Protection**:
   - EmailJS may block rapid submissions
   - Wait a few minutes between tests

---

### 🔐 Security Issues

**Q**: Is my Public Key safe in the code?
**A**: ✅ Yes! EmailJS Public Key is designed for frontend use.

**Q**: Can anyone spam my emails?
**A**: EmailJS has built-in rate limiting and spam protection.

**Q**: Should I commit .env to Git?
**A**: ❌ No! It's already in `.gitignore`.

---

### 🌐 Production Deployment Issues

**Symptoms**:
- Works locally but not on deployed site

**Solutions**:

#### GitHub Pages
1. Add environment variables to GitHub Secrets:
   - Repository → Settings → Secrets → Actions
   - Add:
     - `VITE_EMAILJS_SERVICE_ID`
     - `VITE_EMAILJS_TEMPLATE_ID`
     - `VITE_EMAILJS_PUBLIC_KEY`

2. Update GitHub Actions workflow to use secrets

#### Or use .env.production
1. Create `.env.production` file
2. Copy same content as `.env`
3. Deploy normally

---

### 🧪 How to Test Properly

1. **Test locally first**:
   ```bash
   npm run dev
   ```
   - Fill form
   - Check console for errors (F12)
   - Verify email received

2. **Test with personal email**:
   - Temporarily change template recipient to your email
   - Test submission
   - If works, company emails are the issue

3. **Check EmailJS Dashboard**:
   - History/Logs section
   - Shows all send attempts
   - Click failed sends for details

4. **Test production build**:
   ```bash
   npm run build
   npm run preview
   ```
   - Test form at preview URL
   - Should work same as development

---

### 📞 Still Having Issues?

1. **Check Browser Console** (F12):
   - Shows exact error messages
   - Copy error and search online

2. **EmailJS Support**:
   - Email: support@emailjs.com
   - Dashboard: https://dashboard.emailjs.com/
   - Docs: https://www.emailjs.com/docs/

3. **Test with EmailJS Playground**:
   - Dashboard → Test it
   - Quick way to verify your setup works

---

### ✅ Verification Checklist

Before asking for help, verify:

- [ ] `.env` file exists in project root
- [ ] All three variables set in `.env`
- [ ] Development server restarted after creating `.env`
- [ ] Service ID matches EmailJS dashboard
- [ ] Template ID matches EmailJS dashboard
- [ ] Public Key matches EmailJS dashboard
- [ ] Template has both email addresses in "To Email"
- [ ] Email service shows "Connected" status
- [ ] Browser console checked for errors (F12)
- [ ] Spam folder checked
- [ ] EmailJS Dashboard history checked

---

### 🎯 Quick Test Command

Run this in browser console (F12) after form loads:

```javascript
// Check if environment variables loaded
console.log('Service ID:', import.meta.env.VITE_EMAILJS_SERVICE_ID)
console.log('Template ID:', import.meta.env.VITE_EMAILJS_TEMPLATE_ID)
console.log('Public Key:', import.meta.env.VITE_EMAILJS_PUBLIC_KEY ? 'SET' : 'MISSING')

// Should show your IDs, not "undefined"
```

If any show `undefined`, your `.env` isn't loaded correctly.

---

**Need more help?** See `EMAILJS_SETUP_GUIDE.md` for detailed setup instructions.
