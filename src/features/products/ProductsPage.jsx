import { useEffect, useState } from "react";
import './styles/ProductsPage.css'
import ProductCard from "../../components/ProductCard";
import { useOutletContext } from "react-router-dom";

function ProductsPage() {
    const [products, setProducts] = useState([]);
    const { addToCart } = useOutletContext();

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
                id={product.id}
                image={product.image}
                title={product.title}
                price={product.price}
                addToCart={addToCart} />
            )
        })}
        </div>
    )
}

export default ProductsPage;