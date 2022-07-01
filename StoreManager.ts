import { Product } from './product';
export class StoreManager {
    private static id = 0;
    private static product: Product[] = [
        new Product(1,'sữa', 'đồ uống', 15, 12,new Date() , 'cho vào mồm là uống'),
        new Product(2,'rau', 'rau củ', 50, 5,new Date() , 'cho vào mồm là uống')
    ];
    getAll(): Product[] {
        return StoreManager.product;
    }
    addNewProduct(product: Product): void {
        StoreManager.id++
        product.id = StoreManager.id;
        StoreManager.product.push(product);
    }
    updateProduct(id: number, product: Product): any {
       
            StoreManager.product[id] = product;
    }
    deleteProduct(index: number): void {
        StoreManager.product.splice(index, 1);
    }
    findByName(name: string): any {
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
    findById(id: number): number {
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