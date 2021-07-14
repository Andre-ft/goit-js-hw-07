const inputRangeBtn = document.querySelector('#font-size-control');
const textOutput = document.querySelector('#text');

inputRangeBtn.addEventListener('input', changeMessageSize);

function changeMessageSize() {
    textOutput.style.fontSize = inputRangeBtn.value + 'px';
}
