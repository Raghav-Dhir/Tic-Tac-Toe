var sign = document.querySelectorAll("td");
for (var i=0;i<sign.length;i++) {
    sign[i].addEventListener('click', function () {
        this.textContent = 'X'
    })
    sign[i].addEventListener('dblclick', function () {
        this.textContent = 'O'
    })
}

var clear = document.querySelector('#b');
clear.addEventListener('click', function () {
    for (var i=0;i<sign.length;i++){
        sign[i].textContent = ''
    }
})