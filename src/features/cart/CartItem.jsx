import './styles/CartItem.css'

export function CartItem({ image, title, price, quantity }) {
    
    return(
        <div className="cart-item">
            {/* Product image */}
            <div className="cart-item-image">
                <img src={image} alt={title} />
            </div>

            {/* Product details */}
            <div className="cart-item-details">
                <h3 className="cart-item-title">{title}</h3>
                <p className="cart-item-price">€{price}</p>

                {/* Quantity controls */}
                <div className="cart-item-quantity">
                <button className="quantity-btn">−</button>
                <span className="quantity-value">{quantity}</span>
                <button className="quantity-btn">+</button>
                </div>
            </div>

            {/* Total price for this item */}
            <div className="cart-item-total">
                €{(price * quantity).toFixed(2)}
            </div>
        </div>
    )
}

export default CartItem;