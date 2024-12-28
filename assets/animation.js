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
document.querySelectorAll('.tab button').forEach(button => {
    button.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('data'));
        if (target) {
            document.querySelectorAll('.active').forEach(content => {
                content.classList.remove('active');
            });

            document.querySelector('#btn-dichvu').classList.add('active');
            document.querySelector('#dichvu').classList.add('active');

            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
