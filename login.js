document.getElementById('login-btn').addEventListener('click', function () {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email && password) {
        alert('Login successful!');
        window.location.href = "main.html"; // После входа перекидываем в основной проект
    } else {
        alert('Please enter both email and password.');
    }
});
