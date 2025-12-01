// server.js - Backend server for Nick's Cafe Order System
// Run with: node server.js

const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files from public directory
app.use(express.static(path.join(__dirname, 'public')));

// In-memory storage (in production, use a database)
let orders = [];
let orderCounter = 1;

// API Routes start here

// Get all orders
app.get('/api/orders', (req, res) => {
    res.json(orders);
});

// Get pending orders (not ready)
app.get('/api/orders/pending', (req, res) => {
    const pending = orders.filter(order => order.status === 'pending');
    res.json(pending);
});

// Get ready orders
app.get('/api/orders/ready', (req, res) => {
    const ready = orders.filter(order => order.status === 'ready');
    res.json(ready);
});

// Create new order
app.post('/api/orders', (req, res) => {
    const order = {
        id: `ORD-${Date.now()}-${orderCounter++}`,
        ...req.body,
        status: 'pending',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    };
    
    orders.push(order);
    console.log(`New order created: ${order.id}`);
    
    res.json(order);
});

// Update order status
app.patch('/api/orders/:id/status', (req, res) => {
    const { id } = req.params;
    const { status } = req.body;
    
    const order = orders.find(o => o.id === id);
    
    if (!order) {
        return res.status(404).json({ error: 'Order not found' });
    }
    
    order.status = status;
    order.updatedAt = new Date().toISOString();
    
    console.log(`Order ${id} status updated to: ${status}`);
    
    res.json(order);
});

// Delete order
app.delete('/api/orders/:id', (req, res) => {
    const { id } = req.params;
    const index = orders.findIndex(o => o.id === id);
    
    if (index === -1) {
        return res.status(404).json({ error: 'Order not found' });
    }
    
    orders.splice(index, 1);
    console.log(`Order ${id} deleted`);
    
    res.json({ message: 'Order deleted' });
});

// Clear all orders (for testing)
app.delete('/api/orders', (req, res) => {
    orders = [];
    orderCounter = 1;
    res.json({ message: 'All orders cleared' });
});

// Health check
app.get('/api/health', (req, res) => {
    res.json({ 
        status: 'ok', 
        orders: orders.length,
        timestamp: new Date().toISOString()
    });
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`
========================================
Nick's Cafe Order System Server
========================================
Server running on http://localhost:${PORT}

Frontend (Order Taking): http://localhost:${PORT}/order-taking.html
Backend (Kitchen): http://localhost:${PORT}/kitchen.html

API Endpoints:
- GET    /api/orders
- GET    /api/orders/pending
- GET    /api/orders/ready
- POST   /api/orders
- PATCH  /api/orders/:id/status
- DELETE /api/orders/:id

Press Ctrl+C to stop
========================================
    `);
});

// Graceful shutdown
process.on('SIGTERM', () => {
    console.log('SIGTERM received, closing server...');
    process.exit(0);
});
