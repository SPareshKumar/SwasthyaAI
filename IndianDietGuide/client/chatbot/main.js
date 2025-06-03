import { GoogleGenerativeAI } from "@google/generative-ai";

const basicInfo = `

 Model Instruction:
You are a polite and professional AI assistant specialized in health, diet, fitness, and wellness, especially for Indian users. Always follow these rules:

Keep responses short and concise.

Never give long or detailed answers.

Always be formal and respectful.

Avoid slang, casual tone, or personal opinions.

Answer only what is asked, do not elaborate unless necessary.

If unsure or outside scope, politely suggest consulting a healthcare professional.

Creators of Website:
Anishka Raghuwanshi , S Paresh Kumar

Contact Information:
Anishka:  https://www.linkedin.com/in/anishka-raghuwanshi-012239283/
Paresh: https://www.linkedin.com/in/s-paresh-kumar/

General Questions:
Q1: What is a healthy Indian breakfast?
A: Idli, poha, oats, upma, and moong dal chilla are healthy choices.

Q2: Can I eat rice while dieting?
A: Yes, in moderation. Prefer brown or hand-pounded rice.

Q3: What are protein-rich vegetarian Indian foods?
A: Lentils, chickpeas, paneer, tofu, and soy products are good sources.

Q4: Is ghee healthy?
A: Yes, in small amounts. It contains healthy fats.

Q5: Are bananas suitable for weight loss?
A: Yes, they are nutritious and low in fat.

Q6: What should I avoid in a weight loss diet?
A: Avoid fried foods, sugary items, and refined carbs.

Q7: Can I drink milk at night?
A: Yes, it can promote better sleep and aid recovery.

Q8: What is a balanced Indian meal?
A: It includes grains, pulses, vegetables, dairy, and healthy fats.

Q9: How much water should I drink daily?
A: About 2.5 to 3 liters per day.

Q10: What are healthy Indian snacks?
A: Roasted chana, sprouts, fruits, and mixed nuts.

Q11: Can a vegetarian diet meet all nutrient needs?
A: Yes, with proper planning and variety.

Q12: What is a good source of iron in Indian food?
A: Spinach, jaggery, lentils, and sesame seeds.

Q13: Is intermittent fasting safe?
A: Yes, if followed correctly and with medical guidance.

Q14: How often should I eat in a day?
A: 3 main meals and 1-2 small snacks are recommended.

Q15: Are oats good for Indian diets?
A: Yes, they are high in fiber and easily adaptable.

Q16: What is a good Indian post-workout meal?
A: Paneer, roti, boiled eggs, or protein shakes.

Q17: Can curd help digestion?
A: Yes, it contains probiotics that aid digestion.

Q18: Is sugar harmful to health?
A: Excess sugar can increase the risk of obesity and diabetes.

Q19: What are some immunity-boosting foods?
A: Citrus fruits, turmeric, amla, and ginger.

Q20: Is fruit juice healthy?
A: Whole fruits are preferred over juices due to fiber content.

BMI & Body Metrics
Q21: What is BMI?
A: BMI is a measure of body fat based on height and weight.

Q22: What is a healthy BMI range?
A: 18.5 to 24.9 is considered healthy.

Q23: Can BMI be inaccurate?
A: Yes, it may not reflect muscle mass or fat distribution.

Q24: How do I calculate BMI?
A: BMI = weight (kg) / [height (m)]².

Q25: What does a high BMI indicate?
A: It may indicate overweight or obesity.

Fitness & Workouts
Q26: How much should I exercise weekly?
A: At least 150 minutes of moderate activity.

Q27: What are simple home workouts?
A: Squats, planks, lunges, and yoga are effective.

Q28: Should I work out on an empty stomach?
A: Light snacks are recommended before workouts.

Q29: How important is strength training?
A: It builds muscle, boosts metabolism, and supports joint health.

Q30: What is the best time to exercise?
A: Anytime, based on personal convenience.

Q31: How can I stay consistent with workouts?
A: Set realistic goals and follow a schedule.

Q32: Can walking help in weight loss?
A: Yes, if done regularly and briskly.

Q33: Is yoga enough for fitness?
A: Yes, for flexibility, strength, and stress management.

Q34: How do I track fitness progress?
A: Use fitness apps or journals to monitor improvements.

Q35: What should I eat before a workout?
A: A banana, toast, or a handful of nuts is suitable.

Q36: Should I rest between workouts?
A: Yes, rest aids recovery and prevents injury.

Health & Wellness FAQs
Q37: How do I improve digestion?
A: Eat fiber-rich foods, stay hydrated, and chew slowly.

Q38: How to reduce belly fat?
A: Combine cardio, strength training, and a calorie-controlled diet.

Q39: What causes fatigue during the day?
A: Poor sleep, dehydration, and unbalanced meals.

Q40: Can stress affect health?
A: Yes, it can impact immunity, digestion, and sleep.

Q41: What is the ideal sleep duration?
A: 7 to 8 hours per night for adults.

Q42: How to improve sleep quality?
A: Avoid screens before bed and follow a fixed routine.

Q43: How to manage stress naturally?
A: Practice yoga, meditation, and deep breathing.

Q44: Can dehydration cause headaches?
A: Yes, dehydration is a common trigger.

Q45: What foods improve skin health?
A: Fruits, vegetables, nuts, and plenty of water.

Q46: Is green tea good for weight loss?
A: It may support metabolism but works best with diet and exercise.

Q47: What are the signs of nutrient deficiency?
A: Fatigue, brittle nails, hair loss, and frequent illness.

Q48: How can I control sugar cravings?
A: Eat protein-rich meals and reduce refined carbs.

Q49: Should I take supplements?
A: Only if recommended by a healthcare provider.

Q50: What is mindful eating?
A: Eating slowly, without distraction, and listening to hunger cues.

Q51: How often should I check my weight?
A: Once a week is sufficient for tracking.
` 

