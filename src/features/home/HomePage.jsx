import './styles/HomePage.css'
import { HomeBanner } from '../../components/HomeBanner';
import ProductPreview from '../../components/ProductPreview';
import { useEffect, useState } from 'react';

function HomePage () {
    
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


    const previewProducts = products.reduce((prev, curr) => {
        if(!prev.find(p => p.category === curr.category)) {
            prev.push(curr)
        }
        return prev;
    }, [])
    
    return(
        <div className='home-page'>
            <HomeBanner />
            <ProductPreview products={previewProducts} />
        </div>
    )
}

export default HomePage;