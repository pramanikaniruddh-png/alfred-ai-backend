// =====================================
// ALFRED AI ASSISTANT - CHAT SYSTEM
// =====================================

const BACKEND_URL = "https://alfred-ai-backend-xabl.vercel.app";

// Send message to Alfred
async function sendMessage(message) {
    try {
        const response = await fetch(`${BACKEND_URL}/api/chat`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                message: message
            })
        });

        if (!response.ok) {
            throw new Error("Server error: " + response.status);
        }

        const data = await response.json();

        return data.reply || data.response || data.text || "I couldn't understand that.";

    } catch (error) {
        console.error("ALFRED Error:", error);
        return "I'm having trouble connecting to my AI brain. Please check my backend connection.";
    }
}

// Display message in chat
function addMessage(text, sender) {
    const chatBox = document.getElementById("chat-box");

    if (!chatBox) {
        console.error("Chat box not found!");
        return;
    }

    const messageElement = document.createElement("div");

    messageElement.className = sender === "user"
        ? "user-message"
        : "alfred-message";

    messageElement.textContent = text;

    chatBox.appendChild(messageElement);

    chatBox.scrollTop = chatBox.scrollHeight;
}

// Handle sending messages
async function handleSendMessage() {

    const input = document.getElementById("user-input");

    if (!input) return;

    const message = input.value.trim();

    if (!message) return;

    addMessage(message, "user");

    input.value = "";

    addMessage("Thinking...", "alfred");

    const reply = await sendMessage(message);

    const chatBox = document.getElementById("chat-box");

    if (chatBox && chatBox.lastElementChild) {
        chatBox.lastElementChild.textContent = reply;
    }
}

// Initialize chat buttons
document.addEventListener("DOMContentLoaded", function () {

    const sendButton = document.getElementById("send-button");

    const input = document.getElementById("user-input");

    if (sendButton) {
        sendButton.addEventListener("click", handleSendMessage);
    }

    if (input) {
        input.addEventListener("keypress", function (event) {
            if (event.key === "Enter") {
                handleSendMessage();
            }
        });
    }

});