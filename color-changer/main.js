function randomColor() {
    const colors = ['ivory', 'white', 'turquoise', 'yellow', 'pink', 'mediumpurple', 'burlywood', 'sienna', 'royalblue', 'palegreen', 'olive', 'darkseagreen', 'lightpink', 'lightyellow', 'khaki', 'cornsilk', 'dodgerblue'];
    let randomNumber = Math.floor(Math.random() * colors.length);
    return colors[randomNumber];
}

function randomHex() {
    let alphabet = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D'];
    let hexColor = '#' + alphabet[Math.floor(Math.random() * alphabet.length)] + alphabet[Math.floor(Math.random() * alphabet.length)] + alphabet[Math.floor(Math.random() * alphabet.length)] + alphabet[Math.floor(Math.random() * alphabet.length)] + alphabet[Math.floor(Math.random() * alphabet.length)] + alphabet[Math.floor(Math.random() * alphabet.length)];
    return hexColor;
}

let btn = document.getElementsByClassName('main__btn')[0];
let body = document.getElementsByTagName('body')[0];
let span = document.getElementsByTagName('span')[0];
let simple = document.getElementsByClassName('header__left')[0];
let hex = document.getElementsByClassName('header__right')[0];
let category = 'simple';

simple.addEventListener('click', function () {
    category = 'simple';
});

hex.addEventListener('click', function () {
    category = 'hex';
});

btn.addEventListener('click', function () {
        if (category == 'simple') {
            let currentColor = randomColor();
            span.textContent = currentColor;
            body.style.backgroundColor = currentColor;
        } else {
            let currentColor = randomHex();
            span.textContent = currentColor;
            body.style.backgroundColor = currentColor;
        }
});