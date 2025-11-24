import "https://deno.land/std@0.224.0/dotenv/load.ts";

const apiKey = Deno.env.get("GEMINI_API_KEY");
if (!apiKey) {
  throw new Error("GEMINI_API_KEY is not set");
}

const MODEL = "models/gemini-2.5-flash";

// function to send a message to gemini
async function sendMessage(message: string) {
  const body = {
    contents: [
      {
        role: "user",
        parts: [{ text: message }],
      },
    ],
  };

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/${MODEL}:generateContent?key=${apiKey}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    }
  );

  const json = await response.json();
  return (
    json.candidates?.[0]?.content?.parts?.[0]?.text ??
    JSON.stringify(json, null, 2)
  );
}

// interactive chat loop
console.log("💬 Gemini Fitness Assistant Ready!");
console.log("Type your message below. Type 'exit' to quit.\n");

while (true) {
  const message = prompt("You: ");
  if (!message) continue;
  if (message.toLowerCase().trim() === "exit") {
    console.log("👋 Goodbye!");
    break;
  }

  console.log("Gemini is thinking...\n");

  try {
    const reply = await sendMessage(message);
    console.log("Assistant:", reply, "\n");
  } catch (err) {
    console.error("Error:", err);
  }
}
