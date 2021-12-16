const hamburger = document.querySelector('.hamburger'),
        menu = document.querySelector('.menu'),
        menuElem = document.querySelector('.menu__close');

hamburger.addEventListener('click',()=>{
menu.classList.add('active');
});     

menuElem.addEventListener('click',()=>{
    menu.classList.remove('active');
});     