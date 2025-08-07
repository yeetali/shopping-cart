import './styles/ProductCard.css'
function ProductCard ({ id, image, title, price }) {

    return (
        <div key={id} className="product-card">
            <img className='product-img' src={image} alt="" />
            <div className="card-description">
                <h3 className='title'>{title}</h3>
                <h3>{`${price}$`}</h3>
            </div>
            <button className='add-to-cart-btn'>Add to cart</button>
        </div>
    )
}

export default ProductCard;