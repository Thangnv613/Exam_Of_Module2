"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
class Product {
    constructor(id, name, type, price, $quantity, date, description) {
        this._id = 0;
        this._name = name;
        this._type = type;
        this._price = price;
        this.quantity = $quantity;
        this._date = date;
        this._description = description;
        this.id = id;
    }
    get id() {
        return this._id;
    }
    get name() {
        return this._name;
    }
    get type() {
        return this._type;
    }
    get price() {
        return this._price;
    }
    get $quantity() {
        return this.quantity;
    }
    get date() {
        return this._date;
    }
    get description() {
        return this._description;
    }
    set id(value) {
        this._id = value;
    }
    set name(value) {
        this._name = value;
    }
    set type(value) {
        this._type = value;
    }
    set price(value) {
        this._price = value;
    }
    set $quantity(value) {
        this.quantity = value;
    }
    set date(value) {
        this._date = value;
    }
    set description(value) {
        this._description = value;
    }
}
exports.Product = Product;
