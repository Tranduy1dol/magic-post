// Tạo một hàm để xử lý sự kiện khi người dùng nhấn vào liên kết trong thanh điều hướng
function handleClick(event) {
    event.preventDefault(); // Ngăn chặn hành vi mặc định của liên kết
  
    var target = event.target; // Lấy phần tử được nhấn
    var content = document.getElementById("content"); // Lấy phần tử nội dung
  
    // Hiển thị nội dung tương ứng với liên kết được nhấn
    if (target.innerText === "Đơn hàng") {
      content.innerHTML =
        "<h2>Quản lý đơn hàng</h2><p>Thông tin về đơn hàng sẽ được hiển thị ở đây.</p>";
    } else if (target.innerText === "Khách hàng") {
      content.innerHTML =
        "<h2>Quản lý khách hàng</h2><p>Thông tin về khách hàng sẽ được hiển thị ở đây.</p>";
    } else if (target.innerText === "Báo cáo") {
      content.innerHTML =
        "<h2>Báo cáo</h2><p>Các báo cáo sẽ được hiển thị ở đây.</p>";
    }
  }
  
  // Lắng nghe sự kiện khi người dùng nhấn vào liên kết
  var navLinks = document.querySelectorAll("nav a");
  navLinks.forEach(function (link) {
    link.addEventListener("click", handleClick);
  });
  