// submit forms

const submitButtons = document.querySelectorAll('.form-submit-btn');

submitButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    button.style.opacity = '0.6';
  });
});

function loginPage() {
  const container = document.querySelector("#loginPageContainer");
  
  const signInButton = document.querySelector("#signInButton");
  const signUpButton = document.querySelector("#signUpButton");

  const signInButton2 = document.querySelector("#signInButton2");
  const signUpButton2 = document.querySelector("#signUpButton2");

  signInButton.addEventListener("click", () => {
    container.classList.add("sign-in-mode");
  });

  signUpButton.addEventListener("click", () => {
    container.classList.remove("sign-in-mode");
  });

  signInButton2.addEventListener("click", () => {
    container.classList.add("sign-in-mode2");
  });
  
  signUpButton2.addEventListener("click", () => {
    container.classList.remove("sign-in-mode2");
  });
}

document.getElementById("signUpForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    // Validation logic
    var passwordInput = document.forms["signUpForm"]["pswd"];
    var confirmPasswordInput = document.forms["signUpForm"]["pswd2"];
    var phoneInput = document.forms["signUpForm"]["phone"];

    if (passwordInput.value !== confirmPasswordInput.value) {
      alert("Passwords do not match.");
      confirmPasswordInput.focus();
      return false;
    }

    // Phone number format validation (digits only, optional plus sign)
    var phoneRegex = /^\+?\d{10,16}$/;
    if (!phoneRegex.test(phoneInput.value)) {
      alert("Please enter a valid phone number.");
      phoneInput.focus();
      return false;
    }

    // Validation passed, form submission will proceed
    this.submit();
  });

function validateSignInForm() {
  const email = document.querySelector('input[name="email"]').value.trim();
  const password = document.querySelector('input[name="pswd"]').value.trim();

//   const mailRegex = /\S+@\S+\.\S+/;
//   if (!mailRegex.test(email)) {
//     alert('Email incorrect');
//     return false;
//   }

// consider deleting -> user HAVE MADE the account?
//   if (password.length < 6) {
//     alert('Password must be at least 6 characters long.');
//     return false;
//   }

  return true;
}