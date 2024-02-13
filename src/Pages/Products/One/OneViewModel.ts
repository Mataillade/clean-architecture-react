import {useState} from "react";
import {Product} from "../../../Domain/Model/Product";
import ProductAPIDataSource from "../../../Data/DataSource/ProductAPIDataSource";
import {GetProduct} from "../../../Domain/UseCase/Product/GetProduct";
import {ProductRepositoryImpl} from "../../../Data/Repository/ProductRepositoryImpl";

export default function OneViewModel() {
    const [product, setProduct] = useState<Product>();

    const productDataSource = new ProductAPIDataSource();
    const productRepositoryImpl = new ProductRepositoryImpl(productDataSource);

    const getProductUseCase = new GetProduct(productRepositoryImpl);

    async function getProduct(id: number) {
        setProduct(await getProductUseCase.invoke(1));
    }

    return {
        getProduct,
        product
    }
}