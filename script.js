document.addEventListener('DOMContentLoaded', function() {
    const absensiForm = document.getElementById('absensi-form');
    const absenTableBody = document.querySelector('#absen-table tbody');

    absensiForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const namaPegawai = document.getElementById('nama-pegawai').value;
        const statusKehadiran = document.getElementById('status-kehadiran').value;
        const tanggal = document.getElementById('tanggal').value;

        // Generate a new row with delete icon
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${absenTableBody.children.length + 1}</td>
            <td>${namaPegawai}</td>
            <td>${statusKehadiran}</td>
            <td>${tanggal}</td>
            <td><span class="delete-icon" onclick="deleteRow(this)">&#10006;</span></td> <!-- Delete icon -->
        `;
        absenTableBody.appendChild(row);

        // Clear the form
        absensiForm.reset();
    });
});

function deleteRow(element) {
    if (confirm('Apakah Anda yakin ingin menghapus data ini?')) {
        const row = element.closest('tr');
        row.remove();
    }
}
