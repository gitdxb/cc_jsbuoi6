/**
 * . Hãy viết chương trình khi click vào button sẽ in ra 10 thẻ div.
 *   Nếu div nào vị trí chẵn thì background màu đỏ và lẻ thì
 *   background màu xanh.
 */
function divXanhDo() {
    var theDiv;
    var divContent;
    for (var i = 0; i < 10; i++) {
        theDiv = document.createElement("div");
        if (i % 2 == 0) {
            divContent = document.createTextNode("Lẻ: " + i);
            theDiv.style.backgroundColor = "red";
            theDiv.style.color = "white";
        } else {
            divContent = document.createTextNode("Lẻ: " + i);
            theDiv.style.backgroundColor = "blue";
            theDiv.style.color = "white";
        }
        theDiv.appendChild(divContent);
        document.getElementById("kqBai6").appendChild(theDiv);
    }
    
}
document.querySelector('#btnBai6').onclick = divXanhDo;