import './App.scss';
import { ItemGrid } from './components/ItemGrid';

function App() {
  let cartItems = [];
  const checkoutOnClick = () => {
    console.log("CART: ", cartItems);
  }
  return (
    <div>
      <div className='checkout-container' onClick={checkoutOnClick}><button className='checkout-button'>Checkout</button></div>
      <ItemGrid cartItems={cartItems}/>
    </div>
  );
}

export default App;
