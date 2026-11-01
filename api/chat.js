<!DOCTYPE html><html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="theme-color" content="#050914"><title>ALFRED AI Assistant</title>

<link rel="stylesheet" href="style.css">

</head><body><main class="app-container">

    <header class="top-bar">
        <div class="brand">
            <span class="brand-icon">A</span>
            <div>
                <h1>ALFRED</h1>
                <p>PERSONAL AI ASSISTANT</p>
            </div>
        </div>

        <div class="connection-status">
            <span class="status-dot"></span>
            <span id="status">INITIALISING</span>
        </div>
    </header>

    <section class="assistant-section">

        <div class="orb-container">
            <div class="orb-ring ring-one"></div>
            <div class="orb-ring ring-two"></div>
            <div class="orb">
                <span>A</span>
            </div>
        </div>

        <h2>Good day, Sir.</h2>

        <p id="assistant-message">
            ALFRED is preparing your assistant.
        </p>

        <div class="listening-indicator" id="listening-indicator">
            READY TO ASSIST
        </div>

    </section>

    <section class="conversation-section">

        <div class="section-heading">
            <h3>CONVERSATION</h3>
            <span>ALFRED AI</span>
        </div>

        <div id="chat-box" class="chat-box">
            <div class="message assistant-message">
                <strong>ALFRED</strong>
                <p>Welcome back, Sir. How may I assist you today?</p>
            </div>
        </div>

    </section>

    <section class="controls-section">

        <div class="input-container">
            <input
                type="text"
                id="user-input"
                placeholder="Type your message, Sir..."
                autocomplete="off"
            >

            <button id="send-button" type="button">
                SEND
            </button>
        </div>

        <div class="voice-controls">

            <button
                id="mic-button"
                class="mic-button"
                type="button"
            >
                🎙
                <span> TALK TO ALFRED </span>
            </button>

            <button
                id="stop-button"
                class="stop-button"
                type="button"
            >
                STOP
            </button>

        </div>

    </section>

    <footer>
        <p>ALFRED SYSTEMS © 2026</p>
        <p>YOUR PERSONAL INTELLIGENCE</p>
    </footer>

</main>

<script src="script.js"></script>

</body>
</html>