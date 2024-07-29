
const displaybutton = document.querySelector('.display-button');
const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const resultpara = document.getElementById('output');
const alert = document.getElementById('alert');

displaybutton.addEventListener('click', () => {
    resultpara.innerHTML = '';
    alert.innerHTML = '';
    if (num1.value === '' || num2.value === '') {
        alert.innerHTML = "Please Enter both the number";
        alert.style.marginTop = '80px';
        alert.style.color = '2E236C';
    } else {
        let sum = parseFloat(num1.value) + parseFloat(num2.value);
        resultpara.innerHTML = `Total Sum is : ${sum}`;
    }
    resultpara.style.display = "flex";
    resultpara.style.alignItems = "center"

});