# Swasthya AI 🧘‍♀️🍲

**Swasthya AI** is a wellness web app that empowers users to lead healthier lives by combining personalized fitness tracking, diet recommendations, and seamless WhatsApp-based health logging.

## 🚀 Features

- ✅ **BMI Calculator** – Calculate your Body Mass Index and get instant health feedback.
- 🧠 **Indian Diet Recommender** – A custom KNN-based API that recommends healthy Indian recipes based on user goals and preferences.
- 💬 **WhatsApp Health Logger** – Log meals, workouts, and track your daily health routine through WhatsApp.
- 🌐 **User-Friendly Interface** – Easy-to-use UI for smooth wellness tracking.

---

## 🛠️ How to Run on Your Personal Computer

### 1. **Clone the Repository**
```bash
git clone https://github.com/your-username/swasthya-ai.git
cd swasthya-ai
```

### 2. **Install Backend Dependencies**
```bash
cd backend
npm install
```

### 3. **Start Backend Server**
```bash
npm run dev
```

> Ensure environment variables like API keys or DB URIs are set in a `.env` file in the `backend` folder.

### 4. **Install Frontend Dependencies**
```bash
cd ../frontend
npm install
```

### 5. **Start Frontend**
```bash
npm start
```

The app will run at `http://localhost:3000`

---

## 📲 WhatsApp Logger Setup (Optional)

> Requires Twilio or WhatsApp Business API and webhook setup.

- Configure webhook to send messages to your backend endpoint (e.g., `/api/log`).
- Use pre-defined commands like:
  - `Log Meal: 2 rotis, dal`
  - `Workout: 30 min yoga`

---

## 🤖 Tech Stack

- **Frontend:** Next.js, React.js, Tailwind CSS
- **Backend:** Node.js, Nest.js
- **ML API:** KNN (custom diet recommender)
- **WhatsApp Integration:** Twilio API / WhatsApp Business API
  


**Made with ❤️ to promote healthy living through technology**
