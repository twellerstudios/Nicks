# Fixing "Cannot GET" Error on Render/GitHub Deployment

## The Problem
You see "Cannot GET /" or blank page when visiting your deployed app.

## ✅ Solution: Fixed Files

I've updated the code to fix this. Download the new files:

### What Changed:
1. **server.js** - Now properly serves static files and handles routes
2. **order-taking.js** - API URL now works in production
3. **kitchen.js** - API URL now works in production

---

## 📦 Step-by-Step GitHub + Render Deployment

### Step 1: Update Your Files

Download the latest files and replace these in your GitHub repo:
- `server.js`
- `public/order-taking.js`
- `public/kitchen.js`

### Step 2: GitHub Structure

Make sure your GitHub repo has this structure:

```
your-repo/
├── server.js
├── package.json
├── public/
│   ├── order-taking.html
│   ├── order-taking.js
│   ├── kitchen.html
│   ├── kitchen.js
│   ├── manifest.json
│   └── service-worker.js
└── README.md
```

**IMPORTANT:** The HTML/JS files MUST be in a `public/` folder!

### Step 3: Render Settings

On Render, make sure you have:

**Build Command:**
```
npm install
```

**Start Command:**
```
npm start
```

**Environment Variables:**
- Add `PORT` = (leave empty, Render sets this automatically)

### Step 4: Deploy

1. Push to GitHub (if you made changes)
2. Render will auto-deploy
3. Wait 2-3 minutes

### Step 5: Access Your App

Once deployed, visit:
```
https://your-app-name.onrender.com/order-taking.html
```

**NOT** just `https://your-app-name.onrender.com/`

---

## 🔍 Common Issues & Fixes

### Issue 1: "Cannot GET /"
**Fix:** Add `/order-taking.html` to the URL
```
https://your-app.onrender.com/order-taking.html
```

The fixed server.js now redirects `/` to `/order-taking.html` automatically.

### Issue 2: Files Not Found (404)
**Check:**
- Files are in `public/` folder on GitHub
- Folder name is exactly `public` (lowercase)
- Files have `.html` and `.js` extensions

### Issue 3: API Errors
**Check:**
- Server is running (check Render logs)
- API URL is using `window.location.origin` (fixed in new files)

### Issue 4: Build Failed on Render
**Check package.json has:**
```json
{
  "scripts": {
    "start": "node server.js"
  },
  "dependencies": {
    "express": "^4.18.2",
    "cors": "^2.8.5"
  }
}
```

### Issue 5: Blank Page
**Fix:**
1. Open browser console (F12)
2. Check for errors
3. Make sure you're visiting `/order-taking.html` not just `/`

---

## 📋 Complete GitHub Upload Checklist

### 1. Create Repository
- Go to github.com
- Click "New repository"
- Name: `nicks-cafe`
- Public
- Create

### 2. Upload Files
Click "uploading an existing file", then upload:

```
✅ server.js
✅ package.json
✅ public/order-taking.html
✅ public/order-taking.js
✅ public/kitchen.html
✅ public/kitchen.js
✅ public/manifest.json
✅ public/service-worker.js
✅ README.md
```

### 3. Verify Structure
Your repo should show:
```
📁 public/
   📄 order-taking.html
   📄 order-taking.js
   📄 kitchen.html
   📄 kitchen.js
   📄 manifest.json
   📄 service-worker.js
📄 server.js
📄 package.json
📄 README.md
```

---

## 🚀 Deploy to Render

### 1. Connect GitHub
- Go to render.com
- Dashboard → New +
- Web Service
- Connect GitHub account
- Select your `nicks-cafe` repository

### 2. Configure Service
```
Name: nicks-cafe
Environment: Node
Branch: main
Build Command: npm install
Start Command: npm start
```

Click "Create Web Service"

### 3. Wait for Deployment
- Takes 2-3 minutes
- Watch the logs
- Look for "Server running on..."

### 4. Get Your URL
```
https://nicks-cafe.onrender.com
```

### 5. Access Apps
```
Order Taking: https://nicks-cafe.onrender.com/order-taking.html
Kitchen: https://nicks-cafe.onrender.com/kitchen.html
```

---

## 📱 Add to Phone as App

1. Open URL in Chrome (Android) or Safari (iPhone)
2. Menu → "Add to Home Screen"
3. Name it "Order Taking" or "Kitchen"
4. Done!

---

## 🐛 Still Having Issues?

### Check Render Logs
1. Go to your service on Render
2. Click "Logs" tab
3. Look for errors

### Test Locally First
```bash
npm install
npm start
```

Then open: `http://localhost:3000/order-taking.html`

If it works locally but not on Render:
- Check file structure matches exactly
- Verify all files uploaded to GitHub
- Check Render build/start commands

### Common Error Messages

**"Module not found"**
- Make sure `package.json` is uploaded
- Check dependencies are listed

**"Cannot find module 'express'"**
- Build command should be `npm install`

**"Port already in use"**
- Change PORT in Render environment variables

**"ENOENT: no such file or directory 'public'"**
- Create `public/` folder on GitHub
- Move HTML/JS files into it

---

## ✅ Quick Fix Summary

1. Download latest files (server.js fixed)
2. Make sure files are in `public/` folder
3. Upload to GitHub
4. Connect to Render
5. Build Command: `npm install`
6. Start Command: `npm start`
7. Visit: `your-url.com/order-taking.html`

---

## 🎯 Alternative: Use Railway

If Render still gives issues, try Railway:

```bash
npm install -g @railway/cli
railway login
railway init
railway up
```

Much simpler!

---

## Need More Help?

1. Check Render logs for specific errors
2. Test locally first
3. Verify GitHub structure
4. Make sure using latest fixed files

The "Cannot GET" error should now be fixed with the updated server.js! 🎉
