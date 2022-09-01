import { useState } from 'react';
import './App.scss';
import { Checkout } from './pages/Checkout';
import { Home } from './pages/Home';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [tab, setTab] = useState('Home');
  if(tab === 'Home') {
    return (
      <div>
        <p className='title'>uma doodles</p>
        <Home setTab={setTab} cartItems={cartItems} setCartItems={setCartItems}/>
      </div>
    );
  }
  if(tab === 'Checkout') {
    return (
      <div>
        <p className='title'>uma doodles</p>
        <Checkout setTab={setTab} cartItems={cartItems} setCartItems={setCartItems}/>
      </div>
    )
  }
}

export default App;
