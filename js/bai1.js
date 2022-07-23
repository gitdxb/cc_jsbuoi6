// 1️⃣ Tìm số chẵn/lẻ nhỏ hơn 100

function timChanLe(params) {
    var soChan = '';
    var soLe = '';
    for (var i = 0; i < 100; i++) {
        if (i % 2 == 0) {
            soChan += i + ' ';
        } else {
            soLe += i + ' ';
        }
        
    }
    document.querySelector('#kqBai1').innerHTML = '<b style="color: red;">Số Chẵn:</b> ' + soChan + '<br> <b style="color: red;">Số lẻ:</b> ' + soLe;
}
document.querySelector('#btnBai1').onclick = timChanLe;