import { useContext, useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card';
import CartItem from './components/CartItem';
import ProductItem from './components/ProductItem';
import { CartContext } from './context/cart.context';
import axios from 'axios';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

function App() {
  const [products, setProducts] = useState([]);
  const { cart, calculateTotalPrice } = useContext(CartContext);

  useEffect(function () {
    async function getProducts() {
      try {
        const res = await axios.get("https://g-sneaker-server-3.onrender.com/api/v1/products");
        setProducts(res.data.data);
      } catch (error) {
        alert(error.response.data.message);
      }
    }

    getProducts();
  }, [])

  return (
    <div className="App w-screen h-full min-h-screen flex items-center justify-center py-[20px]">
      <div className="bottom-0 fixed w-full h-2/3 bg-[--color-main-yellow]">
        <div className="custom-shape-divider-top">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M741,116.23C291,117.43,0,27.57,0,6V120H1200V6C1200,27.93,1186.4,119.83,741,116.23Z" className="shape-fill"></path>
          </svg>
        </div>
      </div>
      <div className='flex h-full items-center justify-center'>
        <div className='grid grid-cols-1 md:grid-cols-2 text-center gap-[40px]'>
          <Card header="Our Products" content={products?.map(product => <ProductItem product={product} key={product.id} />)} />

          <Card
            header="Your cart"
            isCart={true}
            totalPrice={calculateTotalPrice().toFixed(2)}
            content={
              cart?.length > 0 ? <TransitionGroup className="space-y-[40px]" component="div">
                {cart?.map(item => <CSSTransition key={item.id} timeout={700} classNames="item">
                  <CartItem item={item} />
                </CSSTransition>
                )}
              </TransitionGroup> : <p className='text-[12px] text-left text-[--color-grey-500]'>Your cart is empty.</p>
            }
          />
        </div>
      </div>
    </div>
  );
}

export default App;
