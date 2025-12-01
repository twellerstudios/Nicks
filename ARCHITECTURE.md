# Nick's Cafe Order System - Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                    NICK'S CAFE ORDER SYSTEM                      │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────┐          ┌──────────────────┐          ┌─────────────────────┐
│                     │          │                  │          │                     │
│  ORDER TAKING       │◄────────►│  NODE.JS SERVER  │◄────────►│  KITCHEN DISPLAY    │
│  (Front Counter)    │   HTTP   │  (Port 3000)     │   HTTP   │  (Kitchen Device)   │
│                     │          │                  │          │                     │
└─────────────────────┘          └──────────────────┘          └─────────────────────┘
         │                               │                               │
         │                               │                               │
         ▼                               ▼                               ▼

┌─────────────────────┐          ┌──────────────────┐          ┌─────────────────────┐
│ • Voice Input 🎤    │          │  API ENDPOINTS   │          │ • Real-time View    │
│ • Touch Menu 👆     │          │                  │          │ • Auto-refresh 🔄   │
│ • Pepper Selection  │          │ POST   /orders   │          │ • Status Update ✅  │
│ • Bagging System 👜 │          │ GET    /orders   │          │ • Delete Orders 🗑️  │
│ • Customer Info 👤  │          │ PATCH  /status   │          │ • Stats Dashboard 📊│
│ • Send to Kitchen   │          │ DELETE /orders   │          │ • Bag Groups 👜     │
└─────────────────────┘          └──────────────────┘          └─────────────────────┘


ORDER FLOW:
═══════════

1. TAKING ORDER                    2. SENDING TO KITCHEN              3. KITCHEN RECEIVES
   ┌──────────────┐                   ┌──────────────┐                   ┌──────────────┐
   │ Employee     │                   │              │                   │              │
   │ adds items   │──────────────────►│ Server saves │──────────────────►│ Kitchen sees │
   │ to bags      │   Click "Send"    │ order data   │   Auto-refresh    │ new order    │
   └──────────────┘                   └──────────────┘                   └──────────────┘
        │                                                                       │
        │ • Bread & Channa (Medium Pepper)                                     │
        │ • Sprite                                                              │
        │ • Customer: John Smith                                                │
        │ • Phone: 555-1234                                                     │
        └───────────────────────────────────────────────────────────────────────┘


BAGGING SYSTEM:
═══════════════

For bulk orders with multiple people:

Order for: Jane Smith (555-5678)
┌─────────────┐  ┌─────────────┐  ┌─────────────┐
│   BAG 1     │  │   BAG 2     │  │   BAG 3     │
│             │  │             │  │             │
│ • Channa    │  │ • Chicken   │  │ • Chow Mein │
│ • Sprite    │  │ • Fanta     │  │ • Cheese    │
│ • Water     │  │ • Malta     │  │ • Solo      │
└─────────────┘  └─────────────┘  └─────────────┘
  For: Mom         For: Dad         For: Kids


DATA STORAGE:
═════════════

Server stores orders in memory with structure:

{
  "id": "ORD-1234567890-1",
  "customerName": "John Smith",
  "customerPhone": "555-1234",
  "status": "pending",  // or "ready"
  "bags": {
    "1": [
      {
        "name": "Bread and Channa",
        "price": 6.00,
        "quantity": 2,
        "pepper": "medium",
        "type": "food"
      },
      {
        "name": "Sprite",
        "price": 3.00,
        "quantity": 1,
        "type": "drink"
      }
    ]
  },
  "total": 15.00,
  "createdAt": "2024-01-15T10:30:00.000Z"
}


NETWORK SETUP:
══════════════

OPTION 1: Same Computer
├─ Order Taking: http://localhost:3000/order-taking.html
└─ Kitchen: http://localhost:3000/kitchen.html

OPTION 2: Multiple Devices (Same WiFi)
├─ Server: Run on main computer (e.g., 192.168.1.100)
├─ Order Device: http://192.168.1.100:3000/order-taking.html
└─ Kitchen Device: http://192.168.1.100:3000/kitchen.html

OPTION 3: Cloud Deployment
├─ Deploy to Heroku/AWS/DigitalOcean
├─ Order Device: https://your-domain.com/order-taking.html
└─ Kitchen Device: https://your-domain.com/kitchen.html


TECHNOLOGY STACK:
═════════════════

Backend:
• Node.js + Express
• REST API
• In-memory storage (upgrade to DB for production)

Frontend:
• Vanilla HTML/CSS/JavaScript
• Web Speech API (voice recognition)
• Responsive design
• No frameworks needed

Features:
• Real-time updates (5-second polling)
• Touch-optimized UI
• Voice recognition
• Printer-friendly tickets
• Contact export (vCard)
```
