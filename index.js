const menu = document.querySelector('.site-nav');
const closeBtn = document.querySelector('.site-nav__close-btn');
const menuBtn = document.querySelector('.site-header__menu-btn');

// Open menu
menuBtn.addEventListener('click', () => {
    menu.style.display = "flex";
})

// close menu
closeBtn.addEventListener('click', () => {
    menu.style.display = "none";
})

