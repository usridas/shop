import './CheckoutItem.scss';

export const CheckoutItem = ({cartItem, cartItems, setCartItems, setCheckoutDisabled}) => {
    const itemPriceID = `${cartItem.itemID}-checkout-counter`;
    const counterID = `${cartItem.itemID}-checkout-price-counter`;
    let itemQuantity = cartItem.itemQuantity;
    const findIndex = cartItems.findIndex(item => cartItem.itemID === item.itemID);
    let totalItemCost = cartItem.itemPrice * cartItem.itemQuantity;
    let totalCost = 0;
    const decreaseNumber = () => {
        if (itemQuantity !== 0){
            itemQuantity--;
            cartItems[findIndex].itemQuantity = itemQuantity;
            setCartItems(cartItems);
            totalItemCost = cartItem.itemPrice * cartItem.itemQuantity;
            document.getElementById(itemPriceID).innerHTML = `$${totalItemCost.toFixed(2)}`;
            totalCost = 0;
            cartItems.forEach(item => {
                totalCost = totalCost + (item.itemPrice * item.itemQuantity);
            });
            document.getElementById('checkout-total-price').innerHTML = `$${totalCost.toFixed(2)}`;
        }
        document.getElementById(counterID).innerHTML = itemQuantity;
        let allItemsAreZero = cartItems.every(item => {
            if (item.itemQuantity !== 0)
            {return false;}
            else return true;
        })
        if (allItemsAreZero) {
            setCheckoutDisabled(true);
        }
    }
    const increaseNumber = () => {
        if (itemQuantity < 10) {
            itemQuantity++;
            cartItems[findIndex].itemQuantity = itemQuantity;
            setCartItems(cartItems);
            totalItemCost = cartItem.itemPrice * cartItem.itemQuantity;
            document.getElementById(itemPriceID).innerHTML = `$${totalItemCost.toFixed(2)}`;
            totalCost = 0;
            cartItems.forEach(item => {
                totalCost = totalCost + (item.itemPrice * item.itemQuantity);
            });
            document.getElementById('checkout-total-price').innerHTML = `$${totalCost.toFixed(2)}`;
        }
        document.getElementById(counterID).innerHTML = itemQuantity;
    }
    return (
        <div className='checkout-item-container'>
            <div className='checkout-item-title'>
                <p>{cartItem.itemName}</p>
                <p id={itemPriceID}>${totalItemCost.toFixed(2)}</p>
            </div>
            <div className='checkout-quantity-container'>
                <p className='checkout-quantity-label'>Quantity: </p>
                <div className='checkout-counter-container'>
                    <button className='checkout-counter-button' onClick={decreaseNumber}>-</button>
                    <p className='checkout-counter-label' id={counterID}>{itemQuantity}</p>
                    <button className='checkout-counter-button' onClick={increaseNumber}>+</button>
                </div>
            </div>
        </div>
    )
}