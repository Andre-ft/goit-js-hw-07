const inputField = document.querySelector('#name-input');
const outputField = document.querySelector('#name-output');

inputField.addEventListener('input', (event) => {
    outputField.textContent = event.currentTarget.value.trim() || 'незнакомец';
});
