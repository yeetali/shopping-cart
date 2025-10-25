import './styles/ProductPreview.css'
import ProductCard from './ProductCard'

export default function ProductPreview({ products, addToCart }) {

    return(
        <section className="product-preview-section">
            <div className='content'>
            <h1 className='product-preview-title'>Featured Products</h1>
            <div className='product-cards'>
                {products.map((product) => {
                    return (
                    <ProductCard 
                    key={product.id}
                    id={product.id}
                    image={product.image}
                    title={product.title}
                    price={product.price}
                    addToCart={addToCart}/>
                )
                })}
            </div>
            </div>
        </section>
    )
}