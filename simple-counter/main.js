let minus = document.getElementsByClassName('toolbar__minus')[0];
let reset = document.getElementsByClassName('toolbar__reset')[0];
let plus = document.getElementsByClassName('toolbar__plus')[0];
let number = document.getElementsByClassName('number')[0];

minus.addEventListener('click', function () {
    number.textContent = Number(number.textContent) - 1;
    if (Number(number.textContent) == 0) {
        number.style.color = '#000';
    } else if (Number(number.textContent) > 0) {
        number.style.color = 'green';
    } else {
        number.style.color = 'red';
    }
});

reset.addEventListener('click', function () {
    number.textContent = 0;
    if (Number(number.textContent) == 0) {
        number.style.color = '#000';
    } else if (Number(number.textContent) > 0) {
        number.style.color = 'green';
    } else {
        number.style.color = 'red';
    }
});

plus.addEventListener('click', function () {
    number.textContent = Number(number.textContent) + 1;
    if (Number(number.textContent) == 0) {
        number.style.color = '#000';
    } else if (Number(number.textContent) > 0) {
        number.style.color = 'green';
    } else {
        number.style.color = 'red';
    }
});