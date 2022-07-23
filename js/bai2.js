function chiaHetCho3(params) {
    var count = 0;
    for (var i = 0; i < 1000; i++) {
        if (i % 3 == 0) {
            count++;
        }
        
    }
    document.querySelector('#kqBai2').innerHTML = "Số chia hết cho 3 nhỏ hơn 1000: " + count + " số";
}
document.querySelector('#btnBai2').onclick = chiaHetCho3;