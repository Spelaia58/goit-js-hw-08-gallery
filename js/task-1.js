import galleryItems from "./gallery-items.js";

const createImagesCard = galleryItem => {
  const listItem = document.createElement("li");
  listItem.classList.add("gallery__item");

  const linkItem = document.createElement("a");
  linkItem.classList.add("gallery__link");
  linkItem.setAttribute("href", galleryItem.original);

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

const refs = {
  galleryList: document.querySelector("ul.js-gallery"),
  lightbox: document.querySelector(".js-lightbox"),
  btn: document.querySelector('[data-action = "close-modal"]')
};

const imagesCards = galleryItems.map(galleryItem =>
  createImagesCard(galleryItem)
);
refs.galleryList.append(...imagesCards);

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
}

const openModalImg = document.querySelector(".js-gallery");
const closeModalImg = document.querySelector(
  'button[data-action="close-lightbox"]'
);
const closeOverlay = document.querySelector(".lightbox__content");

openModalImg.addEventListener("click", onOpenModal);
closeModalImg.addEventListener("click", onCloseModal);
closeOverlay.addEventListener("click", onOverlayClick);

function onOpenModal() {
  event.preventDefault();
  window.addEventListener("keydown", event => {
    if (event.code === "Escape") {
      onCloseModal();
    }
  });

  refs.lightbox.classList.add("is-open");

  refs.lightbox.querySelector(".lightbox__image").src =
    event.target.dataset.source;
}
function onCloseModal() {
  refs.lightbox.classList.remove("is-open");
}
function onOverlayClick() {
  if (event.target === event.currentTarget) {
    onCloseModal();
  }
}
