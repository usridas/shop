import './Home.scss';
import { ItemGrid } from '../components/ItemGrid';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useScreenResolution } from '../utils/ScreenSize.tsx'

export const Home = ({setTab, cartItems, setCartItems}) => {
  const { isSmall } = useScreenResolution();
  const checkoutOnClick = () => {
    let filteredItems = cartItems.filter(item => item.itemQuantity !== 0);
    setCartItems(filteredItems);
    setTab('Checkout');
  }
  
  return (
    <div className='home-body'>
      {!isSmall && <div className='checkout-container' onClick={checkoutOnClick}><button className='checkout-button'>Checkout</button></div>}
      {isSmall && <button className='checkout-icon-container' onClick={checkoutOnClick}><div className='checkout-icon-bubble'><ShoppingCartIcon className='checkout-icon'/></div></button>}
      <ItemGrid cartItems={cartItems} setCartItems={setCartItems}/>
    </div>
  );
}
