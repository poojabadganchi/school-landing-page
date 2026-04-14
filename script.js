function openModal(id) {
  document.getElementById(id).style.display = "flex";
}

function closeModal(id) {
  document.getElementById(id).style.display = "none";
}

window.onclick = function (event) {
  const studentModal = document.getElementById("studentModal");
  const staffModal = document.getElementById("staffModal");

  if (event.target === studentModal) {
    studentModal.style.display = "none";
  }

  if (event.target === staffModal) {
    staffModal.style.display = "none";
  }
};

function studentLogin() {
  alert("Student login button clicked.");
}

function staffLogin() {
  alert("Staff login button clicked.");
}

function sendMessage() {
  const emailInput = document.getElementById("email");
  const emailError = document.getElementById("emailError");
  const emailValue = emailInput.value.trim();

  if (emailValue === "") {
    emailError.textContent = "Email is required.";
    return;
  }

  if (!emailValue.includes("@")) {
    emailError.textContent = "Please enter a valid email with @ symbol.";
    return;
  }

  emailError.textContent = "";
  alert("Your message has been sent successfully.");
}

const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(function (question) {
  question.addEventListener("click", function () {
    const answer = this.nextElementSibling;

    document.querySelectorAll(".faq-answer").forEach(function (item) {
      if (item !== answer) {
        item.style.display = "none";
      }
    });

    if (answer.style.display === "block") {
      answer.style.display = "none";
    } else {
      answer.style.display = "block";
    }
  });
});

function sendChat() {
  const chatInput = document.getElementById("chatInput");
  const chatText = chatInput.value.trim().toLowerCase();
  const chatBody = document.querySelector(".chatbot-body");

  if (chatText === "") {
    return;
  }

  const userMessage = document.createElement("div");
  userMessage.classList.add("chat-message", "user");
  userMessage.textContent = chatInput.value;
  chatBody.appendChild(userMessage);

  const botMessage = document.createElement("div");
  botMessage.classList.add("chat-message", "bot");

  if (chatText.includes("fee") || chatText.includes("fees")) {
    botMessage.textContent = "Our fees depend on the class. Please contact the school office for full fee details.";
  } else if (chatText.includes("admission")) {
    botMessage.textContent = "Admissions are open. You can contact the school office or use the inquiry form for details.";
  } else if (chatText.includes("transport")) {
    botMessage.textContent = "Yes, we provide transport facilities for selected routes.";
  } else if (chatText.includes("timing") || chatText.includes("hours")) {
    botMessage.textContent = "School office hours are Monday to Saturday, 8:00 AM to 4:00 PM.";
  } else if (chatText.includes("contact")) {
    botMessage.textContent = "You can contact us by phone, email, or by using the inquiry form on the website.";
  } else {
    botMessage.textContent = "Thank you for your question. Please contact the school office for more details.";
  }

  chatBody.appendChild(botMessage);
  chatInput.value = "";
  chatBody.scrollTop = chatBody.scrollHeight;
}
