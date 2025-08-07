import { useEffect, useState } from "react";
import './styles/ProductsPage.css'
import ProductCard from "../../components/ProductCard";

function ProductsPage() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/')
        .then(response => {
            return response.json();
        })
        .then(data => {
            setProducts(data);
        });

    }, [])

    return(
        <div className="products-page">
        {products.map((product) => {
            return (
                <ProductCard 
                key={product.id}
                image={product.image}
                title={product.title}
                price={product.price} />
            )
        })}
        </div>
    )
}

export default ProductsPage;