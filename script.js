document.addEventListener('DOMContentLoaded', () => {
    const chatMessages = document.getElementById('chat-messages');
    const userInput = document.getElementById('user-input');
    const sendBtn = document.getElementById('send-btn');

    function addMessage(message, sender) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', sender === 'user' ? 'user-message' : 'bot-message');
        messageElement.textContent = message;
        chatMessages.appendChild(messageElement);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function getBotResponse(userMessage) {
        const lowerCaseMessage = userMessage.toLowerCase();

        if (lowerCaseMessage.includes('hello') || lowerCaseMessage.includes('hi')) {
            return 'Hello there! How are you feeling today?';
        } else if (lowerCaseMessage.includes('how are you')) {
            return 'I am just a bot, but I am here to help you. How can I assist you?';
        } else if (lowerCaseMessage.includes('help')) {
            return 'I can listen to you. Try telling me about your day.';
        } else if (lowerCaseMessage.includes('sad') || lowerCaseMessage.includes('anxious') || lowerCaseMessage.includes('stressed')) {
            return "I'm sorry to hear that. Sometimes talking about it helps. Would you like to share what's on your mind?";
        } else {
            return "Thank you for sharing. Remember, it's okay to not be okay. If you need immediate help, please reach out to a professional.";
        }
    }

    function handleSendMessage() {
        const messageText = userInput.value.trim();
        if (messageText === '') return;

        addMessage(messageText, 'user');
        userInput.value = '';

        setTimeout(() => {
            const botResponse = getBotResponse(messageText);
            addMessage(botResponse, 'bot');
        }, 1000); // Simulate bot thinking
    }

    sendBtn.addEventListener('click', handleSendMessage);
    userInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            handleSendMessage();
        }
    });

    // Initial welcome message
    setTimeout(() => {
        addMessage("Welcome to Mind's Flow. I'm here to listen. How can I help you today?", 'bot');
    }, 500);
});
