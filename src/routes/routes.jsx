import App from '../App';
import ProductsPage from '../features/products/ProductsPage'
import CartPage from '../features/cart/CartPage';

const routes = [
    {
        path: '/',
        element: <App />
    },
    {
        path: 'products',
        element: <ProductsPage />
    },
    {
        path: 'cart',
        element: <CartPage />
    }
]

export default routes;