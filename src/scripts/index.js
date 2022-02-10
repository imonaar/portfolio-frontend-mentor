const headNav = document.querySelector('.js-head-nav')
const baseURl = "http://localhost:8080/contact/";

headNav.addEventListener('click', (e)=>{
  console.log(e.target.baseURI)
})