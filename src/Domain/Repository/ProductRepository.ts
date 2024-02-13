import {Product} from "../Model/Product";

export interface ProductRepository {
    getProduct(id: number): Promise<Product>;
}