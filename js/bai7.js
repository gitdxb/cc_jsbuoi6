function inSoNguyenTo() {
    var inputNum = Number(document.querySelector('#nhapSoN_b7').value);
    var count = 1;
    var result = "";
    while (count <= inputNum) {
        // Kiểm tra có phải số nguyên tố
        if (kiemTraSNT(count)) {
            result += count + " ";
        }
        count++;
    }
    if (result == "") {
        document.getElementById("kqBai7").innerHTML = "Không có số nguyên tố hợp lệ";
    } else {
        document.getElementById("kqBai7").innerHTML = result;   
    }
}
function kiemTraSNT(inputNum) {
    if (inputNum < 2) {
        return false;
    } else {
        for (let i = 2; i <= Math.sqrt(inputNum); i++) {
            if (inputNum % i == 0) {
                return false;
            }
        }
    }
    return true;
}

document.querySelector('#btnBai7').onclick = inSoNguyenTo;