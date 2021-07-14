const inputField = document.querySelector('#validation-input');

inputField.addEventListener('blur', changeClasses);

function changeClasses() {
    if (inputField.value.length === parseInt(inputField.dataset.length)) {
        inputField.classList.remove('invalid');
        inputField.classList.add('valid');
        return;
    }
    inputField.classList.remove('valid');
    inputField.classList.add('invalid');
}