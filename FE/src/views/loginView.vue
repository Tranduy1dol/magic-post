<template>
    <div class="login-container">
        <h2>Đăng nhập</h2>
            <form id="loginForm">
                <label for="username">Tên đăng nhập:</label>
                <input type="text" id="username" name="username" required>

                <label for="password">Mật khẩu:</label>
                <input type="password" id="password" name="password" required>

                <button type="button" onclick="submitLoginForm()">Đăng nhập</button>
            </form>
    </div>
</template>

<script>
    function submitLoginForm() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Perform authentication - replace with actual authentication logic
    if (username === 'example' && password === 'password') {
        alert('Đăng nhập thành công!');
        // Redirect to the main management page or perform other actions
    } else {
        alert('Đăng nhập thất bại. Vui lòng kiểm tra tên đăng nhập và mật khẩu.');
    }
    }

</script>

<style>
body {
    font-family: Arial, sans-serif;
    background-color: #333333;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
}

.login-container {
    background-color: #333333;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    max-width: 400px;
    width: 100%;
    text-align: center;
}

h2 {
    color: #333;
}

form {
    margin-top: 20px;
}

label {
    display: block;
    margin-bottom: 8px;
}

input {
    width: 100%;
    padding: 8px;
    margin-bottom: 16px;
}

button {
    background-color: #4CAF50;
    color: white;
    padding: 10px 15px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

button:hover {
    background-color: #45a049;
}

</style>