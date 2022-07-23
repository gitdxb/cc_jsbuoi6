// Viết chương trình nhập vào 2 số x, n tính tổng: S(n) = x + x^2+ x^3 + … + x^n (Sử dụng vòng lặp và hàm)
function tinhTong() {
    var nhapX = Number(document.querySelector('#nhapX').value);
    var nhapN = Number(document.querySelector('#nhapN').value);
    var count = 1;
    var sum = 0;
    if (nhapN < 0) {
        return alert("n cần là số dương nha");
    } else if (nhapN == 0 || nhapN == 1) {
        sum = nhapX;
    } else {
        for (let i = 1; i <= nhapN; i++) {
            sum += Math.pow(nhapX, i);
        }
    }
    document.querySelector('#kqBai4').innerHTML = 'Tổng: ' + sum;
}
document.querySelector('#btnBai4').onclick = tinhTong;