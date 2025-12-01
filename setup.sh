#!/bin/bash

echo "========================================="
echo "Nick's Cafe Order System - Setup"
echo "========================================="
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed"
    echo "Please install Node.js from https://nodejs.org"
    exit 1
fi

echo "✅ Node.js found: $(node --version)"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ Failed to install dependencies"
    exit 1
fi

echo ""
echo "✅ Dependencies installed successfully"
echo ""
echo "========================================="
echo "Setup Complete!"
echo "========================================="
echo ""
echo "To start the server, run:"
echo "  npm start"
echo ""
echo "Then open in your browser:"
echo "  Order Taking: http://localhost:3000/order-taking.html"
echo "  Kitchen Display: http://localhost:3000/kitchen.html"
echo ""
echo "========================================="
