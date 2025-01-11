var goi = 0;
var uonnhom = 0;
var tay = 0;
var nangtong = 0;
var catgoi_nam = 0;
var taynhuom_nam = 0;


var khunggio;
var tong;
var tong_show = 0;
var ptgiam = 0;
var sotiengiam = 0

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

document.getElementById("gioitinh").addEventListener("change", function () {
    const selectedValue = this.value;
    let allTabNam = document.querySelectorAll('.tab-nam');
    let allTabNu = document.querySelectorAll('.tab-nu');

    if (selectedValue === "Nam") {
        allTabNu.forEach(tab => tab.classList.remove('active'));
        allTabNam.forEach(tab => tab.classList.add('active'));
    } else if (selectedValue === "Nữ") {
        allTabNam.forEach(tab => tab.classList.remove('active'));
        allTabNu.forEach(tab => tab.classList.add('active'));
    }
    let radios = document.querySelectorAll('input[type="radio"]');

    radios.forEach(radio => radio.checked = false);

    goi = 0;
    uonnhom = 0;
    tay = 0;
    nangtong = 0;
    catgoi_nam = 0;
    taynhuom_nam = 0;


    tong = 0;
    tong_show = 0;
    ptgiam = 0;
    sotiengiam = 0;

    TinhTong()
});



const radioButtons = document.querySelectorAll('input[type="radio"]');
radioButtons.forEach(radio => {
    radio.addEventListener('change', (event) => {
        if (event.target.checked) {
            Convert(event.target.value);
            TinhTong()
        }
    });
});


const Convert = (text, type = 1) => {

    if (type == 1) {
        if (text.includes("Gội cao cấp: 80 - 100k")) {
            goi = 80000;
        } else if (text.includes("Gội cắt: 190k")) {
            goi = 190000;
        } else if (text.includes("Gội(cao cấp) cắt: 220k")) {
            goi = 220000;
        } else if (text.includes("Dịch vụ duỗi, uốn, nhuộm(thường): 500k(S)")) {
            uonnhom = 500000;
        } else if (text.includes("Dịch vụ duỗi, uốn, nhuộm(thường): 600k(M)")) {
            uonnhom = 600000;
        } else if (text.includes("Dịch vụ duỗi, uốn, nhuộm(thường): 700k(L)")) {
            uonnhom = 700000;
        } else if (text.includes("Dịch vụ duỗi, uốn, nhuộm(trung bình): 600k(S)")) {
            uonnhom = 600000;
        } else if (text.includes("Dịch vụ duỗi, uốn, nhuộm(trung bình): 700k(M)")) {
            uonnhom = 700000;
        } else if (text.includes("Dịch vụ duỗi, uốn, nhuộm(trung bình): 800k(L)")) {
            uonnhom = 800000;
        } else if (text.includes("Dịch vụ duỗi, uốn, nhuộm(cao cấp): 700k(S)")) {
            uonnhom = 700000;
        } else if (text.includes("Dịch vụ duỗi, uốn, nhuộm(cao cấp): 800k(M)")) {
            uonnhom = 800000;
        } else if (text.includes("Dịch vụ duỗi, uốn, nhuộm(cao cấp): 900k(L)")) {
            uonnhom = 900000;
        } else if (text.includes("Tẩy cao cấp: 600k(S)")) {
            tay = 600000;
        } else if (text.includes("Tẩy cao cấp: 800k(M)")) {
            tay = 800000;
        } else if (text.includes("Tẩy cao cấp: 1tr(L)")) {
            tay = 1000000;
        } else if (text.includes("Nâng tông: 400k(S)")) {
            nangtong = 400000;
        } else if (text.includes("Nâng tông: 600k(M)")) {
            nangtong = 600000;
        } else if (text.includes("Nâng tông: 800k(L)")) {
            nangtong = 800000;
        } else if (text.includes("Cắt gội 70k")) {
            catgoi_nam = 70000;
        } else if (text.includes("Combo đặc biệt (cắt, gội, rửa mặt) 100k")) {
            catgoi_nam = 100000;
        }
        else if (text.includes("Nhuộm: 300k - 400k")) {
            taynhuom_nam = 300000;
        }
        else if (text.includes("Tẩy nhuộm 500k - 700k")) {
            taynhuom_nam = 500000;
        }

    }



}

const TinhTong = () => {
    tong = uonnhom + tay + nangtong + goi + catgoi_nam + taynhuom_nam;
    let soKhach = document.querySelector('input[type="number"]').value;
    let gt = document.getElementById("gioitinh").value;
    ptgiam = 0;
    if (gt == "Nữ") {
        if (soKhach > 1) {
            ptgiam = 0.2;
        }
    }
    let khungGio = document.querySelector('input[name="khunggio"]:checked')?.value;
    if (khungGio) {
        if (khungGio.includes("09:00") || khungGio.includes("10:00") || khungGio.includes("11:00") || khungGio.includes("12:00")) {
            ptgiam += 0.15;

        } else if (khungGio.includes("13:00") || khungGio.includes("14:00") || khungGio.includes("15:00") || khungGio.includes("16:00") || khungGio.includes("17:00")) {
            ptgiam += 0.1;
        }
    }

    sotiengiam = tong;
    tong = tong * (1 - ptgiam);

    tong = Math.round(tong / 1000) * 1000;

    sotiengiam = sotiengiam - tong;

    if (goi == 80000) {
        tong_show = new Intl.NumberFormat('en-DE').format(tong) + " - " + new Intl.NumberFormat('en-DE').format(tong + 20000);        
    }
    else {
        tong_show = new Intl.NumberFormat('en-DE').format(tong);
    }

    if (taynhuom_nam == 300000) {
        tong_show = new Intl.NumberFormat('en-DE').format(tong) + " - " + new Intl.NumberFormat('en-DE').format(tong + 100000);
    }
    else if(taynhuom_nam != 0) {
        tong_show = new Intl.NumberFormat('en-DE').format(tong);
    }

    if (taynhuom_nam == 500000) {
        tong_show = new Intl.NumberFormat('en-DE').format(tong) + " - " + new Intl.NumberFormat('en-DE').format(tong + 200000);
    }
    else if(taynhuom_nam != 0)  {
        tong_show = new Intl.NumberFormat('en-DE').format(tong);
    }

    document.getElementById('tong').innerHTML = `Tổng Bill: ${ tong_show } VNĐ`;
    document.getElementById('giamgia').innerHTML = `Tiếc kiệm: ${ new Intl.NumberFormat('en-DE').format(sotiengiam) } VNĐ , đã giảm : ${ ptgiam * 100 }%`;

    document.getElementById('tongbill').value = `Tổng Bill: ${ tong_show } VNĐ \n Đã giảm giá: ${ new Intl.NumberFormat('en-DE').format(sotiengiam) } VNĐ`;
}