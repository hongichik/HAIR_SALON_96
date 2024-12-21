document.querySelectorAll('.tab h5').forEach(tab => {
    tab.addEventListener('click', function () {
        // Bỏ class active khỏi tất cả các tab
        document.querySelector('.tab h5.active').classList.remove('active');
        // Thêm class active vào tab hiện tại
        this.classList.add('active');
        
        // Ẩn tất cả nội dung
        document.querySelectorAll('.content').forEach(content => {
            content.classList.remove('active');
        });

        // Hiện nội dung tương ứng
        const target = document.querySelector(this.getAttribute('data'));
        if (target) {
            target.classList.add('active');
        }
    });
});
