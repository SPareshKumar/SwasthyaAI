# Swasthya AI 🧘‍♀️🍲

**Swasthya AI** is a wellness web app that empowers users to lead healthier lives by combining personalized fitness tracking, diet recommendations, and seamless WhatsApp-based health logging.

## 🚀 Features

🧠 Indian Diet Recommender
A personalized KNN-based recommendation system that suggests healthy Indian meals.
It considers your age, gender, goals (like weight loss or muscle gain), allergies, and dietary preferences.
Recipes are nutritious, culturally relevant, and aligned with your health journey.
Plus, get 24/7 support from a custom-trained AI chatbot that answers your health and diet-related questions in real-time.

💬 WhatsApp Health Logger
Track your meals, workouts, water intake, and daily habits directly through WhatsApp.
No need to download a separate app—just chat to log and receive updates or summaries.
Perfect for those who want a lightweight, accessible way to stay accountable and consistent.

✅ BMI Calculator
Easily calculate your Body Mass Index (BMI) using your height and weight inputs.
Instantly get categorized health feedback—whether you're underweight, healthy, overweight, or obese.
This helps you understand your body composition and set realistic fitness goals.

🌐 User-Friendly Interface
A modern, responsive UI built for a seamless wellness tracking experience.
Whether on desktop or mobile, users can easily navigate features, view reports, and update entries.
Designed with simplicity and clarity in mind, even first-time users feel instantly comfortable.

---

## 🛠️ How to Run on Your Personal Computer

### 1. **Clone the Repository**
```bash
git clone https://github.com/SPareshKumar/swasthya-ai.git
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

## 📲 WhatsApp Logger Setup

> Requires Twilio or WhatsApp Business API and webhook setup.


💬 Example Prompts & Interactions
🥗 1. Meal Logging
User:

"Log meal: 2 chapatis, paneer curry, cucumber salad"

Bot (via AI):

“✅ Meal logged! Looks like a good mix of protein and fiber. Keep it up! Tip: Try to limit paneer intake to 2–3 times a week for balanced fat levels.”

Logged in: Google Sheets or Notion under "Meals"

🍵 2. Ask for a Healthy Recipe
User:

"Give me a healthy breakfast recipe"

Bot:

“Try this: Oats Upma 🥣 — made with oats, veggies, and spices. Low in fat and high in fiber. Want more? Reply 'Next'.”

🧠 3. Ask a Health/Fitness Question
User:

"Is skipping dinner good for weight loss?"

Bot (via AI):

“Skipping meals can lead to overeating later. Instead, try a light dinner like soup or salad. Balanced intake helps more with weight loss.”

📊 4. Check Weekly Summary
User:

"Show my weekly progress"

Bot:

“Here’s your summary:
🥗 12 meals logged
🧘 7 workout sessions
__ calories burned & __ calories consumed
Great consistency! 🌟”

---

## 🤖 Tech Stack

- **Frontend:** Next.js, React.js, Tailwind CSS
- **Backend:** Node.js, Nest.js, FastAPI, Docker, TypeScript
- **ML API:** KNN (custom diet recommender)
- **Model Training:** Google Colab
- **Workflow Automation:** n8n
- **WhatsApp Integration:** Twilio API / WhatsApp Business API
- **Google Gemini Integration:** Google Gemini API
- **Google Sheets Integration:** Google Sheets API
- **API Testing:** Postman
  
  


**Made with ❤️ to promote healthy living through technology**
