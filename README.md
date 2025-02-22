# MERN2-WhatApp

# 📱 WhatsApp Clone - Real-Time Messaging App

## 🚀 Introduction
This is a **WhatsApp-like web application** built using the **MERN stack** (MongoDB, Express.js, React, Node.js) with real-time messaging capabilities powered by **Socket.io**. Unlike traditional messaging apps, our version introduces **unique features** to enhance user experience and security.

## ✨ Unique Features
### 🔹 AI-Powered Chatbot
- Integrated AI assistant for quick responses, conversation summaries, and real-time translations.

### 🔹 Self-Destructing Messages & Media
- Users can send messages and media that **auto-delete** after a set time.
- **Screenshot detection** alerts the sender if a screenshot is taken.

### 🔹 Voice & Video Filters
- Apply **AI-powered filters** and voice modifications during calls for fun and privacy.

### 🔹 Offline Messaging (Store & Forward)
- Messages are **queued and sent automatically** when the recipient comes online.

### 🔹 Chat Lock & Hidden Chats
- Users can **lock chats** with a PIN or **hide chats** with a secret passcode.

### 🔹 Live Location Sharing with Auto-Check-In
- Users can share their live location, and the app automatically updates it.
- "**Safe Mode**" alerts trusted contacts if the user is inactive for a long time.

### 🔹 Customizable UI & Themes
- Users can **change themes, fonts, and icon styles**.
- Auto Night Mode with brightness control.

### 🔹 In-App Mini Apps & Games
- Play games inside the chat window.
- Quick access to **polls, reminders, and collaborative notes**.

### 🔹 Multi-Device Support (Without Phone Connection)
- Users can **log in on multiple devices** without keeping their primary phone online.

## 🛠️ Tech Stack
- **Frontend:** React.js, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Real-time Messaging:** Socket.io
- **Authentication:** JWT / Firebase Auth
- **Storage:** Cloudinary / Firebase Storage

## 🔥 Getting Started
### 1️⃣ Clone the Repository
```bash
git clone https://github.com/yourusername/whatsapp-clone.git
cd whatsapp-clone
```

### 2️⃣ Install Dependencies
#### Backend:
```bash
cd backend
npm install
```
#### Frontend:
```bash
cd frontend
npm install
```

### 3️⃣ Setup Environment Variables
Create a `.env` file in the backend directory and add:
```env
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
CLOUDINARY_API_KEY=your_cloudinary_key
SOCKET_PORT=5000
```

### 4️⃣ Run the Application
#### Start Backend:
```bash
cd backend
npm run dev
```
#### Start Frontend:
```bash
cd frontend
npm start
```

### 5️⃣ Open in Browser
- Navigate to `http://localhost:3000` to access the app.

## 📌 Future Enhancements
- **End-to-End Encryption for Messages**
- **AI-Based Smart Reply Suggestions**
- **Advanced Media Editing Inside Chat**

## 💡 Contributing
Feel free to contribute to this project! Fork the repo and submit a pull request. 🚀

## 📝 License
This project is **open-source** and available under the MIT License.

