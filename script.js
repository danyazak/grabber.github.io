// Отримати елементи
const burger = document.getElementById('menu-icon');
const menu = document.getElementById('menu');
const overlay = document.getElementById('overlay');

// Відкрити або закрити меню при натисканні на бургер
menu-icon.addEventListener('click', () => {
    menu.classList.toggle('open');
    overlay.classList.toggle('active');
    document.body.classList.toggle('noscroll');  // Блокування скролу
});

// Закрити меню при натисканні на оверлей
overlay.addEventListener('click', () => {
    menu.classList.remove('open');
    overlay.classList.remove('active');
    document.body.classList.remove('noscroll');
});
