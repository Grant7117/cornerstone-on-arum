
import OpenAI from "openai";
import fs from "fs";
import path from "path";

// Manually parse .env.local since we are running standalone
const envContent = fs.readFileSync(".env.local", "utf8");
const match = envContent.match(/OPENAI_API_KEY=(.+)/);
const apiKey = match ? match[1].trim() : "";

console.log("Testing Key:", apiKey.slice(0, 10) + "...");

const client = new OpenAI({ apiKey });

async function validate() {
    try {
        const completion = await client.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [{ role: "user", content: "Ping" }],
        });
        console.log("Success:", completion.choices[0].message.content);
    } catch (e) {
        console.error("Validation Failed:", e.message);
        if (e.status) console.error("Status:", e.status);
    }
}

validate();
