//Ghi nhận hàng gửi và In giấy biên nhận
function recordParcel() {
    document.getElementById('content').innerHTML = `
        <h2>Ghi Nhận Hàng Gửi</h2>

        <label for="senderName">Tên Người Gửi:</label>
        <input type="text" id="senderName" required>

        <label for="senderEmail">Email Người Gửi:</label>
        <input type="email" id="senderEmail" required>

        <label for="recipientName">Tên Người Nhận:</label>
        <input type="text" id="recipientName" required>

        <label for="recipientAddress">Địa Chỉ Người Nhận:</label>
        <textarea id="recipientAddress" required></textarea>

        <label for="recipientEmail">Email Người Nhận:</label>
        <input type="email" id="recipientEmail" required>

        <label for="parcelType">Loại Hàng Gửi:</label>
        <select id="parcelType">
            <option value="tai-lieu">Tài Liệu</option>
            <option value="hang-hoa">Hàng Hóa</option>
        </select>

        <label for="parcelContent">Nội Dung Bưu Gửi:</label>
        <textarea id="parcelContent" required></textarea>

        <label for="specialService">Dịch Vụ Đặc Biệt:</label>
        <input type="checkbox" id="specialService">

        <label for="senderInstructions">Chỉ Dẫn của Người Gửi:</label>
        <select id="senderInstructions">
            <option value="chuyen-hoan-ngay">Chuyển Hoàn Ngay</option>
            <option value="huy">Hủy</option>
            <option value="goi-dien">Gọi Điện Cho Người Gửi</option>
        </select>

        <label for="senderCommitment">Cam Kết của Người Gửi:</label>
        <textarea id="senderCommitment"></textarea>

        <label for="sendingDateTime">Ngày Giờ Gửi:</label>
        <input type="datetime-local" id="sendingDateTime" required>

        <label for="weight">Khối Lượng (gram):</label>
        <input type="number" id="weight" required>

        <label for="businessInstructions">Chú Dẫn Nghiệp Vụ:</label>
        <textarea id="businessInstructions"></textarea>

        <label for="receivingDateTime">Ngày Giờ Nhận:</label>
        <input type="datetime-local" id="receivingDateTime" required>

        <!-- Add more fields and options as needed -->

        <button onclick="generateReceipt()">In Giấy Biên Nhận</button>
    `;
}

