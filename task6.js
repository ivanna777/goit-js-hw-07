const inputRef = document.querySelector('#validation-input')
console.log(inputRef);


inputRef.addEventListener('change', e => {
    const inputLength = e.target.value.length;
    const inputAllowLength = Number(e.target.dataset.length);

    if(inputLength !== inputAllowLength) {
        inputRef.classList.add('invalid');
    } else {
        inputRef.classList.add('valid')  
    }  
})