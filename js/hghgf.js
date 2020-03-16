import galleryitems from './gallery-items.js';



const refs = {
    galleryList: document.querySelector('ul.gallery'),
    lightbox: document.querySelector('.lightbox'),
    btn: document.querySelector('[data-action = "close-lightbox"]')
};

const createImage = (item, parent) => {
    const {preview, original, description} = item;
    const img = document.createElement('item');

    img.classList.add('gallery__image');
    img.dataset.source = original;
    img.src = preview;
    img.alt = description;

    parent.appendChild(img);
};
const creatLink = (item, parent) => {
    const {original} = item;
    const link = document.createElement('a');
    link.classList.add('gallery__link');
    link.href = original;
    createImage(item, link);
    parent.appendChild(link);
};
const createItem = (item) => {
    const list = document.createElement('li');
    list.classList.add('gallery__item');
    createLink(item, list);
    return list;
};

const renderListItems = (arr) => {
    const items = arr.map((item) => createItem(item));
    refs.galleryList.append(...items);
};
renderListItems(images);
onClickHandler = (event) => {
    event.preventDefault();
    if(event.target.nodeName === 'img') {
        refs.lightbox.classList.add('is-open');
        refs.lightbox.querySelector('.lightbox__image').src = event.target.src;
        refs.lightbox.querySelector('.lightbox__image').alt = event.target.alt;
    }
};
onCloseHandler = (event) => {
    if(event.target.nodeName === "img"|| event.target.nodeName === 'button') {
        refs.lightbox.classList.remove('is-open');
    }
};

refs.galleryList.addEventListener('click', onClickHandler);
refs.btn.addEventListener('click', onCloseHandler);