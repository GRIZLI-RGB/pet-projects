let items = document.getElementsByClassName('items')[0];

items.addEventListener('click', function (e) {
    let clickTarget = e.target.parentNode.lastElementChild;
    if (clickTarget.style.display == 'none') {
        clickTarget.style.display = 'block';
    } else {
        clickTarget.style.display = 'none';
    }
});