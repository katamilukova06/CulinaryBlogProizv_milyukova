document.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('scroll', function () {
        let header = document.getElementById("header-top");
        let scrollTop = window.scrollY;
        let maxScroll = 250;

        let opacity = Math.min(scrollTop / maxScroll, 1);
        header.style.backgroundColor = `rgba(250, 240, 230, ${opacity})`;
    });
    function toggleMenu() {
        const sideMenu = document.getElementById('side-menu');

        sideMenu.classList.toggle('active');
    }
    document.getElementById('hamburger').addEventListener('click', toggleMenu);
});
document.addEventListener('DOMContentLoaded', function () {
    const userIcon = document.querySelector('.img-polzov');
    const dropdownMenu = document.querySelector('.dropdown-menu');

    if (userIcon && dropdownMenu) {
        // Обработчик клика по иконке
        userIcon.addEventListener('click', function (event) {
            event.stopPropagation(); // Предотвращаем всплытие события
            dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
        });

        // Обработчик клика вне меню
        document.addEventListener('click', function () {
            dropdownMenu.style.display = 'none';
        });

        // Остановка скрытия при клике внутри меню
        dropdownMenu.addEventListener('click', function (event) {
            event.stopPropagation();
        });
    } else {
        console.error("Элементы .img-polzov или .dropdown-menu не найдены");
    }
});


