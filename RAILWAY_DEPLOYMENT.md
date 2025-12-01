# Deploy to Railway.app (No GitHub Required!)

Railway.app is the easiest way to deploy without needing GitHub.

---

## Method 1: Railway CLI (Easiest)

### Step 1: Install Railway CLI

**On your computer:**
```bash
npm install -g @railway/cli
```

**On Android (Termux):**
```bash
npm install -g @railway/cli
```

### Step 2: Login to Railway

```bash
railway login
```

This opens browser - sign up/login (free account)

### Step 3: Initialize Project

In your project folder (where server.js is):
```bash
railway init
```

Select "Create new project" and give it a name: `nicks-cafe`

### Step 4: Deploy

```bash
railway up
```

This uploads all your files and deploys!

### Step 5: Get Your URL

```bash
railway open
```

This shows your app URL, something like:
```
https://nicks-cafe-production.up.railway.app
```

### Step 6: Update Your Frontend

Edit `public/order-taking.js` and `public/kitchen.js`:

Change:
```javascript
const API_URL = 'http://localhost:3000/api';
```

To:
```javascript
const API_URL = 'https://nicks-cafe-production.up.railway.app/api';
```

### Step 7: Redeploy

```bash
railway up
```

Done! 🎉

---

## Method 2: Railway Web Interface

### Step 1: Create Account
Go to railway.app and sign up

### Step 2: New Project
Click "New Project" → "Empty Project"

### Step 3: Add Service
Click "New" → "Empty Service"

### Step 4: Settings
- Click the service
- Go to "Settings"
- Add these variables:
  - `PORT`: 3000
- Build Command: `npm install`
- Start Command: `npm start`

### Step 5: Deploy with CLI
You still need CLI for first upload:
```bash
railway login
railway link
railway up
```

---

## Access Your App

**Order Taking:**
```
https://your-app.railway.app/order-taking.html
```

**Kitchen Display:**
```
https://your-app.railway.app/kitchen.html
```

---

## Install as Mobile Apps

On your phone:
1. Open the URL in Chrome
2. Menu (⋮) → "Add to Home screen"
3. Now it's an app!

---

## Costs

Railway gives you:
- $5 free credit per month
- This app uses ~$3-4/month
- First month is FREE
- After that, ~$3/month

---

## Troubleshooting

**"railway: command not found"**
```bash
npm install -g @railway/cli
```

**Can't login**
- Make sure browser isn't blocking popup
- Try: `railway login --browserless`

**Deploy failed**
- Check you have package.json and server.js
- Verify: `npm install` and `npm start` work locally

---

## Alternative: Use Your Phone

If Railway seems complex, just use Termux on your phone:
1. No cloud needed
2. No costs
3. Works offline
4. See ANDROID_PHONE_SETUP.md

---

## Quick Reference

```bash
# Install
npm install -g @railway/cli

# Login
railway login

# Initialize
railway init

# Deploy
railway up

# Open in browser
railway open

# View logs
railway logs
```

That's it! Railway is the easiest cloud deployment without GitHub.
