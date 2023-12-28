function manageLocations() {
    document.getElementById('content').innerHTML = `
        <h2>Quản lý Điểm Giao Dịch và Điểm Tập Kết</h2>

        <button onclick="showAddLocationForm()">Thêm Điểm</button>
        
        <table id="locationsTable">
            <tr>
                <th>ID</th>
                <th>Tên Điểm</th>
                <th>Loại</th>
                <th>Thao tác</th>
            </tr>
            <!-- Add rows dynamically using JavaScript -->
        </table>
    `;
}

function showAddLocationForm() {
    document.getElementById('content').innerHTML += `
        <div id="addLocationForm">
            <h3>Thêm Điểm</h3>
            <label for="locationName">Tên Điểm:</label>
            <input type="text" id="locationName" required>

            <label for="locationType">Loại:</label>
            <select id="locationType">
                <option value="giao-dich">Điểm Giao Dịch</option>
                <option value="tap-ket">Điểm Tập Kết</option>
            </select>

            <button onclick="addLocation()">Thêm</button>
        </div>
    `;
}

function addLocation() {
    const locationName = document.getElementById('locationName').value;
    const locationType = document.getElementById('locationType').value;

    // Perform logic to add the location (e.g., send to server)
    // For simplicity, let's just update the table in the frontend
    const table = document.getElementById('locationsTable');
    const newRow = table.insertRow(-1);

    const cell1 = newRow.insertCell(0);
    cell1.innerHTML = 'New ID'; // You should replace this with a real ID

    const cell2 = newRow.insertCell(1);
    cell2.innerHTML = locationName;

    const cell3 = newRow.insertCell(2);
    cell3.innerHTML = locationType;

    const cell4 = newRow.insertCell(3);
    cell4.innerHTML = '<button onclick="editLocation()">Sửa</button> <button onclick="deleteLocation()">Xóa</button>';
}

function editLocation() {
    // Implement logic to edit a location
    alert('Edit location functionality to be implemented.');
}

function deleteLocation() {
    // Implement logic to delete a location
    alert('Delete location functionality to be implemented.');
}