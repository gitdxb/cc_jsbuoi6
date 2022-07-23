function timSoNguyenDuong() {
    var sum = 0;
    var count = 1;
    for (let i = 1; i < 10000; i++) {
        sum += i;
        if(sum >= 10000){
            count = i;
            break;
        }
    }
    document.querySelector('#kqBai3').innerHTML = 'Số nguyên dương nhỏ nhất: ' + count;
}
document.querySelector('#btnBai3').onclick = timSoNguyenDuong;