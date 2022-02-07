document.getElementById("submit").addEventListener("click", event => {
  const email = document.getElementById("email");
  const errorIcon = document.querySelector(".error-icon");
  const errorMessage = document.querySelector(".error-message");

  event.preventDefault();

  if (!email.value.match(email.pattern)) {
    errorIcon.style.visibility = "visible";
    errorMessage.style.visibility = "visible";
    email.style.borderColor = "red";
  } else {
    errorIcon.style.visibility = "hidden";
    errorMessage.style.visibility = "hidden";
    email.style.borderColor = "hsl(0, 17%, 80%)";
  }
});
