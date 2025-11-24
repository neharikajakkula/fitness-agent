# fitness-agent
# 💪 Fitness Agent (Deno + Google Gemini)

An interactive, terminal-based **AI fitness assistant** powered by
**Google Gemini 2.5 Flash**.\
Ask anything---workout plans, meal ideas, warmups, stretching,
macros---and get instant answers **right in your terminal**.

## ✨ Features

-   🎯 **Fully interactive chat** in your terminal\
-   ⚡ Powered by **Gemini 2.5 Flash**\
-   🍏 Personalized **workouts & nutrition assistance**\
-   🔒 Secure API key handling with `.env`\
-   🧩 Clean, minimal codebase\
-   🏃‍♂️ Runs on **Deno** (no Node.js required)

## 📸 Screenshots

(Add your screenshot here after pushing!)

    ![Fitness Agent](./screenshot.png)

## 📂 Project Structure

    fitness-agent/
    │── main.ts       # Interactive chat logic
    │── .env          # API key stored here
    │── README.md     # Project documentation

## 🚀 Getting Started

### 1️⃣ Install Deno

If you don't have Deno:

``` bash
curl -fsSL https://deno.land/install.sh | sh
```

### 2️⃣ Clone the Repo

``` bash
git clone https://github.com/YOUR_USERNAME/fitness-agent.git
cd fitness-agent
```

### 3️⃣ Add Your API Key

Create a file named `.env`:

    GEMINI_API_KEY=YOUR_API_KEY_HERE

Get your API key here:\
🔗 https://aistudio.google.com/apikey

### 4️⃣ Run the App

``` bash
deno run -A main.ts
```

You will see:

    💬 Gemini Fitness Assistant Ready!
    Type your message below. Type 'exit' to quit.

## 💬 Usage

You can ask the fitness agent questions like:

-   "Create a 4-week beginner workout routine."
-   "Give me a 2000-calorie muscle-gain meal plan."
-   "How do I improve bench press form?"
-   "Explain progressive overload."
-   "What's a good 10-minute warm-up?"

Type **exit** to leave the chat.

## 🛠 Tech Stack

-   **Deno**
-   **TypeScript**
-   **Google Gemini API**
-   **dotenv (Deno)**

## 📡 API Used

    https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent

## 📘 Roadmap

Planned enhancements:

-   🧠 Conversation memory\
-   📝 Logging chat history\
-   🥗 Macro calculator\
-   📦 Workout & meal plan generator modules\
-   🖥️ Web UI version (React / Next.js)\
-   🎤 Voice mode\
-   🖼️ Image input (exercise form review)

## 🤝 Contributing

Pull requests are welcome!\
For major changes, open an issue first to discuss what you'd like to
change.

## 📄 License

MIT License.

## ⭐ Support

If you like this project, consider giving it a **star** ⭐ on GitHub!
