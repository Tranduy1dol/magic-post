function submitRegisterForm() {
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Perform registration - replace with actual registration logic
    // In a real application, you would likely send this information to a server
    // for processing and database storage
    alert(`Đăng ký thành công!\nHọ và tên: ${fullName}\nEmail: ${email}\nTên đăng nhập: ${username}\nMật khẩu: ${password}`);
}
