import { useState, useEffect } from "react";
import { Productcard } from "../Shared/Product-Card/Product-Card";


export function Product() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts();
    }, []);
    function getProducts() {
        fetch("https://dummyjson.com/products").then((res) => res.json()).then((data)=>setProducts(data.products)); 
    }
    return (
        <div>
            {
                // conditional rendering or short circuting because if it is false it beakd
                products && products.map((product) => (
                    <Productcard   product={product}></Productcard>
                ))
            }
         </div>
    )
}