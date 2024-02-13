import {Product} from "../../Model/Product";
import {ProductRepository} from "../../Repository/ProductRepository";

export interface GetProductUseCase {
    invoke: (id: number) => Promise<Product>;
}

export class GetProduct implements GetProductUseCase {
    private productRepo: ProductRepository;

    constructor(_productRepo: ProductRepository) {
        this.productRepo = _productRepo;
    }

    async invoke(id: number) {
        return this.productRepo.getProduct(id);
    }
}