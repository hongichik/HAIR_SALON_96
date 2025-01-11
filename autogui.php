

<?php
// Kiểm tra nếu form được gửi đi
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Duyệt qua tất cả các phần tử trong $_POST và in ra giá trị
    foreach ($_POST as $key => $value) {
        if ($key == 'sdt') {
            echo "SĐT: " . $value . "<br>";
        } elseif ($key == 'hoten') {
            echo "Họ tên: " . $value . "<br>";
        } elseif ($key == 'sokhach') {
            echo "Số khách: " . $value . "<br>";
        } else {
            // Các trường khác sẽ hiển thị bình thường
            echo $value . "<br>";
        }
    }
}
?>