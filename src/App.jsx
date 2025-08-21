import Header from './components/Header';
import Footer from './components/Footer';
import './App.css'
import { Outlet } from 'react-router-dom'
import { useState } from 'react';

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(item) {
      let product = cart.find(i => i.id === item.id);
      if(!product) {
        const addedItem = {...item, quantity: 1};
        setCart(prevState => ([
          ...prevState,
          addedItem
        ]))
      } else {
        setCart(prevCart => (
          prevCart.map(product => {
            if(product.id === item.id) {
              return {...product, quantity: product.quantity + 1}
            }
            return product;
          })
        ))
      }
  }

  function increaseQuantity(id) {
    let product = cart.find(i => id === i.id);
    setCart(prevCart => (
      prevCart.map(item => {
        if(item.id === product.id) {
          return {...item, quantity: item.quantity + 1}
        }
        return item;
      })
    ))
  }

  function decreaseQuantity(id) {
    let product = cart.find(i => id === i.id);
    let newCart;
    if(!product) {
      return;
    }
    if(product.quantity > 1) {
      newCart = cart.map(item => {
        if(product.id === item.id) {
          return {...item, quantity: item.quantity - 1};
        } else {
          return item;
        }
      })
    } else if(product.quantity == 1) {
      newCart = cart.filter(item => item.id !== id);
    }
    setCart(newCart);
  }

  return (
    <>
      <div className='app-container'>
        <Header />
        <main className='container'>
          <Outlet context={{
            cart, 
            addToCart, 
            increaseQuantity, 
            decreaseQuantity }} />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
