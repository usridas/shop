import './Checkout.scss';
import { CheckoutItem } from "../components/CheckoutItem"
import { useScreenResolution } from '../utils/ScreenSize.tsx';
import HomeIcon from '@mui/icons-material/Home';

export const Checkout = ({setTab, cartItems, setCartItems, setCheckoutDisabled}) => {
    const { isSmall } = useScreenResolution();
    const homeOnClick = () => {
        setTab('Home');
      }
    const totalPriceID = 'checkout-total-price';
    let totalPrice = 0;
    cartItems.forEach(item => {
        totalPrice = totalPrice + (item.itemPrice * item.itemQuantity);
    });
    const checkoutItems = cartItems.map((item)=>{
        return <CheckoutItem key={item.itemID} cartItem={item} cartItems={cartItems} setCartItems={setCartItems} setCheckoutDisabled={setCheckoutDisabled}/>
    })
    return (
        <div className='checkout-body'>
            {!isSmall && <div className='home-container'><button className='home-button' onClick={homeOnClick}>Go back</button></div>}
            {isSmall && <button className='home-icon-container' onClick={homeOnClick}><div className='home-icon-bubble'><HomeIcon className='home-icon'/></div></button>}
            {checkoutItems}
            <hr className='checkout-horizontal-line'/>
            <div className='checkout-total-container'>
                <p>Order total</p>
                <p id={totalPriceID}>${totalPrice.toFixed(2)}</p>
            </div>
            <div className='payment-button-container'>
                <button className='payment-button'>Proceed to payment</button>
            </div>
        </div>
    )
}