# Running Nick's Cafe Order System Entirely on Android Phone

## Overview
You can run the ENTIRE order system on your Android phone using Termux. The phone acts as the server, and you access the order-taking and kitchen displays through the browser on the same phone (or other devices on the same WiFi).

---

## Prerequisites
- Android phone (Android 7.0+)
- 2GB+ free storage
- Stable internet (for initial setup)

---

## Step-by-Step Setup

### 1. Install Termux

**Download from F-Droid (Recommended):**
1. Go to https://f-droid.org
2. Search for "Termux"
3. Install Termux

**OR from Google Play:**
- Search "Termux" in Play Store
- Note: F-Droid version is more up-to-date

### 2. Initial Termux Setup

Open Termux and run these commands one by one:

```bash
# Update package lists
pkg update

# Upgrade installed packages (press Y when asked)
pkg upgrade

# Install Node.js
pkg install nodejs

# Verify installation
node --version
npm --version

# Give Termux access to phone storage
termux-setup-storage
```

Press "Allow" when asked for storage permission.

### 3. Transfer System Files to Phone

**Method A: Download ZIP directly on phone**
1. Download `nicks-cafe-system.zip` to your phone
2. Extract it (use any file manager)
3. Move folder to easy location like `/sdcard/Download/nicks-cafe/`

**Method B: Download in Termux**
If you have the files on a server:
```bash
cd ~/storage/downloads
# Download your zip file
curl -O [URL_TO_YOUR_ZIP]
pkg install unzip
unzip nicks-cafe-system.zip
cd nicks-cafe-system
```

### 4. Navigate to Project Folder

```bash
# If you extracted to Downloads
cd ~/storage/downloads/nicks-cafe-system

# OR create in Termux home
cd ~
mkdir nicks-cafe
cd nicks-cafe
# Copy files here
```

### 5. Install Dependencies

```bash
npm install
```

Wait for installation (may take 2-5 minutes)

### 6. Start the Server

```bash
npm start
```

You should see:
```
========================================
Nick's Cafe Order System Server
========================================
Server running on http://localhost:3000
...
```

**Server is now running!** ✅

### 7. Access the System

Keep Termux running in the background.

Open Chrome browser on your phone:

**Order Taking:**
```
http://localhost:3000/order-taking.html
```

**Kitchen Display:**
```
http://localhost:3000/kitchen.html
```

### 8. Install as Apps

**For Order Taking:**
1. Open `http://localhost:3000/order-taking.html` in Chrome
2. Tap menu (⋮)
3. Select "Add to Home screen"
4. Name it "Order Taking"
5. Tap "Add"

**For Kitchen Display:**
1. Open `http://localhost:3000/kitchen.html` in Chrome
2. Tap menu (⋮)
3. Select "Add to Home screen"
4. Name it "Kitchen"
5. Tap "Add"

Now you have 2 app icons on your home screen!

---

## Using the System

### Starting the Server (Each Time)

1. Open Termux
2. Navigate to folder:
   ```bash
   cd ~/storage/downloads/nicks-cafe-system
   ```
3. Start server:
   ```bash
   npm start
   ```
4. Keep Termux running in background

### Keeping Server Running in Background

**Use Termux:Boot (Optional):**
1. Install from F-Droid: "Termux:Boot"
2. Create startup script:
   ```bash
   mkdir -p ~/.termux/boot
   nano ~/.termux/boot/start-server.sh
   ```
3. Add these lines:
   ```bash
   #!/data/data/com.termux/files/usr/bin/bash
   cd ~/storage/downloads/nicks-cafe-system
   npm start
   ```
4. Make executable:
   ```bash
   chmod +x ~/.termux/boot/start-server.sh
   ```
5. Server auto-starts when phone boots!

**Use Termux:Wake Lock:**
- Prevents Termux from sleeping
- Keeps server always running
- Install from F-Droid

---

## Accessing from Other Devices (Same WiFi)

### Find Your Phone's IP Address

**Method 1: In Termux**
```bash
ifconfig wlan0
```
Look for `inet addr:` (e.g., 192.168.1.150)

**Method 2: Phone Settings**
- Settings → WiFi → Connected network → Advanced
- Look for IP address

### Access from Other Devices

