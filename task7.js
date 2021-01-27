const inputRef = document.querySelector('#font-size-control');
const spanRef = document.querySelector('#text');
inputRef.addEventListener('input', e => {
    const rangeValue = e.currentTarget.value + "px";
    spanRef.style.fontSize = rangeValue;
})