// import functions and grab DOM elements

// initialize state

// set event listeners to update state and DOM

const num1 = document.getElementById('input1');
const num2 = document.getElementById('input2');
const btn = document.getElementById('button-add');
const result = document.getElementById('result1');


btn.addEventListener('click', () => {
    result.textContent = add(Number(input1.value), Number(input2.value));
    //num1.value = '';
    //num2.value = '';
});
