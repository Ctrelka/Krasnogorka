var products = [
    {
        id: 1,
        name: "shirt",
        price: 120,
        description: "Легкий быстросохнущий материал, плоские швы и удобный анатомический крой обеспечивают необходимый комфорт при тяжелой физической нагрузке.",
        sex: true,
        size: "m",
        count: 0,
        add: addProduct,
        del: delProduct,
        square: function () {
            return this.price * this.price;
        }
    },
    {
        id: 2,
        name: "blouse",
        price: 30,
        description: "Модель прямого кроя с удлиненной спинкой. Детали: застежка на пуговицы, отложной воротник, два нагрудных кармана, стильная надпись сзади.",
        sex: false,
        size: "xs",
        count: 0,
        add: addProduct,
        del: delProduct,
        square: function () {
            return this.price * this.price;
        }
    },
    {
        id: 3,
        name: "swish",
        price: 45,
        description: "Свитшот Reebok выполнен из толстовочного трикотажа. Модель прямого кроя. Детали: круглый вырез; комбинированный черно-белый цветовой дизайн; рукав \"летучая мышь\".",
        sex: true,
        size: "l",
        count: 0,
        add: addProduct,
        del: delProduct,
        square: function () {
            return this.price * this.price;
        }
    },
    {
        id: 4,
        name: "sneakers",
        price: 230,
        description: "Кроссовки Reebok Classics FURYLITE SLIP ON WOVEN выполнены из прочного текстиля. Легкая промежуточная подошва из пеноматериала, изготовленная по технологии 3D Ultralite, обеспечивает отличную амортизацию.",
        sex: true,
        size: "35",
        count: 0,
        add: addProduct,
        del: delProduct,
        square: function () {
            return this.price * this.price;
        }
    },
    {
        id: 5,
        name: "jeans",
        price: 100,
        description: "Состав: Хлопок - 78%, Полиэстер - 20%, Эластан - 2%",
        sex: false,
        size: "40",
        count: 0,
        add: addProduct,
        del: delProduct
    }];
var products2Arr = [
    new Products(
        5,
        "leggings",
        200,
        "обтягивающие эластичные брюки.",
        false,
        "xs"
    ),
    new Products(
        6,
        "shorts",
        150,
        "короткие брюки. Длина штанин варьируется от мини и до колен.",
        true,
        "m"
    ),
    new Products(
        7,
        "overalls",
        60,
        "мужская или женская одежда, состоящая из брюк (шорт) и верха, соединенных между собой.",
        true,
        "xl"
    ),
    new Products(
        8,
        "jumper",
        80,
        "Одевается через голову, может быть застежка в верхней части.",
        false,
        "m"
    ),
    new Products(
        9,
        "pullover",
        100,
        "джемпер с воротником (высоким, широким, объемным и т.д.",
        true,
        "xl"
    ),
    new Products(
        10,
        "golf",
        50,
        "джемпер с очень узким, плотно облегающим шею воротником.",
        false,
        "xs"
    )
];

function delProduct() {
    if (this.count > 0) {
        this.count--;
    }
}

function addProduct() {
    this.count++;
}

function priceSortUp(a, b) {
    return a.price > b.price;
}

function priceSortDown(a, b) {
    return b.price > a.price;
}

function nameSortUp(a, b) {
    return a.name > b.name;
}

function nameSortDown(a, b) {
    return b.name > a.name;
}

function sexSortUp(a, b) {
    return a.sex > b.sex;
}

function sexSortDown(a, b) {
    return a.sex < b.sex;
}

function filterSexMan(product) {
    return product.sex;
}

function filterSexWomen(product) {
    return !product.sex;
}

var priceMax = 120;
var priceMin = 45;
var searchName = "sh";

var a = {};

function filterPriceUp(product) {
    return priceMin <= product.price && product.price <= priceMax;
}

function filterPriceDown(product) {
    return priceMin >= product.price && product.price >= priceMax;
}

function searchProductsByName(product) {
    return product.name.indexOf(searchName) > -1;
}

var filterSexArr = products.filter(filterSexWomen);

var filterPriceArr = products.filter(filterPriceUp);

var searchProductByNameArr = products.filter(searchProductsByName);


products2Arr.sort(priceSortDown);
console.log(products2Arr);


for (var i = 0; i < products.length; i++) {
    document.body.innerHTML += "Наименование товара: " + products[i].name + " " + "Цена: " + products[i].price + " " + "Размер: " + products[i].size + " " + "Пол: " + products[i].sex + "<br/>";
}


function Products(id, name, price, description, sex, size) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.description = description;
    this.sex = sex;
    this.size = size;
    this.count = 0;
    this.add = function () {
        this.count++;
    };
    this.del = function () {
        if (this.count > 0) {
            this.count--;
        }
    };
    this.square = function () {
        return this.price * this.price;
    };
}


Products.prototype.gg = function () {
    return "Hello" + this.name;
}

Object.prototype.gg =  function () {
    return "Hello" + this.name;
}
