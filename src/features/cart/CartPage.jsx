import { useOutletContext } from 'react-router-dom';
import { CartItem } from './CartItem';
import { CartSummary } from './CartSummary';
import './styles/CartPage.css'

function CartPage() {

    const { cart, increaseQuantity, decreaseQuantity, countTotal } = useOutletContext();

    return(
        <div className="cart-page">
            <div className="left-cart section">
                {cart.length > 0 ? (
                <>
                <h1>My shopping bag</h1>
                <div className='cart-items'>
                    <CartItem 
                    cart={cart}
                    increaseQuantity={increaseQuantity}
                    decreaseQuantity={decreaseQuantity} />
                </div>
                </>
                ) : (
                    <div className='empty-title'>
                    <h1>No items in the bag :(</h1>
                    </div>
                )}
            </div>
            {cart.length > 0 && (
            <div className="right-cart section">
                <CartSummary cart={cart} countTotal={countTotal} />
            </div>
            )}
        </div>
    )
}

export default CartPage;