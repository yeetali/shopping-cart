import './styles/ProductCard.css'
import { useEffect, useState } from "react";

function ProductCard ({imageSrc, title, price, description}) {

    const [src, setSrc] = useState();
    const [cardTitle, setCardTitle] = useState();

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/1')
        .then(response => {
            return response.json();
        })
        .then(data => {
            setSrc(data.image);
            setCardTitle(data.title)
        });

    }, [])

    return (
        <div className="product-card">
            <div className='card-img'>
                <img className='product-img' src={src} alt="" />
            </div>
            <div className="card-description">
                <h3>{cardTitle}</h3>
            </div>
        </div>
    )
}

export default ProductCard;