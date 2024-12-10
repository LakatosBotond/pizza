const burgermenuk= document.querySelector('.burgermenu');
const burgericonk = document.querySelector('.burgericon');

burgericonk.addEventListener('click', () =>{
    burgermenuk.classList.toggle('active')
    burgericonk.classList.toggle('active')
})