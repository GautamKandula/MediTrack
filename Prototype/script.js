const logregBox = document.querySelector('.logreg-box');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');

const button = document.getElementById('btn');

registerLink.addEventListener('click', () => {
    logregBox.classList.add('active');
});

loginLink.addEventListener('click', () => {
    logregBox.classList.remove('active');
});

function getFormData() {
    const form = document.getElementById('login-entry');
    const emailValue = document.getElementById('email').value;
    console.log('Email: ', emailValue);

    if (emailValue == "drdoe@gmail.com") {
        console.log("change tabs");
    }
}