const inputRangeBtn = document.querySelector('#font-size-control');
const textOutput = document.querySelector('#text');

inputRangeBtn.addEventListener('input', callBack);

function callBack() {
    textOutput.style.fontSize = inputRangeBtn.value + 'px';
}