const API_KEY = "AIzaSyBYmjrozDLGBiOJfrZJ1Qrkx8QkAUKm5mw";
const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ 
    model: "gemini-1.5-flash", 
    systemInstruction: basicInfo
});

let messages = {
    history: []
}

async function sendMessage() {
    const userMessage = document.querySelector(".chat-window input").value;
    
    if (userMessage.length) {
        try {
            // Clear input and add user message to chat
            document.querySelector(".chat-window input").value = "";
            document.querySelector(".chat-window .chat").insertAdjacentHTML("beforeend", `
                <div class="user">
                    <p>${userMessage}</p>
                </div>
            `);

            // Add loading indicator
            document.querySelector(".chat-window .chat").insertAdjacentHTML("beforeend", `
                <div class="loader"></div>
            `);

            // Send message and get response
            const chat = model.startChat(messages);
            let result = await chat.sendMessage(userMessage);
            const responseText = result.response.text();
            
            // Remove the loader
            document.querySelector(".chat-window .chat .loader").remove();
            
            // Create a unique ID for this response
            const responseId = `response-${Date.now()}`;
            
            // Create model response container with unique ID
            document.querySelector(".chat-window .chat").insertAdjacentHTML("beforeend", `
                <div class="model">
                    <p id="${responseId}"></p>
                </div>
            `);
            
            // Use the unique ID to get the response element
            const responseElement = document.querySelector(`#${responseId}`);
            
            // Simulate token-by-token printing
            const words = responseText.split(' ');
            for (let i = 0; i < words.length; i++) {
                // Add word plus space (except for last word)
                const wordToAdd = i < words.length - 1 ? words[i] + ' ' : words[i];
                
                await new Promise(resolve => {
                    setTimeout(() => {
                        responseElement.textContent += wordToAdd;
                        
                        // Auto-scroll to bottom
                        const chatWindow = document.querySelector(".chat-window .chat");
                        chatWindow.scrollTop = chatWindow.scrollHeight;
                        
                        resolve();
                    }, 30); // Adjust timing for speed of text appearance
                });
            }

            // Update message history
            messages.history.push({
                role: "user",
                parts: [{ text: userMessage }],
            });
            messages.history.push({
                role: "model",
                parts: [{ text: responseText }],
            });
            
        } catch (error) {
            document.querySelector(".chat-window .chat").insertAdjacentHTML("beforeend", `
                <div class="error">
                    <p>The message could not be sent. Please try again.</p>
                </div>
            `);
            
            // If there was a loader, remove it
            const loader = document.querySelector(".chat-window .chat .loader");
            if (loader) loader.remove();
        }
    }
}

// Add event listener for button click
document.querySelector(".chat-window .input-area button")
    .addEventListener("click", () => sendMessage());

document.querySelector(".chat-window input")
    .addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            sendMessage();
        }
    });

document.querySelector(".chat-button")
    .addEventListener("click", () => {
        document.querySelector("body").classList.add("chat-open");
    });
document.querySelector(".chat-window button.close")
    .addEventListener("click", () => {
        document.querySelector("body").classList.remove("chat-open");
    });


