// Nhập vào n. Tính giai thừa 1*2*...n
function tinhGiaiThua() {
    var giaiThuaN = Number(document.querySelector('#giaiThuaN').value);
    var tong = 1;
    if (giaiThuaN < 0) {
        return alert("N phải là số nguyên dương! Hãy nhập lại!");
    } else if (giaiThuaN == 0) {
        tong = 0;
    } else if (giaiThuaN > 0) {
        for (let i = 1; i <= giaiThuaN; i++) {
            tong *= i;
        }
    }
    document.querySelector('#kqBai5').innerHTML = 'Giai thừa: ' + tong;
}
document.querySelector('#btnBai5').onclick = tinhGiaiThua;