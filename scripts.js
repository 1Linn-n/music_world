document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById('menuIcon'); // Кнопка меню
    const navMenu = document.getElementById('navMenu'); // Боковая панель меню
    const mainContent = document.querySelector('.container'); // Основной контент

    // Обработчик клика по иконке меню
    menuIcon.addEventListener('click', function () {
    navMenu.classList.toggle('change'); // Показываем/скрываем меню

    // Анимация поворота иконки
    const menuIconImg = menuIcon.querySelector('img');
    menuIconImg.style.transform =
    menuIconImg.style.transform === 'rotate(90deg)' ? 'rotate(0deg)' : 'rotate(90deg)';
    });
});

document.getElementById('exploreButton').addEventListener('click', function() {
    alert('Исследуйте остальные разделы сайта!');
    document.getElementById('navMenu').classList.toggle('change');
});

document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Проверка на корректность почты
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Некорректный формат email.');
        return;
    }

    // Проверка на корректность пароля
    if (password.length < 6) {
        alert('Пароль должен содержать не менее 6 символов.');
        return;
    }

    // Проверка на наличие повторяющихся имен пользователей
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    if (existingUsers.some(user => user.username === username)) {
        alert('Имя пользователя уже занято.');
        return;
    }

    // Сохранение нового пользователя
    const newUser = { username, email, password };
    existingUsers.push(newUser);
    localStorage.setItem('users', JSON.stringify(existingUsers));

    alert('Регистрация успешна!');
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Проверка на корректность почты
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Некорректный формат email.');
        return;
    }

    // Проверка на корректность пароля
    if (password.length < 6) {
        alert('Пароль должен содержать не менее 6 символов.');
        return;
    }

    // Проверка на наличие пользователя
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    const user = existingUsers.find(user => user.email === email && user.password === password);
    if (user) {
        alert('Вход успешен!');
    } else {
        alert('Неверный email или пароль.');
    }
});
