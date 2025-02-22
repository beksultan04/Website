document.getElementById('register-btn').addEventListener('click', function () {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (username && email && password) {
        alert('Registration successful!');
        window.location.href = "login.html"; // После регистрации перекидываем на страницу входа
    } else {
        alert('Please fill in all fields.');
    }
});
