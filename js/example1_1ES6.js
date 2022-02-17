'use strict';

class Product12 {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    make25PercentDiscount = function () {
        this.price = this.price - (this.price / 100 * 25);
    };

}

/* function Product(name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.make25PercentDiscount = function () {
    this.price = this.price - (this.price / 100 * 25);
}; */

const product12 = new Product12('apple', 100);
product12.make25PercentDiscount();
console.log(product12);
