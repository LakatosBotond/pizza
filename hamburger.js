const hamburgerMenu= document.querySelector('.hamburger-menu');
const hamburgerIcon=document.querySelector('.hamburgericon');


hamburgerIcon.addEventListener('click',() =>{
    hamburgerMenu.classList.toggle('active');
    hamburgerIcon.classList.toggle('active');
})