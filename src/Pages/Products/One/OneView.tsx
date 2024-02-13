import useViewModel from "./OneViewModel";
import {useEffect} from "react";

export default function OneView() {
    const {getProduct, product} = useViewModel();

    useEffect(() => {
        getProduct(1);
    }, []);

    return (
        <>
            <h1>Hey</h1>
            <h2>Name: {product?.title}</h2>
        </>
    )
}