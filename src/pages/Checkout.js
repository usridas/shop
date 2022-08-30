import './Checkout.scss';
import { CheckoutItem } from "../components/CheckoutItem"

export const Checkout = ({cartItems}) => {
    let totalPrice = 0;
    cartItems.forEach(item => {
        totalPrice = totalPrice + (item.itemPrice * item.itemQuantity);
    });
    const checkoutItems = cartItems.map((item)=>{
        return <CheckoutItem cartItem={item}/>
    })
    return (
        <div>
            {checkoutItems}
            <hr className='checkout-horizontal-line'/>
            <div className='checkout-total-container'>
                <p>Order total</p>
                <p>${totalPrice}</p>
            </div>
        </div>
    )
}