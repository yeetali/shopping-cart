import { CartItem } from './CartItem';
import { CartSummary } from './CartSummary';
import './styles/CartPage.css'

function CartPage() {
    
    return(
        <div className="cart-page">
            <div className="left-cart section">
                <h1>My shopping cart</h1>
                <div className='cart-items'>
                    <CartItem />
                </div>
            </div>
            <div className="right-cart section">
                <CartSummary />
            </div>
        </div>
    )
}

export default CartPage;