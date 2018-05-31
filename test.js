

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


function cc(el) {
    el.removeClassName("g-red");
}


// var elems = document.getElementsByTagName('p');
//
// for (var i=0;i<elems.length;i++)
// {
//     elems[i].innerHTML = "mastak";
//     elems[i].className = "b-red";
//     if(elems[i].getAttribute('data-id') === null){
//         elems[i].style.backgroundColor="blue";
//     }
//
//
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


var tabsElem = document.getElementsByClassName("tabs")[0];
var tabsLink = tabsElem.getElementsByClassName("tab__link");
var tabsContent = tabsElem.getElementsByClassName("tab__content");

function tabs(event, tabsName) {
    if (tabsLink.length == tabsContent.length) {
        for (i = 0; i < tabsContent.length; i++) {
            tabsContent[i].style.display = "none";
        }
        for (var i = 0; i < tabsLink.length; i++) {
            tabsLink[i].className = tabsLink[i].className.replace('active', '');
        }
        document.getElementById(tabsName).style.display = "block";
        event.currentTarget.className += " active";
    } else console.log("error");
}
