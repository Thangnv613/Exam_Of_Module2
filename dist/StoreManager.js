"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreManager = void 0;
const product_1 = require("./product");
class StoreManager {
    getAll() {
        return StoreManager.product;
    }
    addNewProduct(product) {
        StoreManager.id++;
        product.id = StoreManager.id;
        StoreManager.product.push(product);
    }
    updateProduct(id, product) {
        StoreManager.product[id] = product;
    }
    deleteProduct(index) {
        StoreManager.product.splice(index, 1);
    }
    findByName(name) {
        let product = [];
        for (let i = 0; i < StoreManager.product.length; i++) {
            if (name == StoreManager.product[i].name) {
                product.push(StoreManager.product[i]);
            }
            else {
                console.log('Sản phẩm không có hoặc không tồn tại!\n Vui lòng nhập lại tên. ');
            }
        }
        return product;
    }
    findById(id) {
        let index = -1;
        for (let i = 0; i < StoreManager.product.length; i++) {
            if (id == StoreManager.product[i].id) {
                index = i;
                break;
            }
        }
        return index;
    }
}
exports.StoreManager = StoreManager;
StoreManager.id = 0;
StoreManager.product = [
    new product_1.Product(1, 'sữa', 'đồ uống', 15, 12, new Date(), 'cho vào mồm là uống'),
    new product_1.Product(2, 'rau', 'rau củ', 50, 5, new Date(), 'cho vào mồm là uống')
];
