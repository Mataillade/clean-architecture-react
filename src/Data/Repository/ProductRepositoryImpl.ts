import {ProductRepository} from "../../Domain/Repository/ProductRepository";
import ProductDataSource from "../DataSource/ProductDataSource";

export class ProductRepositoryImpl implements ProductRepository {
    dataSource: ProductDataSource;

    constructor(_datasource: ProductDataSource) {
        this.dataSource = _datasource;
    }

    async getProduct(id: number) {
        return this.dataSource.getProduct(id);
    }
}