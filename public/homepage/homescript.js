// Toggle the chatbot open/close
function toggleChat() {
    const chatbot = document.getElementById("chatbotContainer");
    if (chatbot.style.display === "flex") {
      chatbot.style.display = "none";
    } else {
      chatbot.style.display = "flex";
      document.getElementById("chatInput").focus();
    }
  }
  
  // Handle sending a message
  document.getElementById("chatInput").addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      const userInput = this.value.trim();
      if (userInput === "") return;
  
      // Display user message
      addMessage("You", userInput);
  
      // Clear input field
      this.value = "";
  
      // Simulated AI response (replace this with real API call if needed)
      setTimeout(() => {
        const response = getAIResponse(userInput);
        addMessage("AI", response);
      }, 500);
    }
  });
  
  // Add message to chat body
  function addMessage(sender, text) {
    const chatBody = document.getElementById("chatBody");
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("chat-message");
    messageDiv.innerHTML = `<strong>${sender}:</strong> ${text}`;
    chatBody.appendChild(messageDiv);
  
    // Scroll to bottom
    chatBody.scrollTop = chatBody.scrollHeight;
  }
  
  // Dummy AI response logic
  function getAIResponse(input) {
    input = input.toLowerCase();
  
    if (input.includes("admission")) {
      return "You can check the admission process in the 'Admissions' section in the footer.";
    } else if (input.includes("vr tour")) {
      return "Click on the 'VR Tour' link in the navigation bar to begin exploring the NIET campus!";
    } else if (input.includes("contact")) {
      return "You can reach out via the contact page available on the NIET website.";
    } else if (input.includes("courses") || input.includes("programs")) {
      return "NIET offers UG, PG, and Diploma programs. Please visit the 'Academic' section below.";
    } else {
      return "I'm here to assist you with NIET. Try asking about admissions, courses, or the VR tour!";
    }
  }
  