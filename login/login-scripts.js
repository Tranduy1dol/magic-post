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