On another phone/tablet/computer (same WiFi):

**Order Taking:**
```
http://192.168.1.150:3000/order-taking.html
```

**Kitchen Display:**
```
http://192.168.1.150:3000/kitchen.html
```

Replace `192.168.1.150` with YOUR phone's IP.

---

## Tips & Tricks

### Keep Screen On While Taking Orders
- Settings → Display → Screen timeout → 30 minutes
- Or use app like "Stay Alive"

### Battery Optimization
Termux running server will use battery:
- Settings → Battery → Battery optimization
- Find Termux → Don't optimize

### Faster Access
Add both URLs to Chrome home screen for quick access

### Split Screen
Use Android split screen:
1. Open Order Taking app
2. Tap Recent Apps
3. Tap app icon at top
4. Select "Split screen"
5. Open Kitchen app in other half

Now see both at once!

---

## Stopping the Server

In Termux:
1. Press `Ctrl + C` (use Termux keyboard)
2. Or close Termux app (force stop)

---

## Troubleshooting

### "Command not found: npm"
```bash
pkg install nodejs
```

### "Cannot find module"
```bash
cd ~/storage/downloads/nicks-cafe-system
npm install
```

### "Port 3000 already in use"
Kill the process:
```bash
pkill -f node
npm start
```

### Server stops when screen locks
- Enable "Acquire wakelock" in Termux (left swipe → More → Acquire wakelock)
- Or install Termux:Wake Lock from F-Droid

### Can't access from other devices
1. Check both devices on same WiFi
2. Verify phone's IP address
3. Check phone firewall settings
4. Update API_URL in the .js files to use your IP instead of localhost

### App says "Cannot connect to server"
1. Make sure Termux is running
2. Check server is started (`npm start`)
3. Verify URL has correct IP/port

---

## Alternative: Easier Cloud Setup

If Termux seems complex, use cloud hosting instead:

### Render.com (Free)
1. Create account at render.com
2. Upload your files
3. Get URL: `https://nicks-cafe.onrender.com`
4. Access from phone browser
5. Add to home screen

Benefits:
- No Termux needed
- Access from anywhere
- Always online
- Automatic updates

---

## Performance Notes

### Phone as Server:
- ✅ Works great for 1-2 users
- ✅ Free
- ✅ Full control
- ❌ Uses battery
- ❌ Need to keep Termux running
- ❌ Only works when phone is on

### Cloud Hosting:
- ✅ Always available
- ✅ No battery drain
- ✅ Multiple users easily
- ❌ Needs internet
- ❌ May have costs after free tier

---

## Recommended Setup for Phone-Only Business

**Scenario 1: Single User (You take orders & make food)**
- Run server on phone via Termux
- Use Order Taking app
- Check Kitchen app when needed

**Scenario 2: Two Devices (Counter + Kitchen)**
- Phone 1: Run Termux server + Order Taking
- Phone 2: Kitchen Display (connected via WiFi)

**Scenario 3: Multiple Staff**
- Use cloud hosting (Render/Railway)
- All staff access via their phones
- More reliable for busy restaurant

---

## Quick Reference

**Start Server:**
```bash
cd ~/storage/downloads/nicks-cafe-system
npm start
```

**Access Locally:**
- Order: `http://localhost:3000/order-taking.html`
- Kitchen: `http://localhost:3000/kitchen.html`

**Access from Other Devices:**
- Order: `http://YOUR_IP:3000/order-taking.html`
- Kitchen: `http://YOUR_IP:3000/kitchen.html`

**Stop Server:**
- Press `Ctrl + C` in Termux

---

## Next Steps

1. ✅ Install Termux
2. ✅ Setup Node.js
3. ✅ Copy system files
4. ✅ Install dependencies
5. ✅ Start server
6. ✅ Add to home screen
7. ✅ Start taking orders!

Need help? Check the troubleshooting section or the main README.md

---

## Conclusion

Yes, you can run **everything on your phone**! It's perfect for:
- Small food stalls
- Home catering business
- Food trucks
- Testing before getting dedicated hardware

The system is lightweight and works great on modern Android phones. For production use with multiple staff, consider cloud hosting for better reliability.

Enjoy your voice-powered order system! 🎉
