import { useState } from 'react';
import './App.scss';
import { Checkout } from './pages/Checkout';
import { Home } from './pages/Home';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [tab, setTab] = useState('Home');
  if(tab === 'Home') {
    return (
      <Home setTab={setTab} cartItems={cartItems} setCartItems={setCartItems}/>
    );
  }
  if(tab === 'Checkout') {
    return (
      <Checkout setTab={setTab} cartItems={cartItems} setCartItems={setCartItems}/>
    )
  }
}

export default App;
