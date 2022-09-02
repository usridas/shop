import './Home.scss';
import { ItemGrid } from '../components/ItemGrid';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useScreenResolution } from '../utils/ScreenSize.tsx'

export const Home = ({setTab, cartItems, setCartItems, checkoutDisabled, setCheckoutDisabled}) => {
  const { isSmall } = useScreenResolution();
  const checkoutOnClick = () => {
    let filteredItems = cartItems.filter(item => item.itemQuantity !== 0);
    setCartItems(filteredItems);
    setTab('Checkout');
  }
  
  return (
    <div className='home-body'>
      {!isSmall && <div className='checkout-container'><button id='checkout-button' className='checkout-button' onClick={checkoutOnClick} disabled={checkoutDisabled}>Checkout</button></div>}
      {isSmall && <div className='checkout-icon-container'><button className='checkout-icon-bubble' onClick={checkoutOnClick} disabled={checkoutDisabled}><ShoppingCartIcon className='checkout-icon'/></button></div>}
      <ItemGrid cartItems={cartItems} setCartItems={setCartItems} setCheckoutDisabled={setCheckoutDisabled}/>
    </div>
  );
}
