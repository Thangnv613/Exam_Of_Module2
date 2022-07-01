"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductManagemet = void 0;
const product_1 = require("./product");
const StoreManager_1 = require("./StoreManager");
const rl = __importStar(require("readline-sync"));
var menuProduct;
(function (menuProduct) {
    menuProduct[menuProduct["SHOW_ALL"] = 1] = "SHOW_ALL";
    menuProduct[menuProduct["FIND_PRODUCT"] = 2] = "FIND_PRODUCT";
    menuProduct[menuProduct["ADD_PRODUCT"] = 3] = "ADD_PRODUCT";
    menuProduct[menuProduct["EDIT_PRODUCT"] = 4] = "EDIT_PRODUCT";
    menuProduct[menuProduct["DELETE_PRODUCT"] = 5] = "DELETE_PRODUCT";
})(menuProduct || (menuProduct = {}));
let storeManager = new StoreManager_1.StoreManager();
let choice = -1;
class ProductManagemet {
    run() {
        do {
            console.log('Quản lý hàng hóa');
            console.log('1. Hiển thị danh sách hàng hóa');
            console.log('2. Tìm kiếm theo tên hàng hóa');
            console.log('3. Nhập thông tin một mặt hàng mới');
            console.log('4. Chỉnh sửa thông tin của một mặt hàng');
            console.log('5. Xoá một mặt hàng khỏi ứng dụng');
            choice = +rl.question('Nhap lua chon cua ban: ');
            switch (choice) {
                case menuProduct.SHOW_ALL: {
                    showAllProduct();
                    break;
                }
                case menuProduct.FIND_PRODUCT: {
                    findProductByName();
                    break;
                }
                case menuProduct.ADD_PRODUCT: {
                    createNewProduct();
                    break;
                }
                case menuProduct.EDIT_PRODUCT: {
                    updateProduct();
                    break;
                }
                case menuProduct.DELETE_PRODUCT: {
                    deleteProduct();
                    break;
                }
            }
        } while (choice != 0);
    }
}
exports.ProductManagemet = ProductManagemet;
function showAllProduct() {
    console.log('Danh sách sản phẩm hiện có');
    let product = storeManager.getAll();
    console.table(product);
}
function findProductByName() {
    console.log('Nhập tên sản phẩm muốn tìm kiếm');
    let productName = rl.question('Nhập tên sản phẩm đi ông cháu: ');
    let findProductByName = storeManager.findByName(productName);
    console.table(findProductByName);
}
function deleteProduct() {
    console.log('Xóa một mặt hàng');
    let id = +rl.question('Mời nhập ID muốn xóa: ');
    storeManager.deleteProduct(id);
}
function updateProduct() {
    console.log('Chỉnh sửa sản phẩm');
    let id = +rl.question('Mời nhập ID muốn chỉnh sửa sản phẩm: ');
    let product = dataProduct();
    storeManager.updateProduct(id, product);
}
function createNewProduct() {
    console.log('Thêm sản phẩm mới');
    let product = dataProduct();
    storeManager.getAll().push(product);
}
function dataProduct() {
    let id = 0;
    let name = rl.question('Moi nhap ten san pham: ');
    let type = rl.question('Moi nhap loai san pham: ');
    let price = +rl.question('Moi nhap gia san pham: ');
    let quantity = +rl.question('Moi nhap so luong san pham: ');
    let date = new Date();
    let description = rl.question('Moi nhap mieu ta san pham: ');
    return new product_1.Product(id, name, type, price, quantity, date, description);
}