function generateReceipt() {
    const senderName = document.getElementById('senderName').value;
    const senderEmail = document.getElementById('senderEmail').value;
    const recipientName = document.getElementById('recipientName').value;
    const recipientAddress = document.getElementById('recipientAddress').value;
    const recipientEmail = document.getElementById('recipientEmail').value;
    const parcelType = document.getElementById('parcelType').value;
    const parcelContent = document.getElementById('parcelContent').value;
    const specialService = document.getElementById('specialService').checked;
    const senderInstructions = document.getElementById('senderInstructions').value;
    const senderCommitment = document.getElementById('senderCommitment').value;
    const sendingDateTime = document.getElementById('sendingDateTime').value;
    const weight = document.getElementById('weight').value;
    const businessInstructions = document.getElementById('businessInstructions').value;
    const receivingDateTime = document.getElementById('receivingDateTime').value;

    // Perform logic to calculate fees and collect payments
    const mainFee = 10;  // Replace with actual calculation logic
    const additionalFee = 5;  // Replace with actual calculation logic
    const vat = 0.1;  // Replace with actual calculation logic
    const surcharge = 3;  // Replace with actual calculation logic

    const totalFee = mainFee + additionalFee + vat + surcharge;
    
    const codAmount = 50;  // Replace with actual calculation logic
    const otherIncome = 10;  // Replace with actual calculation logic

    const totalIncome = codAmount + otherIncome;

    // Display the calculated fees and income
    const receiptContent = `
        <h2>Giấy Biên Nhận Chuyển Phát</h2>
        <p><strong>Người Gửi:</strong> ${senderName}</p>
        <p><strong>Email Người Gửi:</strong> ${senderEmail}</p>
        <p><strong>Người Nhận:</strong> ${recipientName}</p>
        <p><strong>Địa Chỉ Người Nhận:</strong> ${recipientAddress}</p>
        <p><strong>Email Người Nhận:</strong> ${recipientEmail}</p>
        <p><strong>Loại Hàng Gửi:</strong> ${parcelType}</p>
        <p><strong>Nội Dung Bưu Gửi:</strong> ${parcelContent}</p>
        <p><strong>Dịch Vụ Đặc Biệt:</strong> ${specialService ? 'Có' : 'Không'}</p>
        <p><strong>Chỉ Dẫn của Người Gửi:</strong> ${senderInstructions}</p>
        <p><strong>Cam Kết của Người Gửi:</strong> ${senderCommitment}</p>
        <p><strong>Ngày Giờ Gửi:</strong> ${sendingDateTime}</p>
        <p><strong>Khối Lượng (gram):</strong> ${weight}</p>
        <p><strong>Chú Dẫn Nghiệp Vụ:</strong> ${businessInstructions}</p>
        <p><strong>Ngày Giờ Nhận:</strong> ${receivingDateTime}</p>
        <p><strong>Cước:</strong></p>
        <ul>
            <li>Cước Chính: $${mainFee}</li>
            <li>Phụ Phí: $${additionalFee}</li>
            <li>Thuế VAT: $${vat}</li>
            <li>Phụ Thu: $${surcharge}</li>
            <li><strong>Tổng Cước: $${totalFee}</strong></li>
        </ul>
        <p><strong>Thu:</strong></p>
        <ul>
            <li>COD: $${codAmount}</li>
            <li>Thu Khác: $${otherIncome}</li>
            <li><strong>Tổng Thu: $${totalIncome}</strong></li>
        </ul>
    `;

    document.getElementById('content').innerHTML = receiptContent;
}

//Tạo đơn chuyển hàng gửi đến điểm tập kết
function createShipmentOrder() {
    document.getElementById('content').innerHTML = `
        <h2>Tạo Đơn Chuyển Hàng Gửi Đến Điểm Tập Kết</h2>

        <label for="senderName">Tên Người Gửi:</label>
        <input type="text" id="senderName" required>

        <label for="senderEmail">Email Người Gửi:</label>
        <input type="email" id="senderEmail" required>

        <label for="receiverName">Tên Người Nhận:</label>
        <input type="text" id="receiverName" required>

        <label for="receiverAddress">Địa Chỉ Người Nhận:</label>
        <textarea id="receiverAddress" required></textarea>

        <label for="shipmentContent">Nội Dung Bưu Gửi:</label>
        <textarea id="shipmentContent" required></textarea>

        <label for="shipmentType">Loại Hàng Gửi:</label>
        <select id="shipmentType">
            <option value="tai-lieu">Tài Liệu</option>
            <option value="hang-hoa">Hàng Hóa</option>
        </select>

        <label for="shipmentWeight">Khối Lượng (gram):</label>
        <input type="number" id="shipmentWeight" required>

        <label for="shippingDate">Ngày Gửi:</label>
        <input type="date" id="shippingDate" required>

        <button onclick="displayShipmentOrder()">Xác Nhận Đơn Chuyển Hàng</button>
    `;
}

function generateShipmentCode() {
    // Tạo mã đơn hàng dựa trên biến toàn cục
    const shipmentCode = `DH${nextShipmentCode}`;
    
    // Tăng giá trị biến toàn cục để chuẩn bị cho đơn hàng tiếp theo
    nextShipmentCode++;

    // Gọi hàm để hiển thị thông tin đơn hàng và mã
    displayShipmentOrder(shipmentCode);
}


