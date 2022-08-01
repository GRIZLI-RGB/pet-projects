const users = [
    {
        id: 1,
        img: 'https://донэллиот.рф/wp-content/uploads/2021/02/86.2.jpg',
        name: 'Валерия Бауэрн',
        special: 'Веб-разработчик',
        opinion: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti tempora neque eius nam ipsum, minima ratione labore architecto unde officia est adipisci, ducimus iste nihil accusamus repellendus eos a. Nulla!'
    },
    {
        id: 2,
        img: 'https://avatars.mds.yandex.net/get-zen_doc/3380298/pub_600030a45d0e9e228679212d_600030fb9bebf1340057bc9a/scale_1200',
        name: 'Варвара Федосеева',
        special: 'Project-менеджер',
        opinion: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores inventore unde numquam iusto quisquam debitis, ducimus in at repellat temporibus deserunt exercitationem nesciunt? Nesciunt eos hic sapiente deserunt nam facilis.'
    },
    {
        id: 3,
        img: 'https://avatars.mds.yandex.net/get-zen_doc/1925930/pub_60a7d66eb9ff4e00deb6747a_60a87de1d750f6113a18f770/scale_1200',
        name: 'Андрей Яловенко',
        special: 'Спортивный журналист',
        opinion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea nihil molestias quisquam atque, odio distinctio tenetur sapiente maxime consectetur dolores temporibus necessitatibus optio esse praesentium dolorem fugit ipsa. Libero, asperiores.'
    }
];

let img = document.getElementsByClassName('reviews__box-item-img')[0];
let title = document.getElementsByClassName('reviews__box-item-title')[0];
let special = document.getElementsByClassName('reviews__box-item-special')[0];
let opinion = document.getElementsByClassName('reviews__box-item-opinion')[0];
let prev = document.getElementsByClassName('reviews__box-navigation-right')[0]
let next = document.getElementsByClassName('reviews__box-navigation-left')[0]

let index = 0;

img.style.backgroundImage = 'url(' + users[0].img + ')';
title.textContent = users[0].name;
special.textContent = users[0].special;
opinion.textContent = users[0].opinion;

prev.addEventListener('click', function () {
    index--;
    if(index < 0) {
        index = 2;
    };
    img.style.backgroundImage = 'url(' + users[index].img + ')';
    title.textContent = users[index].name;
    special.textContent = users[index].special;
    opinion.textContent = users[index].opinion;
});

next.addEventListener('click', function () {
    index++;
    if(index >= users.length) {
        index = 0;
    };
    img.style.backgroundImage = 'url(' + users[index].img + ')';
    title.textContent = users[index].name;
    special.textContent = users[index].special;
    opinion.textContent = users[index].opinion;
});