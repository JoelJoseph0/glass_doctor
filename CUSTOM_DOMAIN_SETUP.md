# Custom Domain Setup Guide - theglassdoctor.ae

## 📋 Current vs Future Configuration

### Current (Repository URL):
- **URL:** https://joeljoseph0.github.io/glass_doctor/
- **Base Path:** `/glass_doctor/`
- **Config:** `base: '/glass_doctor/'` in vite.config.ts

### Future (Custom Domain):
- **URL:** https://theglassdoctor.ae
- **Base Path:** `/`
- **Config:** `base: '/'` in vite.config.ts

---

## 🚀 Steps to Switch to Custom Domain

### Phase 1: Domain Setup

#### 1. Configure DNS Records

Add these DNS records with your domain registrar:

**For Apex Domain (theglassdoctor.ae):**
```
Type: A
Name: @
Value: 185.199.108.153

Type: A
Name: @
Value: 185.199.109.153

Type: A
Name: @
Value: 185.199.110.153

Type: A
Name: @
Value: 185.199.111.153
```

**For WWW Subdomain (www.theglassdoctor.ae):**
```
Type: CNAME
Name: www
Value: joeljoseph0.github.io
```

#### 2. Configure GitHub Pages

1. Go to: https://github.com/JoelJoseph0/glass_doctor/settings/pages
2. Under "Custom domain", enter: `theglassdoctor.ae`
3. Click "Save"
4. Wait for DNS check to complete (can take up to 24 hours)
5. Once verified, check "Enforce HTTPS"

---

### Phase 2: Update Vite Configuration

#### Option A: Simple Change (Recommended)

Update `vite.config.ts`:

```typescript
export default defineConfig({
  base: '/',  // Changed from '/glass_doctor/'
  plugins: [react(), tailwindcss()],
  // ... rest of config
})
```

Rebuild and push:
```bash
npm run build
git add vite.config.ts
git commit -m "Update base path for custom domain"
git push
```

#### Option B: Environment-Based (Advanced)

Keep both configurations and switch based on environment:

```typescript
export default defineConfig(({ command, mode }) => {
  // Use custom domain in production, repo path in preview
  const base = process.env.USE_CUSTOM_DOMAIN === 'true' ? '/' : '/glass_doctor/'
  
  return {
    base,
    plugins: [react(), tailwindcss()],
    // ... rest of config
  }
})
```

Build for custom domain:
```bash
USE_CUSTOM_DOMAIN=true npm run build
```

Build for GitHub Pages repo:
```bash
npm run build
```

---

## ✅ Verification After Switch

### 1. Check DNS Propagation

```bash
# Windows Command Prompt
nslookup theglassdoctor.ae

# Should return GitHub Pages IPs:
# 185.199.108.153
# 185.199.109.153
# 185.199.110.153
# 185.199.111.153
```

### 2. Test Custom Domain

Visit: https://theglassdoctor.ae

✅ Site loads correctly  
✅ HTTPS works (green padlock)  
✅ All assets load  
✅ No redirect loops  

### 3. Test WWW Redirect

Visit: https://www.theglassdoctor.ae

✅ Redirects to https://theglassdoctor.ae  
✅ Site loads correctly  

---

## 📋 Complete Setup Checklist

### DNS Configuration:
- [ ] A records added for apex domain
- [ ] CNAME record added for www subdomain
- [ ] DNS propagation completed (check with nslookup)

### GitHub Pages:
- [ ] Custom domain configured in settings
- [ ] DNS check passed (green checkmark)
- [ ] HTTPS enforced
- [ ] CNAME file exists in repository

### Vite Configuration:
- [ ] Updated base path to '/'
- [ ] Rebuilt with `npm run build`
- [ ] Committed and pushed changes
- [ ] GitHub Actions completed successfully

### Verification:
- [ ] https://theglassdoctor.ae loads
- [ ] https://www.theglassdoctor.ae redirects
- [ ] All pages work
- [ ] All assets load
- [ ] Contact form works
- [ ] No console errors

---

## 🔧 Troubleshooting

### Issue: DNS not propagating

**Wait Time:** Can take up to 24-48 hours

**Check Status:**
```bash
nslookup theglassdoctor.ae
```

**Try:**
- Clear DNS cache: `ipconfig /flushdns`
- Check different DNS server: `nslookup theglassdoctor.ae 8.8.8.8`

### Issue: SSL certificate not working

**Solution:**
- Wait 15-30 minutes after DNS verification
- GitHub automatically provisions Let's Encrypt certificate
- Make sure "Enforce HTTPS" is checked in settings

### Issue: Site redirects to old URL

**Solution:**
1. Clear browser cache
2. Check vite.config.ts has `base: '/'`
3. Rebuild: `npm run build`
4. Verify dist/index.html has correct paths (no /glass_doctor/)

### Issue: Assets return 404

**Solution:**
1. Verify `base: '/'` in vite.config.ts
2. Check built files in dist/index.html
3. Should see `/assets/...` not `/glass_doctor/assets/...`
4. Rebuild if necessary

---

## 📊 Base Path Comparison

### Repository URL (Current):
```typescript
base: '/glass_doctor/'

// Results in URLs like:
https://joeljoseph0.github.io/glass_doctor/
https://joeljoseph0.github.io/glass_doctor/assets/index.js
```

### Custom Domain (Future):
```typescript
base: '/'

// Results in URLs like:
https://theglassdoctor.ae/
https://theglassdoctor.ae/assets/index.js
```

---

## 🎯 Quick Switch Commands

When ready to switch to custom domain:

```bash
# 1. Update vite.config.ts (change base to '/')
# 2. Then run:

npm run build
git add vite.config.ts dist
git commit -m "Switch to custom domain theglassdoctor.ae"
git push

# 3. Wait for GitHub Actions to complete
# 4. Visit https://theglassdoctor.ae
```

---

## 📧 Email Setup with Custom Domain

After domain is active, configure email:

### Option 1: Google Workspace
- Add MX records for Gmail
- Cost: ~$6/user/month

### Option 2: Email Forwarding
- Use domain registrar's email forwarding
- Forward info@theglassdoctor.ae to personal email
- Usually free

### Option 3: ProtonMail/Zoho
- Free tiers available
- Add MX records as instructed

---

## ⏱️ Timeline

| Step | Duration |
|------|----------|
| DNS Record Setup | 5 minutes |
| DNS Propagation | 1-24 hours |
| GitHub Pages Config | 2 minutes |
| SSL Certificate | 15-30 minutes |
| Vite Config Update | 2 minutes |
| Build & Deploy | 5 minutes |
| **Total (min)** | **2-4 hours** |
| **Total (max)** | **1-2 days** |

---

## 🎉 Benefits of Custom Domain

✅ Professional appearance  
✅ Brand recognition  
✅ Easier to remember  
✅ Better for SEO  
✅ Email addresses (info@theglassdoctor.ae)  
✅ SSL/HTTPS (free with GitHub Pages)  
✅ No /glass_doctor/ in URL  

---

## 📞 Support Resources

- **GitHub Pages Docs:** https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site
- **Vite Static Deploy:** https://vitejs.dev/guide/static-deploy.html
- **DNS Checker:** https://dnschecker.org/
- **SSL Checker:** https://www.sslshopper.com/ssl-checker.html

---

**Current Status:** Using repository URL with `/glass_doctor/` base path  
**Ready for:** Custom domain switch when DNS is configured  
**Estimated Switch Time:** 2-4 hours (mostly waiting for DNS)  