function displayShipmentOrder() {
    const senderName = document.getElementById('senderName').value;
    const senderEmail = document.getElementById('senderEmail').value;
    const receiverName = document.getElementById('receiverName').value;
    const receiverAddress = document.getElementById('receiverAddress').value;
    const shipmentContent = document.getElementById('shipmentContent').value;
    const shipmentType = document.getElementById('shipmentType').value;
    const shipmentWeight = document.getElementById('shipmentWeight').value;
    const shippingDate = document.getElementById('shippingDate').value;

    // Perform logic to save or process the shipment order
    // For simplicity, let's just show the details
    const shipmentOrderDetails = `
        <h2>Đơn Chuyển Hàng</h2>
        <p><strong>Người Gửi:</strong> ${senderName}</p>
        <p><strong>Email Người Gửi:</strong> ${senderEmail}</p>
        <p><strong>Người Nhận:</strong> ${receiverName}</p>
        <p><strong>Địa Chỉ Người Nhận:</strong> ${receiverAddress}</p>
        <p><strong>Nội Dung Bưu Gửi:</strong> ${shipmentContent}</p>
        <p><strong>Loại Hàng Gửi:</strong> ${shipmentType}</p>
        <p><strong>Khối Lượng (gram):</strong> ${shipmentWeight}</p>
        <p><strong>Ngày Gửi:</strong> ${shippingDate}</p>
        <!-- Add more details as needed -->
    `;

    document.getElementById('content').innerHTML = shipmentOrderDetails;
}

// Xác nhận (đơn) hàng về từ điểm tập kết
function confirmArrivalFromHub() {
    document.getElementById('content').innerHTML = `
        <h2>Xác Nhận Hàng Về Từ Điểm Tập Kết</h2>

        <label for="shipmentCode">Mã Đơn Hàng:</label>
        <input type="text" id="shipmentCode" required>

        <label for="arrivalDate">Ngày Nhận Hàng:</label>
        <input type="date" id="arrivalDate" required>

        <button onclick="displayArrivalConfirmation()">Xác Nhận Đơn Hàng</button>
    `;
}

function displayArrivalConfirmation() {
    const shipmentCode = document.getElementById('shipmentCode').value;
    const arrivalDate = document.getElementById('arrivalDate').value;

    // Perform logic to confirm the arrival of the shipment
    // For simplicity, let's just show the details
    const arrivalConfirmationDetails = `
        <h2>Xác Nhận Hàng Về</h2>
        <p><strong>Mã Đơn Hàng:</strong> ${shipmentCode}</p>
        <p><strong>Ngày Nhận Hàng:</strong> ${arrivalDate}</p>
        <p>Hàng đã được xác nhận về từ điểm tập kết.</p>
        <!-- Add more details as needed -->
    `;

    document.getElementById('content').innerHTML = arrivalConfirmationDetails;
}

// Tạo đơn hàng cần chuyển đến tay người nhận
function createShipmentToRecipient() {
    document.getElementById('content').innerHTML = `
        <h2>Tạo Đơn Hàng Cần Chuyển Đến Tay Người Nhận</h2>

        <label for="senderName">Tên Người Gửi:</label>
        <input type="text" id="senderName" required>

        <label for="recipientName">Tên Người Nhận:</label>
        <input type="text" id="recipientName" required>

        <label for="recipientAddress">Địa Chỉ Người Nhận:</label>
        <textarea id="recipientAddress" required></textarea>

        <label for="shipmentContent">Nội Dung Bưu Gửi:</label>
        <textarea id="shipmentContent" required></textarea>

        <label for="shipmentType">Loại Hàng Gửi:</label>
        <select id="shipmentType">
            <option value="tai-lieu">Tài Liệu</option>
            <option value="hang-hoa">Hàng Hóa</option>
        </select>

        <label for="shipmentWeight">Khối Lượng (gram):</label>
        <input type="number" id="shipmentWeight" required>

        <button onclick="displayShipmentToRecipient()">Tạo Đơn Hàng</button>
    `;
}

