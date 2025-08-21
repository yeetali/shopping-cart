import './styles/CartSummary.css'

export function CartSummary({ cart }) {
    let total = cart.reduce((acc, curr) => acc + curr.quantity * curr.price, 0);
    let shipping = 10;
    return (
        <div className="cart-summary">
            <h2 className="summary-title">Order Summary</h2>
            
            <div className="summary-row">
                <span>Subtotal</span>
                <span>${(total).toFixed(2)}</span>
            </div>

            <div className="summary-row">
                <span>Shipping</span>
                <span>${(shipping).toFixed(2)}</span>
            </div>

            <div className="summary-row total">
                <span>Total</span>
                <span>${(total + shipping).toFixed(2)}</span>
            </div>

            <button className="checkout-btn">Proceed to Checkout</button>
        </div>

    )
}