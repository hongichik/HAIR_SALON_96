

<?php
// Kiểm tra nếu form được gửi đi
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Duyệt qua tất cả các phần tử trong $_POST và in ra giá trị
    foreach ($_POST as $key => $value) {
        echo $value . "<br>";  // In giá trị của mỗi phần tử
    }
}
?>