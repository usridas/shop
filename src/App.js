import { useState } from 'react';
import './App.scss';
import { Checkout } from './pages/Checkout';
import { Home } from './pages/Home';

function App() {
  let cartItemsArray = [];
  const [cartItems, setCartItems] = useState(cartItemsArray);
  const [tab, setTab] = useState('Home');
  if(tab === 'Home') {
    return (
      <Home setTab={setTab} cartItems={cartItemsArray} setCartItems={setCartItems}/>
    );
  }
  if(tab === 'Checkout') {
    console.log("app cart: ", cartItems)
    return (
      <Checkout cartItems={cartItems}/>
    )
  }
}

export default App;
