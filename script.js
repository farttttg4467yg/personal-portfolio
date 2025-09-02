function sendMessage() {
  const input = document.getElementById("user-input");
  const message = input.value.trim();
  if (message === "") return;

  // Add user message
  const chatBox = document.getElementById("chat-box");
  const userMessage = document.createElement("div");
  userMessage.classList.add("message", "user");
  userMessage.innerHTML = `<div class="bubble">${message}</div>`;
  chatBox.appendChild(userMessage);

  input.value = "";
  chatBox.scrollTop = chatBox.scrollHeight;

  // Bot reply (demo logic)
  setTimeout(() => {
    const botMessage = document.createElement("div");
    botMessage.classList.add("message", "bot");

    let reply;
    if (message.toLowerCase().includes("hello")) {
      reply = "Hi there! 👋";
    } else if (message.toLowerCase().includes("how are you")) {
      reply = "I’m just code, but I’m doing great 😄!";
    } else if (message.toLowerCase().includes("bye")) {
      reply = "Goodbye! 👋 Have a wonderful day!";
    } else {
      reply = `You said: "${message}" 🙂`;
    }

    botMessage.innerHTML = `<div class="bubble">${reply}</div>`;
    chatBox.appendChild(botMessage);
    chatBox.scrollTop = chatBox.scrollHeight;
  }, 600);
}

// Send on Enter key
document.getElementById("user-input").addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    sendMessage();
  }
});
