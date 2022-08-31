import './Home.scss';
import { ItemGrid } from '../components/ItemGrid';

export const Home = ({setTab, cartItems, setCartItems}) => {
  const checkoutOnClick = () => {
    let filteredItems = cartItems.filter(item => item.itemQuantity !== 0);
    setCartItems(filteredItems);
    setTab('Checkout');
  }
  return (
    <div className='home-body'>
      <div className='checkout-container' onClick={checkoutOnClick}><button className='checkout-button'>Checkout</button></div>
      <ItemGrid cartItems={cartItems} setCartItems={setCartItems}/>
    </div>
  );
}
