
const query = {
    messages: [{ role: "user", content: "Which 2-bedroom apartments are available?" }]
};

async function testChat() {
    console.log("Waiting for server...");
    // Wait a bit for server to start
    await new Promise(r => setTimeout(r, 5000));

    try {
        const res = await fetch("http://localhost:3000/api/chat", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(query)
        });

        if (!res.ok) {
            throw new Error(`Status: ${res.status} ${res.statusText}`);
        }

        const data = await res.json();
        console.log("Reply:", data.reply);
    } catch (e) {
        console.error("Test failed:", e);
        process.exit(1);
    }
}

testChat();
