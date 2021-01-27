const valueRef = document.querySelector('#value');
const incrementRef = document.querySelector('button[data-action="increment"]')
const decrementRef = document.querySelector('button[data-action="decrement"]')


const incrementF = () => {
    valueRef.textContent ++;
    return valueRef.textContent;
}

const decrementF = () => {
    valueRef.textContent -= 1;
    return valueRef.textContent;
}

incrementRef.addEventListener('click', event => {
    incrementF();
})

decrementRef.addEventListener('click', event => {
    decrementF();
})

