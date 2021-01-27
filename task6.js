const inputRef = document.querySelector('#validation-input')
console.log(inputRef);


inputRef.addEventListener('onblur', e => {
    const inputLength = e.target.value.length;
    const inputAllowLength = e.target.dataset.length;

    if(inputLength !== inputAllowLength) {
        inputRef.classList.remove('valid')
        inputRef.classList.add('invalid');
    } else {
        inputRef.classList.remove('invalid')
        inputRef.classList.add('valid'); 
    }
       
        console.log(inputRef.classList)   
})