const burger = document.querySelector('.icon-menu');
const menuBody = document.querySelector('.header__menu');

burger.addEventListener('click', () => {
    document.documentElement.classList.toggle('open-menu'); // гамбургер + меню
    document.body.classList.toggle('menu-open');            // блокуємо скрол
});