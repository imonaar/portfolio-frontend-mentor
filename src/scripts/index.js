const form = document.querySelector("#form");
const menu = document.querySelector("#menu");
const jsNav = document.querySelector(".js-nav");


menu.addEventListener('click', ()=>{
  menu.classList.toggle('open')
  jsNav.classList.toggle('open')
})

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
  });

  form.addEventListener(
    "blur",
    (e) => {
      const isValid = e.target.validity.valid;
      const message = e.target.validationMessage;
      const connectedValidationId = e.target.getAttribute("aria-describedby");

      const connectedValidation = connectedValidationId
        ? document.getElementById(connectedValidationId)
        : false;

      if (connectedValidation && message && !isValid) {
        connectedValidation.innerText = message;
      } else {
        connectedValidation.innerText = "";
      }
    },
    true
  );
}
