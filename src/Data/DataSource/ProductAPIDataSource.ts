import ProductDataSource from "./ProductDataSource";
import {Product} from "../../Domain/Model/Product";

export default class ProductAPIDataSource implements ProductDataSource {
    async getProduct(id: number): Promise<Product> {
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        if (res.ok) {
            return await res.json();
        } else {
            throw new Error('Failed to fetch product');
        }
    }
}