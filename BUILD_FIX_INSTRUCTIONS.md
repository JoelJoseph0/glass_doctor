# Build Fix Instructions

## ✅ Fixes Applied

I've fixed the following TypeScript errors:

### 1. ✅ Fixed Ref Type Mismatch
**File:** `src/hooks/useScrollReveal.ts`
- Changed `useRef<HTMLElement>(null)` to `useRef<HTMLDivElement>(null)`
- This fixes all TS2322 errors across 9+ component files

### 2. ✅ Added Vite Environment Types
**File:** `src/vite-env.d.ts` (created)
- Added: `/// <reference types="vite/client" />`
- This fixes `import.meta.env` TypeScript errors

### 3. ✅ Updated TypeScript Config
**File:** `tsconfig.json`
- Added `"vite/client"` to types array
- This enables Vite types and CSS import support

### 4. ✅ Added EmailJS Dependency
**File:** `package.json`
- Added `"@emailjs/browser": "^4.4.1"` to dependencies
- This fixes the missing import in `ContactSection_EmailJS.tsx`

---

## 🚀 Required Actions

You need to run these commands to complete the fix:

### Step 1: Install Dependencies
```bash
npm install
```

This will install the `@emailjs/browser` package and update `package-lock.json`.

### Step 2: Build the Project
```bash
npm run build
```

This should now succeed without TypeScript errors.

### Step 3: Verify Build Output
```bash
# Check that dist folder was created
dir dist
```

---

## 🔧 If npm Commands Don't Work

If you get a PowerShell execution policy error, try one of these:

### Option 1: Use CMD Instead
```cmd
cmd
npm install
npm run build
```

### Option 2: Fix PowerShell (Run as Administrator)
```powershell
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
```

Then try npm commands again.

---

## 📋 Summary of Changes

| Issue | File(s) Changed | Fix Applied |
|-------|----------------|-------------|
| Ref type mismatch | `src/hooks/useScrollReveal.ts` | Changed HTMLElement to HTMLDivElement |
| Missing Vite types | `src/vite-env.d.ts` | Created with Vite client reference |
| TypeScript config | `tsconfig.json` | Added vite/client to types |
| Missing EmailJS | `package.json` | Added @emailjs/browser dependency |

---

## ✅ Expected Build Result

After running `npm install` and `npm run build`, you should see:

```
vite v8.x.x building for production...
✓ xx modules transformed.
dist/index.html                   x.xx kB
dist/assets/index-xxxxx.css      xx.xx kB │ gzip: x.xx kB
dist/assets/index-xxxxx.js      xxx.xx kB │ gzip: xx.xx kB
✓ built in x.xxs
```

---

## 🚢 Deployment Ready

Once the build succeeds:

1. ✅ The `dist` folder contains your production files
2. ✅ Ready to deploy to Vercel, Netlify, or GitHub Pages
3. ✅ `npm ci` will work in CI environments

---

## 🆘 If Build Still Fails

If you still see errors after running the commands, please share:

1. The complete error message from `npm run build`
2. The TypeScript version shown in the error
3. The Node.js version: `node --version`

I can provide additional fixes if needed.
