const subscribeForm = document.querySelector("#subscribe-form");
const subscribeMessage = document.querySelector("#subscribe-message");
const dismissButton = document.querySelector("#subscribe-message button");
const emailWrapper = document.querySelector("#email-wrapper");
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

subscribeForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = new FormData(event.target);
  const obj = Object.fromEntries(formData);

  if (!emailRegex.test(obj.email)) {
    emailWrapper.classList.add("error");
    return;
  }

  emailWrapper.classList.remove("error");

  subscribeForm.classList.add("display-none");
  subscribeMessage.classList.remove("display-none");
});

dismissButton.addEventListener("click", function (event) {
  event.preventDefault();

  subscribeForm.classList.remove("display-none");
  subscribeMessage.classList.add("display-none");
});
