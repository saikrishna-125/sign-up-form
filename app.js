const pwd = document.querySelector("#pwd");
const confirm_pwd = document.querySelector("#confirm-pwd");

function validatePasswords() {
  if (pwd.value !== confirm_pwd.value) {
    pwd.setCustomValidity("Passwords do not match");
    confirm_pwd.setCustomValidity("Passwords do not match");
  } else {
    pwd.setCustomValidity("");
    confirm_pwd.setCustomValidity("");
  }
}

pwd.addEventListener("input", validatePasswords);
confirm_pwd.addEventListener("input", validatePasswords);
