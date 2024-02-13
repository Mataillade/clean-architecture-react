import {Product} from "../../Domain/Model/Product";

export default interface ProductDataSource {
    getProduct(id: number): Promise<Product>;
}