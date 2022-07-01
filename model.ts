import { Product } from './product';
import { StoreManager } from './StoreManager';
import * as rl from 'readline-sync';

enum menuProduct {
    SHOW_ALL = 1,
    FIND_PRODUCT = 2,
    ADD_PRODUCT = 3,
    EDIT_PRODUCT = 4,
    DELETE_PRODUCT = 5
}

let storeManager = new StoreManager();
let choice = -1;

export class ProductManagemet {
    run() {
        do {
            console.log('Quản lý hàng hóa');
            console.log('1. Hiển thị danh sách hàng hóa');
            console.log('2. Tìm kiếm theo tên hàng hóa');
            console.log('3. Nhập thông tin một mặt hàng mới');
            console.log('4. Chỉnh sửa thông tin của một mặt hàng');
            console.log('5. Xoá một mặt hàng khỏi ứng dụng');
            choice = +rl.question('Nhap lua chon cua ban: ')
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

    let price = +rl.question('Moi nhap gia san pham: ')
    let quantity = +rl.question('Moi nhap so luong san pham: ');

    let date = new Date();
    let description = rl.question('Moi nhap mieu ta san pham: ');
    return new Product(id, name, type, price, quantity, date, description);

}

