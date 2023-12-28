// JavaScript trong customer-scripts.js

function checkParcelStatus() {
    const trackingId = document.getElementById('trackingId').value;

    // Gọi API hoặc thực hiện các hành động cần thiết để tra cứu đơn hàng
    // Trong ví dụ này, hiển thị kết quả giả định
    displayResult({
        trackingId: trackingId,
        status: 'Đang Giao Hàng',
        progress: '50%',
        estimatedDelivery: '20/01/2023',
        lastUpdate: '15/01/2023 08:30 AM',
    });
}

function displayResult(result) {
    const resultContainer = document.getElementById('resultContainer');
    resultContainer.innerHTML = '';

    const resultTable = document.createElement('table');
    resultTable.innerHTML = `
        <thead>
            <tr>
                <th>Mã Theo Dõi</th>
                <th>Trạng Thái</th>
                <th>Tiến Trình</th>
                <th>Dự Kiến Giao Hàng</th>
                <th>Cập Nhật Cuối Cùng</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>${result.trackingId}</td>
                <td>${result.status}</td>
                <td>${result.progress}</td>
                <td>${result.estimatedDelivery}</td>
                <td>${result.lastUpdate}</td>
            </tr>
        </tbody>
    `;

    resultContainer.appendChild(resultTable);
}
