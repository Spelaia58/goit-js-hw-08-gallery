import galleryItems from "./gallery-items.js";

const createImagesCard = galleryItem => {
  const listItem = document.createElement("li");
  listItem.classList.add("gallery__item");

  const linkItem = document.createElement("a");
  linkItem.classList.add("gallery__link");
  linkItem.setAttribute('href', '');

  const imgItem = document.createElement("img");
  imgItem.classList.add("gallery__image");
  imgItem.setAttribute("src", "");
  imgItem.setAttribute("data-source", "");
  imgItem.setAttribute("alt", "");

  listItem.appendChild(linkItem);
  linkItem.appendChild(imgItem);
  const cardsImage = document.querySelector('.gallery');
  cardsImage.appendChild(listItem);

  return listItem;
};
 

const imagesCards = galleryItems.map(galleryItem => createImagesCard(galleryItem));
console.log(imagesCards);

const openModalImg = document.querySelector('.js-gallery');
openModalImg.addEventListener('click', () => {
  document.URL.classList.add('.lightbox')
});