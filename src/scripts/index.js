const form = document.querySelector("#form");
const toggle = document.querySelector("#toggle");
const menu = document.querySelector(".menu");
const nav = document.querySelector(".js-nav");


toggle.addEventListener('click', ()=>{
  toggle.classList.toggle('open')
  nav.classList.toggle('open')

  if( nav.classList.contains("open")){
    toggle.setAttribute('aria-expanded' , "true")
  } else{
    toggle.setAttribute("aria-expanded", "false");
  }
})

// https://www.a11ymatters.com/pattern/mobile-nav/

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
