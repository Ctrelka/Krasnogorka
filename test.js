

//
// function addClassName(str, className) {
//     return str.split(' ').indexOf(className) > -1 ? str : str + " " + className;
// }
//
// function removeClassName(str, className) {
//     return str.split(' ').filter(function (t) {
//         return t != className;
//     }).join(' ');
// }
//
// function containsClassName(str, className) {
//     return str.split(' ').indexOf(className) > -1;
// }
//
// function toogleClassName(str, className) {
//     return containsClassName(str, className) ? deleteClassName(str, className) : addClassName(str, className);
// }

var elemProducts = document.getElementsByClassName('products')[0].innerHTML;

function addProducts() {
    document.getElementsByClassName('products')[0].innerHTML = elemProducts;
}

function removeProducts() {
    document.getElementsByClassName('products')[0].innerHTML = "";
}

function addElements() {
    var elem = document.createElement('div');
    elem.className = "newClass";
    elem.innerHTML = 'Some Text';
    document.body.appendChild(elem);
    elem.addEventListener("click", function () {
        this.parentNode.removeChild(this);
    })
}

function changeElements() {
    var changeElem = document.getElementsByClassName("newClass");
    for (var i = 0; i < changeElem.length; i++) {
        changeElem[i].innerHTML = 'New Some Text';
    }
    changeElem.addEventListener("click", function () {
        this.parentNode.removeChild(this);
    })
}

