document.getElementById('authForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращаем стандартное поведение формы

    const login = document.getElementById('login').value.trim();
    const password = document.getElementById('password').value.trim();

    // Проверка на ввод логина и пароля
    if (!login || !password) {
        console.log('Логин и пароль должны быть заполнены.');
        return;
    }

    // Проверка пароля на соответствие требованиям
    const passwordRegex = /^(?=.*[@#$^&%-*])(?=\S+$).{9,32}$/;
    if (!passwordRegex.test(password)) {
        console.log('Пароль должен быть длиной от 9 до 32 символов, не содержать пробелы и кириллицу, и включать хотя бы один специальный символ.');
        return;
    }

    // Имитация успешного ответа от сервера
    const response = {
        status: "success",
        message: "Login successful"
    };

    console.log(response);
    window.location.href = 'index.html'; // Переадресация на index.html
});