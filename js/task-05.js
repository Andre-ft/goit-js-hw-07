const inputField = document.querySelector('#name-input');
const outputField = document.querySelector('#name-output');

inputField.addEventListener('input', () => {
    outputField.textContent = inputField.value.trim() || 'незнакомец';
});
