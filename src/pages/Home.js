import './Home.scss';
import { ItemGrid } from '../components/ItemGrid';

export const Home = ({setTab, cartItems, setCartItems}) => {
  const checkoutOnClick = () => {
    setTab('Checkout');
  }
  return (
    <div>
      <div className='checkout-container' onClick={checkoutOnClick}><button className='checkout-button'>Checkout</button></div>
      <ItemGrid cartItems={cartItems} setCartItems={setCartItems}/>
    </div>
  );
}
