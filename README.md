# Nick's Cafe Order System

A complete voice-enabled order management system with multi-device support, bagging functionality, and real-time syncing.

## Features

### Order Taking Interface
- 🎤 Voice recognition for hands-free ordering
- 👆 Touch POS menu with food and drinks
- 🌶️ Pepper level selection (None, Slight, Medium, Heavy)
- 👜 Bagging system for grouping items for different people
- 📱 Mobile-friendly responsive design
- 💾 Automatic contact saving (vCard)

### Kitchen Display Interface  
- 📺 Real-time order display
- ⏳ Pending/Ready status management
- 🔄 Auto-refresh every 5 seconds
- 👜 Shows bagging groups clearly
- 📊 Order statistics dashboard
- 🗑️ Order management (delete, change status)

### Menu
**Food Items:**
- Bread and Channa - $6.00
- Bread + Channa + Cheese - $7.00
- Bread and Chow Mein - $6.00
- Chow Mein + Cheese - $7.00
- Chicken - $11.00
- Chicken + Cheese - $12.00

**Drinks:**
- Soft Drinks (Coca-Cola, Sprite, Fanta, Solo, Peardrax, Ting, Malta) - $3.00-$4.00
- Local Drinks (Sorrel, Mauby, Seamoss, Peanut Punch) - $4.00-$5.00
- Juices (Apple J, Orange, Pineapple, Passion Fruit) - $3.50-$4.50
- Bottled Water - $2.00

## Setup Instructions

### Prerequisites
- Node.js (version 14 or higher)
- Modern web browser (Chrome recommended for voice recognition)

### Installation

1. **Install Dependencies**
```bash
cd /path/to/nicks-cafe-order-system
npm install
```

2. **Start the Server**
```bash
npm start
```

The server will start on `http://localhost:3000`

### Access the System

**Order Taking Device:**
Open in browser: `http://localhost:3000/order-taking.html`

**Kitchen Display:**
Open in browser: `http://localhost:3000/kitchen.html`

## Usage Guide

### Taking Orders

1. **Add Items:**
   - Tap food items → Select pepper level
   - Tap drinks → Added instantly
   - Use voice: "Bread and channa with cheese"

2. **Bagging (for bulk orders):**
   - Click "+ Add Bag" to create new bags
   - Select bag before adding items
   - Each bag groups items for different people
   - Example: Bag 1 for John, Bag 2 for Sarah

3. **Customer Info:**
   - Enter name and phone manually
   - Or use voice: "For John Smith 555-123-4567"

4. **Send Order:**
   - Click "SEND TO KITCHEN"
   - Order appears on kitchen display instantly

### Managing Orders (Kitchen Display)

1. **View Orders:**
   - Pending orders shown first
   - Each order shows all bags
   - Pepper levels displayed clearly

2. **Mark Ready:**
   - Click "✓ READY" when order is complete
   - Order changes to green with checkmark
   - Can revert back to pending if needed

3. **Delete Orders:**
   - Click "🗑️ DELETE" to remove completed orders
   - Confirmation required

4. **Stats Dashboard:**
   - Pending Orders count
   - Ready Orders count  
   - Total Orders today

## Multi-Device Setup

### Same Network (LAN)
1. Find your computer's IP address:
   - Windows: `ipconfig` (look for IPv4 Address)
   - Mac/Linux: `ifconfig` or `ip addr`

2. Update API_URL in both JavaScript files:
   - `public/order-taking.js`
   - `public/kitchen.js`
   - Change `localhost` to your IP: `http://192.168.1.100:3000/api`

3. Access from other devices:
   - Order Taking: `http://192.168.1.100:3000/order-taking.html`
   - Kitchen: `http://192.168.1.100:3000/kitchen.html`

### Cloud Deployment (for remote access)
Deploy to services like:
- Heroku
- DigitalOcean
- AWS
- Render

Update API_URL to your deployed domain.

## File Structure

```
nicks-cafe-order-system/
├── server.js              # Backend API server
├── package.json           # Dependencies
└── public/
    ├── order-taking.html  # Order entry interface
    ├── order-taking.js    # Order taking logic
    ├── kitchen.html       # Kitchen display
    └── kitchen.js         # Kitchen logic
```

## API Endpoints

- `GET /api/orders` - Get all orders
- `GET /api/orders/pending` - Get pending orders only
- `GET /api/orders/ready` - Get ready orders only
- `POST /api/orders` - Create new order
- `PATCH /api/orders/:id/status` - Update order status
- `DELETE /api/orders/:id` - Delete order

## Customization

### Adding Menu Items

Edit the `MENU` and `DRINKS` arrays in `public/order-taking.js`:

```javascript
const MENU = [
    { 
        id: 7, 
        name: "New Item", 
        price: 8.00, 
        hasPepper: true,
        keywords: ["new item", "item"]
    }
];
```

### Changing Prices

Update the `price` field for any item in the menu arrays.

### Modifying Pepper Levels

Edit the `PEPPER_LEVELS` array in `public/order-taking.js`.

## Troubleshooting

**Voice recognition not working:**
- Use Chrome browser (best support)
- Allow microphone permissions
- On mobile, voice may not work - use touch menu

**Orders not syncing:**
- Check if server is running (`npm start`)
- Verify API_URL is correct
- Check browser console for errors

**Kitchen display not updating:**
- Auto-refreshes every 5 seconds
- Click refresh button manually
- Check network connection

## Development

**Auto-restart on changes:**
```bash
npm run dev
```

**Clear all orders:**
```bash
curl -X DELETE http://localhost:3000/api/orders
```

## Production Deployment

For production use:
1. Use a real database (MongoDB, PostgreSQL) instead of in-memory storage
2. Add user authentication
3. Enable HTTPS
4. Set up proper error logging
5. Add data backup system

## Support

For issues or questions, contact: [Your contact info]

## License

MIT License - Feel free to modify for your business needs.
