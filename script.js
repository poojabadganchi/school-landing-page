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
  alert("Your message has been sent successfully.");
}
