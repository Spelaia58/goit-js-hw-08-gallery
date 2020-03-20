import galleryItems from "./gallery-items.js";

const createImagesCard = galleryItem => {
  const listItem = document.createElement("li");
  listItem.classList.add("gallery__item");

  const linkItem = document.createElement("a");
  linkItem.classList.add("gallery__link");
  linkItem.setAttribute("href", "");

  const imgItem = document.createElement("img");
  imgItem.classList.add("gallery__image");
  imgItem.setAttribute("src", galleryItem.preview);
  imgItem.setAttribute("data-source", galleryItem.original);
  imgItem.setAttribute("alt", galleryItem.description);

  listItem.appendChild(linkItem);
  linkItem.appendChild(imgItem);
  const cardsImage = document.querySelector(".gallery");
  cardsImage.appendChild(listItem);

  return listItem;
};

const imagesCards = galleryItems.map(galleryItem =>
  createImagesCard(galleryItem)
);
console.log(imagesCards);

const refs = {
  galleryList: document.querySelector("ul.js-gallery"),
  lightbox: document.querySelector(".js-lightbox"),
  btn: document.querySelector('[data-action = "close-modal"]')
};

refs.galleryList.addEventListener("click", handleGalleryClick);
function handleGalleryClick(event) {
  event.preventDefault();
  const target = event.target;
  if (target.nodeName !== "IMG") return;
  setActiveLink(target);
}

function setActiveLink(nextActiveLink) {
  const currentActiveLink = refs.galleryList.querySelector("img.active");
  if (currentActiveLink) {
    currentActiveLink.classList.remove("active");
  }
  nextActiveLink.classList.add("active");
  console.log(setActiveLink);
}

const openModalImg = document.querySelector(".js-gallery");
openModalImg.addEventListener("click", () => {
  event.preventDefault();
  refs.lightbox.classList.add("is-open");

  refs.lightbox.querySelector(".lightbox__image").src =
    event.target.dataset.source;
});
const closeModalImg = document.querySelector(
  'button[data-action="close-lightbox"]'
);
closeModalImg.addEventListener("click", () => {
  refs.lightbox.classList.remove("is-open");
});
const closeOverlay = document.querySelector('div.lightbox__overlay');
closeOverlay.addEventListener('click', event => {
     if(event.target === event.currentTarget) {
      refs.lightbox.classList.remove("is-open");
     };
});
