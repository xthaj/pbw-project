//login page
const signInButton = document.querySelector("#signInButton");
const signUpButton = document.querySelector("#signUpButton");
const container = document.querySelector("#loginPageContainer");

signInButton.addEventListener("click", () => {
  container.classList.add("sign-in-mode");
})

signUpButton.addEventListener("click", () => {
  container.classList.remove("sign-in-mode");
})