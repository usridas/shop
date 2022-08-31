import './Checkout.scss';
import { CheckoutItem } from "../components/CheckoutItem"

export const Checkout = ({setTab, cartItems, setCartItems}) => {
    const homeOnClick = () => {
        setTab('Home');
      }
    const totalPriceID = 'checkout-total-price';
    let totalPrice = 0;
    cartItems.forEach(item => {
        totalPrice = totalPrice + (item.itemPrice * item.itemQuantity);
    });
    const checkoutItems = cartItems.map((item)=>{
        return <CheckoutItem cartItem={item} cartItems={cartItems} setCartItems={setCartItems}/>
    })
    return (
        <div className='checkout-body'>
            <div className='home-container' onClick={homeOnClick}><button className='home-button'>Go back</button></div>
            {checkoutItems}
            <hr className='checkout-horizontal-line'/>
            <div className='checkout-total-container'>
                <p>Order total</p>
                <p id={totalPriceID}>${totalPrice}</p>
            </div>
            <div className='payment-button-container'>
                <button className='payment-button'>Proceed to payment</button>
            </div>
        </div>
    )
}