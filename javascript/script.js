// Ждем загрузки документа
document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header');
    const burgerBtn = document.querySelector('.burger-menu');
    const menuLinks = document.querySelectorAll('.header-2 a');

    // Открываем/закрываем меню при клике на бургер
    burgerBtn.addEventListener('click', () => {
        header.classList.toggle('open');
    });

    // Закрываем меню при клике на любую ссылку (чтобы страница плавно скроллилась к блоку)
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            header.classList.remove('open');
        });
    });
});

window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    
    if (window.scrollY > 20) {
        header.classList.add('header-scrolled');
    } else {
        header.classList.remove('header-scrolled');
    }
});

