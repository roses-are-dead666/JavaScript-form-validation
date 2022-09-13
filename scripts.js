const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirm = document.getElementById("passwordConfirm");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs();
})

function checkInputs() {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const passwordConfirmValue = passwordConfirm.value.trim();

    if (usernameValue === "") {
        setErrorFor (username, "Username cannot be blank");
    } else {
        setSuccessFor (username);
    }

    if (emailValue === "") {
        setErrorFor (email, "Email cannot be blank");
    } else if (!checkForEmail(emailValue)) {
        setErrorFor (email, "Email is not valid");
    } else {
        setSuccessFor (email);
    }

    if (passwordValue === "") {
        setErrorFor (password, "Password cannot be blank");
    } else if (passwordValue.length < 8) {
        setErrorFor (password, "Your password must be at least 8 characters");
    } else if (passwordValue.search(/[a-z]/i) < 0) {
        setErrorFor (password, "Your password must contain at least one letter");
    } else if (passwordValue.search(/[0-9]/) < 0) {
        setErrorFor (password, "Your password must contain at least one digit");
    } else {
        setSuccessFor (password)
    }

    if (passwordConfirmValue === "") {
        setErrorFor (passwordConfirm, "Password cannot be blank");
    } else if (passwordValue !== passwordConfirmValue) {
        setErrorFor (passwordConfirm, "Passwords does not match");
    } else {
        setSuccessFor (passwordConfirm);
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");

    small.innerText = message;

    formControl.className = "formControl error";
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = "formControl success";
}

function checkForEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
