const inputField = document.querySelector('#name-input');
const outputField = document.querySelector('#name-output');

inputField.addEventListener('input', callBack);

function callBack() {
    if (!inputField.value) {
        outputField.textContent = 'незнакомец';
        return;
    }
    outputField.textContent = inputField.value;
}
