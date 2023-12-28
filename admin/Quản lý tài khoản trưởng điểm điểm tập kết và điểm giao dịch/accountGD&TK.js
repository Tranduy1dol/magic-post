function manageAccounts() {
    document.getElementById('content').innerHTML = `
        <h2>Quản lý Tài Khoản Trưởng Điểm</h2>

        <button onclick="showAddAccountForm()">Thêm Tài Khoản</button>
        
        <table id="accountsTable">
            <tr>
                <th>ID</th>
                <th>Tên Tài Khoản</th>
                <th>Email</th>
                <th>Điểm</th>
                <th>Thao tác</th>
            </tr>
            <!-- Add rows dynamically using JavaScript -->
        </table>
    `;
}

function showAddAccountForm() {
    document.getElementById('content').innerHTML += `
        <div id="addAccountForm">
            <h3>Thêm Tài Khoản</h3>
            <label for="accountName">Tên Tài Khoản:</label>
            <input type="text" id="accountName" required>

            <label for="accountEmail">Email:</label>
            <input type="email" id="accountEmail" required>

            <label for="accountLocation">Điểm:</label>
            <select id="accountLocation">
                <!-- Populate options dynamically using JavaScript -->
            </select>

            <button onclick="addAccount()">Thêm</button>
        </div>
    `;

    // Populate the locations dropdown dynamically
    const locationsDropdown = document.getElementById('accountLocation');
    // Fetch locations from the server or use a static list
    const locations = ['Điểm Giao Dịch 1', 'Điểm Giao Dịch 2', 'Điểm Tập Kết 1', 'Điểm Tập Kết 2'];

    for (const location of locations) {
        const option = document.createElement('option');
        option.value = location;
        option.text = location;
        locationsDropdown.add(option);
    }
}

function addAccount() {
    const accountName = document.getElementById('accountName').value;
    const accountEmail = document.getElementById('accountEmail').value;
    const accountLocation = document.getElementById('accountLocation').value;

    // Perform logic to add the account (e.g., send to server)
    // For simplicity, let's just update the table in the frontend
    const table = document.getElementById('accountsTable');
    const newRow = table.insertRow(-1);

    const cell1 = newRow.insertCell(0);
    cell1.innerHTML = 'New ID'; // You should replace this with a real ID

    const cell2 = newRow.insertCell(1);
    cell2.innerHTML = accountName;

    const cell3 = newRow.insertCell(2);
    cell3.innerHTML = accountEmail;

    const cell4 = newRow.insertCell(3);
    cell4.innerHTML = accountLocation;

    const cell5 = newRow.insertCell(4);
    cell5.innerHTML = '<button onclick="editAccount()">Sửa</button> <button onclick="deleteAccount()">Xóa</button>';
}

function editAccount() {
    // Implement logic to edit an account
    alert('Edit account functionality to be implemented.');
}

function deleteAccount() {
    // Implement logic to delete an account
    alert('Delete account functionality to be implemented.');
}
