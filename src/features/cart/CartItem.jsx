import './styles/CartItem.css'

export function CartItem({ cart, increaseQuantity, decreaseQuantity }) {
    
    return(
        <>
        {
            cart.map((item, i) => {
            return (
            <div key={i} className="cart-item">
            {/* Product image */}
            <div className="cart-item-image">
                <img src={item.image} alt={item.title} />
            </div>
            {/* Product details */}
            <div className="cart-item-details">
                <h3 className="cart-item-title">{item.title}</h3>
                <p className="cart-item-price">€{item.price}</p>

                {/* Quantity controls */}
                <div className="cart-item-quantity">
                <button className="quantity-btn" onClick={() => decreaseQuantity(item.id)}>-</button>
                <span className="quantity-value">{item.quantity}</span>
                <button className="quantity-btn" onClick={() => increaseQuantity(item.id)}>+</button>
                </div>
            </div>
            {/* Total price for this item */}
            <div className="cart-item-total">
                €{(item.price * item.quantity).toFixed(2)}
            </div>
            </div>
            )})
        }
        </>
    )
}

export default CartItem;