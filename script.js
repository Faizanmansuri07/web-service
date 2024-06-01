const open = document.querySelector("#open");
const close = document.querySelector("#close");
const items = document.querySelector(".items");
const links = document.querySelectorAll(".links");

links.forEach((link)=>{
    link.addEventListener("click",()=>{
         items.style.display ="none";
         close.style.display ="none";
         open.style.display="block"
    })
})


function openNav(mode) {
   if(mode ==='open') {
        items.style.display ="block";
     
        open.style.display ="none";
        close.style.display ="block";
        items.style.height = "200px";
  } if(mode ==='close') {
    items.style.display ="none";
    items.style.height = "0px";
    open.style.display ="block";
        close.style.display ="none";  
  }
}
var typed = new Typed('#element', {
  strings: ['Development.', '&amp; Development Services.'],
  typeSpeed: 150,
});