function displayShipmentToRecipient() {
    const senderName = document.getElementById('senderName').value;
    const recipientName = document.getElementById('recipientName').value;
    const recipientAddress = document.getElementById('recipientAddress').value;
    const shipmentContent = document.getElementById('shipmentContent').value;
    const shipmentType = document.getElementById('shipmentType').value;
    const shipmentWeight = document.getElementById('shipmentWeight').value;

    // Perform logic to create the shipment order
    // For simplicity, let's just show the details
    const shipmentToRecipientDetails = `
        <h2>Đơn Hàng Cần Chuyển Đến Tay Người Nhận</h2>
        <p><strong>Tên Người Gửi:</strong> ${senderName}</p>
        <p><strong>Tên Người Nhận:</strong> ${recipientName}</p>
        <p><strong>Địa Chỉ Người Nhận:</strong> ${recipientAddress}</p>
        <p><strong>Nội Dung Bưu Gửi:</strong> ${shipmentContent}</p>
        <p><strong>Loại Hàng Gửi:</strong> ${shipmentType}</p>
        <p><strong>Khối Lượng (gram):</strong> ${shipmentWeight}</p>
        <p>Hãy chuyển đơn hàng này đến tay người nhận.</p>
        <!-- Add more details as needed -->
    `;

    document.getElementById('content').innerHTML = shipmentToRecipientDetails;
}

// Xác nhận đơn hàng và Thống kê
// Dùng một mảng để lưu trữ thông tin các đơn hàng
let shipmentOrders = [];

function confirmDeliveryToRecipient(shipmentCode) {
    // Tìm đơn hàng trong mảng theo mã đơn hàng
    const foundOrder = shipmentOrders.find(order => order.shipmentCode === shipmentCode);

    if (foundOrder) {
        // Thực hiện logic xác nhận giao hàng thành công
        foundOrder.deliveryStatus = 'delivered';
        displayDeliveryStatus(foundOrder);
    } else {
        // Hiển thị thông báo nếu không tìm thấy đơn hàng
        alert('Không tìm thấy đơn hàng với mã đơn hàng đã nhập.');
    }
}

function confirmUndeliveredToRecipient(shipmentCode) {
    // Tìm đơn hàng trong mảng theo mã đơn hàng
    const foundOrder = shipmentOrders.find(order => order.shipmentCode === shipmentCode);

    if (foundOrder) {
        // Thực hiện logic xác nhận giao hàng không thành công và trả lại điểm giao dịch
        foundOrder.deliveryStatus = 'undelivered';
        returnToHub(foundOrder);
    } else {
        // Hiển thị thông báo nếu không tìm thấy đơn hàng
        alert('Không tìm thấy đơn hàng với mã đơn hàng đã nhập.');
    }
}

function returnToHub(undeliveredOrder) {
    // Thêm logic để xử lý việc trả lại điểm giao dịch
    // ở đây có thể thực hiện cập nhật trạng thái đơn hàng và gửi lại điểm giao dịch

    // Hiển thị thông báo
    alert(`Đơn hàng ${undeliveredOrder.shipmentCode} đã được trả lại điểm giao dịch.`);
}

function displayDeliveryStatus(order) {
    // Hiển thị trạng thái giao hàng
    const statusMessage = `
        <h2>Trạng Thái Giao Hàng</h2>
        <p><strong>Mã Đơn Hàng:</strong> ${order.shipmentCode}</p>
        <p><strong>Trạng Thái:</strong> ${order.deliveryStatus === 'delivered' ? 'Đã Giao Thành Công' : 'Không Thành Công'}</p>
        <!-- Các thông tin khác của đơn hàng -->
    `;

    document.getElementById('content').innerHTML = statusMessage;
}

function displayShipmentStatistics() {
    // Thống kê các đơn hàng theo trạng thái
    const successfulDeliveries = shipmentOrders.filter(order => order.deliveryStatus === 'delivered').length;
    const unsuccessfulDeliveries = shipmentOrders.filter(order => order.deliveryStatus === 'undelivered').length;
    const returnToHubCount = shipmentOrders.length - (successfulDeliveries + unsuccessfulDeliveries);

    const statisticsMessage = `
        <h2>Thống Kê Đơn Hàng</h2>
        <p><strong>Đã Giao Thành Công:</strong> ${successfulDeliveries}</p>
        <p><strong>Không Thành Công:</strong> ${unsuccessfulDeliveries}</p>
        <p><strong>Trả Lại Điểm Giao Dịch:</strong> ${returnToHubCount}</p>
    `;

    document.getElementById('content').innerHTML = statisticsMessage;
}

