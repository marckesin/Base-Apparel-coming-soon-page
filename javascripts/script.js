const checkEmail = input => {
  if (!input.email.value.match(input.email.pattern)) {
    input.errorIcon.style.visibility = "visible";
    input.errorMessage.style.visibility = "visible";
    input.email.style.borderColor = "red";
  } else {
    input.errorIcon.style.visibility = "hidden";
    input.errorMessage.style.visibility = "hidden";
    input.email.style.borderColor = "hsl(0, 17%, 80%)";
  }
};

document.getElementById("submit").addEventListener("click", event => {
  const input = {
    email: document.getElementById("email"),
    errorIcon: document.querySelector(".error-icon"),
    errorMessage: document.querySelector(".error-message"),
  };

  event.preventDefault();
  checkEmail(input);
});
