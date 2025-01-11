

<?php
// Kiểm tra nếu form được gửi đi
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    foreach ($_POST as $key => $value) {
        if ($key == 'sdt') {
            echo "SĐT: " . $value . "<br>";
        } elseif ($key == 'hoten') {
            echo "Họ tên: " . $value . "<br>";
        } elseif ($key == 'sokhach') {
            echo "Số khách: " . $value . "<br>";
        } elseif ($key == 'khunggio') {
            echo "Khung giờ: " . $value . "<br>";
        } else {
            echo $value . "<br>";
        }
    }
}
?>