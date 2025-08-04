import App from '../App';
import ProductsPage from '../features/products/ProductsPage'
import CartPage from '../features/cart/CartPage';
import HomePage from '../features/home/HomePage';

const routes = [
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <HomePage />
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
    },
]

export default routes;