"use strict";
const score = [];
const names = [];
function indentitiesOne(val) {
    return val;
}
function indentitiesTwo(val) {
    return val;
}
function indentitiesThree(val) {
    return val;
}
function indentitiesfour(val) {
    return val;
}
indentitiesfour({ brand: "puma", type: 8 });
function getSearchProducts(products) {
    return products[2];
}
//  Arrow Function
const getMoreProduct = (products) => {
    return products[2];
};
function anotherFunction(val1, val2) {
    return {
        val1,
        val2
    };
}
class SellableProduct {
    constructor() {
        this.cart = [];
    }
    addToCart(product) {
        this.cart.push(product);
    }
}
