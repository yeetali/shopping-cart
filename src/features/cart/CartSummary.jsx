import './styles/CartSummary.css'

export function CartSummary() {
    return (
        <div className="cart-summary">
            <h2 className="summary-title">Order Summary</h2>
            
            <div className="summary-row">
                <span>Subtotal</span>
                <span>$120.00</span>
            </div>

            <div className="summary-row">
                <span>Shipping</span>
                <span>$10.00</span>
            </div>

            <div className="summary-row total">
                <span>Total</span>
                <span>$130.00</span>
            </div>

            <button className="checkout-btn">Proceed to Checkout</button>
        </div>

    )
}