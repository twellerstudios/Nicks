# QUICK START GUIDE

## Get Running in 3 Steps

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Start Server
```bash
npm start
```

### Step 3: Open in Browser

**Order Taking (Front Counter):**
http://localhost:3000/order-taking.html

**Kitchen Display (Back):**
http://localhost:3000/kitchen.html

---

## How to Use

### Taking an Order

1. **Tap menu items** to add to order
   - Food items will ask for pepper level
   - Drinks are added instantly

2. **Use bagging** for bulk orders
   - Click "+ Add Bag" for multiple people
   - Switch bags before adding items

3. **Enter customer info**
   - Name and phone number

4. **Send to kitchen**
   - Click "SEND TO KITCHEN"
   - Order appears on kitchen display

### Kitchen Display

1. **See all pending orders**
   - Orders show with all items and bags
   - Pepper levels clearly marked

2. **Mark ready**
   - Click "✓ READY" when done
   - Order turns green

3. **Delete completed orders**
   - Click "🗑️ DELETE"

---

## Using on Multiple Devices

### Same WiFi Network

1. Find your computer's IP:
   - Windows: Open CMD, type `ipconfig`
   - Mac: System Preferences → Network
   - Linux: Type `ip addr` or `ifconfig`

2. Look for something like: `192.168.1.100`

3. On other devices, open:
   - `http://192.168.1.100:3000/order-taking.html`
   - `http://192.168.1.100:3000/kitchen.html`

**Note:** Update the API_URL in the .js files to use your IP instead of localhost.

---

## Voice Recognition Tips

- **Works best on:** Desktop Chrome
- **Mobile:** May not work reliably, use touch menu
- **Grant permissions:** Allow microphone when prompted
- **Clear speech:** Speak directly into device

### Voice Commands
- "Bread and channa" → Adds item
- "With cheese" → Adds cheese version
- "Chicken" → Adds chicken
- "For John Smith 555-1234" → Adds customer info

---

## Troubleshooting

**Port already in use?**
```bash
# Kill process on port 3000
# Mac/Linux:
lsof -ti:3000 | xargs kill -9

# Windows:
netstat -ano | findstr :3000
taskkill /PID [PID_NUMBER] /F
```

**Orders not showing in kitchen?**
- Check server is running
- Refresh kitchen page
- Check browser console for errors

**Can't connect from other device?**
- Make sure both devices are on same WiFi
- Check firewall settings
- Verify IP address is correct

---

## Need Help?

Check the full README.md for detailed documentation.
