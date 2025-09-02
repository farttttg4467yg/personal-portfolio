const chatForm = document.getElementById("chat-form");
const chatBox = document.getElementById("chat-box");
const msgInput = document.getElementById("msg");

// Add message to chat
function addMessage(text, sender) {
  const div = document.createElement("div");
  div.classList.add("message", sender);
  div.innerText = text;
  chatBox.appendChild(div);
  chatBox.scrollTop = chatBox.scrollHeight;
}

// Predefined bot responses
function botResponse(userMsg) {
  userMsg = userMsg.toLowerCase();
  if (userMsg.includes("hello") || userMsg.includes("hi")) {
    return "Hello 👋! Nice to meet you.";
  } else if (userMsg.includes("help")) {
    return "Sure! Please tell me what you need help with.";
  } else if (userMsg.includes("bye")) {
    return "Goodbye 👋 Have a great day!";
  } else {
    return "I didn't quite understand 🤔. Can you rephrase?";
  }
}

// Handle form submit
chatForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const msg = msgInput.value.trim();
  if (!msg) return;

  // Add user message
  addMessage(msg, "user");
  msgInput.value = "";

  // Bot reply after a delay
  setTimeout(() => {
    const reply = botResponse(msg);
    addMessage(reply, "bot");
  }, 700);
});
