const inputField = document.querySelector('#validation-input');

inputField.addEventListener('blur', callBack);

function callBack() {
    if (inputField.value.length === parseInt(inputField.dataset.length)) {
        if (inputField.classList.contains('invalid')) inputField.classList.remove('invalid');
        inputField.classList.add('valid');
        return;
    }
    if (inputField.classList.contains('valid')) inputField.classList.remove('valid');
    inputField.classList.add('invalid');
}