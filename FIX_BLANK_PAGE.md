# Fix Blank Page on GitHub Pages

## 🚨 Problem

The site deploys successfully but shows a blank page at:
https://joeljoseph0.github.io/glass_doctor/

## 🔍 Root Cause

Vite was configured without a `base` path. When deploying to GitHub Pages at a **repository URL** (not root domain), all asset paths were incorrect:

- ❌ Looking for: `/assets/index-xxx.js`
- ✅ Should be: `/glass_doctor/assets/index-xxx.js`

## ✅ Fix Applied

Updated `vite.config.ts` to include:

```typescript
base: '/glass_doctor/',
```

This tells Vite to prefix all asset URLs with `/glass_doctor/`.

---

## 🚀 Required Actions

### Step 1: Rebuild with New Config

```bash
cd d:\Freelance\vitrum-glass

npm run build
```

This will regenerate the `dist` folder with correct asset paths.

### Step 2: Preview Locally (Optional but Recommended)

```bash
npm run preview
```

Open the URL shown (usually http://localhost:4173/glass_doctor/)  
Verify the site loads correctly.

### Step 3: Commit and Push

```bash
git add vite.config.ts
git commit -m "Fix GitHub Pages blank page: add base path"
git push
```

GitHub Actions will automatically rebuild and redeploy.

---

## ✅ Expected Results

### After Build:

Check `dist/index.html` - all script/link URLs should have `/glass_doctor/` prefix:

```html
<!-- Before (broken): -->
<script type="module" src="/assets/index-abc123.js"></script>

<!-- After (fixed): -->
<script type="module" src="/glass_doctor/assets/index-abc123.js"></script>
```

### After Deployment:

Visit: https://joeljoseph0.github.io/glass_doctor/

✅ Website loads completely  
✅ No blank page  
✅ No 404 errors in browser console  
✅ All CSS and JavaScript loads correctly  

---

## 🌐 Custom Domain Configuration

When you switch to your custom domain `theglassdoctor.ae`:

### Option 1: Change Base Path (Recommended)

Update `vite.config.ts`:

```typescript
base: '/',  // Change from '/glass_doctor/' to '/'
```

Then rebuild and deploy.

### Option 2: Environment-Based Config (Advanced)

Use different base paths for different environments:

```typescript
export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? '/' : '/glass_doctor/',
  // ... rest of config
}))
```

Or use environment variables:

```typescript
base: process.env.VITE_BASE_PATH || '/glass_doctor/',
```

---

## 🔧 Verification Steps

### 1. Check Built Files

After running `npm run build`:

```bash
# On Windows CMD:
type dist\index.html | findstr "glass_doctor"

# Should show lines with /glass_doctor/ in URLs
```

### 2. Check Browser Console

Visit: https://joeljoseph0.github.io/glass_doctor/

Press `F12` to open DevTools → Console tab

**Before fix:**
```
GET https://joeljoseph0.github.io/assets/index-xxx.js net::ERR_ABORTED 404
```

**After fix:**
```
(No 404 errors - all assets load)
```

### 3. Check Network Tab

DevTools → Network tab → Refresh page

All files should show status `200 OK`:
- `/glass_doctor/` → 200
- `/glass_doctor/assets/index-xxx.js` → 200
- `/glass_doctor/assets/index-xxx.css` → 200

---

## 📋 Troubleshooting

### Issue: Still shows blank page after rebuild

**Solution:**
1. Clear browser cache: `Ctrl + F5` (hard refresh)
2. Check GitHub Actions completed successfully
3. Verify the new commit was pushed
4. Wait 2-3 minutes for GitHub Pages to update

### Issue: npm run preview shows 404

**Solution:**
The preview URL should include the base path:
- ❌ Wrong: `http://localhost:4173/`
- ✅ Right: `http://localhost:4173/glass_doctor/`

### Issue: CSS not loading after fix

**Solution:**
Make sure all image paths in CSS are relative, not absolute.
Check `index.css` for any hardcoded `/public/` paths.

---

## 🎯 Quick Summary

### What Changed:
```diff
// vite.config.ts
export default defineConfig({
+  base: '/glass_doctor/',
   plugins: [react(), tailwindcss()],
```

### Commands to Run:
```bash
npm run build
git add vite.config.ts
git commit -m "Fix GitHub Pages blank page: add base path"
git push
```

### Expected Result:
✅ https://joeljoseph0.github.io/glass_doctor/ shows your website

---

## ⏱️ Timeline

- **Build**: ~20 seconds
- **Push**: ~5 seconds
- **GitHub Actions**: ~1-2 minutes
- **GitHub Pages Update**: ~1-2 minutes
- **Total**: ~3-5 minutes

---

## 🎉 Success Checklist

After pushing:

- [ ] GitHub Actions workflow completes successfully
- [ ] Visit https://joeljoseph0.github.io/glass_doctor/
- [ ] Page loads (not blank)
- [ ] Navigation works
- [ ] All images load
- [ ] Animations work
- [ ] Contact form displays
- [ ] No console errors (F12 → Console)

---

## 📞 Next Steps

1. **Now:** Fix the blank page
   - Run: `npm run build`
   - Commit and push

2. **Later:** When setting up custom domain
   - Update GitHub Pages settings to use theglassdoctor.ae
   - Change `base: '/'` in vite.config.ts
   - Rebuild and deploy

---

## 🔗 Useful Links

- Current site: https://joeljoseph0.github.io/glass_doctor/
- Repository: https://github.com/JoelJoseph0/glass_doctor
- Vite docs: https://vitejs.dev/guide/static-deploy.html#github-pages
- GitHub Pages docs: https://docs.github.com/en/pages

---

**Status:** Fix applied ✅  
**Action required:** Run `npm run build`, commit, and push  
**Time to fix:** ~5 minutes  
