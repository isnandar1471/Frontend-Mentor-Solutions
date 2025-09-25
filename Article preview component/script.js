const shareButton = document.querySelector(".share-button");

shareButton.addEventListener("click", function (event) {
  console.log(event);

  const shareButtonWrapper = document.querySelector(".share-button-wrapper");

  shareButtonWrapper.classList.toggle("dark");

  const sharePage = document.querySelector(".share-page");

  sharePage.classList.toggle("show");
  sharePage.classList.toggle("hide");

  const cardFooter = document.querySelector(".card-footer");

  cardFooter.classList.toggle("show");
  cardFooter.classList.toggle("hide");
});

(async function () {
  const shareButtonImg = document.querySelector(".share-button img");
  const resp = await fetch(shareButtonImg.dataset.src);
  const svgText = await resp.text();
  const span = document.createElement("span");
  span.innerHTML = svgText;
  span.firstElementChild.firstElementChild.setAttribute("fill", "currentColor");
  shareButtonImg.replaceWith(span.firstElementChild);
})();
