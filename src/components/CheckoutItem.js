import './CheckoutItem.scss';

export const CheckoutItem = ({cartItem, cartItems, setCartItems}) => {
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
            document.getElementById(itemPriceID).innerHTML = `$${totalItemCost}`;
            totalCost = 0;
            cartItems.forEach(item => {
                totalCost = totalCost + (item.itemPrice * item.itemQuantity);
            });
            document.getElementById('checkout-total-price').innerHTML = `$${totalCost}`;
            console.log("Item decrease: ", cartItems);
        }
        document.getElementById(counterID).innerHTML = itemQuantity;
    }
    const increaseNumber = () => {
        if (itemQuantity < 10) {
            itemQuantity++;
            cartItems[findIndex].itemQuantity = itemQuantity;
            setCartItems(cartItems);
            totalItemCost = cartItem.itemPrice * cartItem.itemQuantity;
            document.getElementById(itemPriceID).innerHTML = `$${totalItemCost}`;
            totalCost = 0;
            cartItems.forEach(item => {
                totalCost = totalCost + (item.itemPrice * item.itemQuantity);
            });
            document.getElementById('checkout-total-price').innerHTML = `$${totalCost}`;
            console.log("Item increase: ", cartItems);
        }
        document.getElementById(counterID).innerHTML = itemQuantity;
    }
    return (
        <div className='checkout-item-container'>
            <div className='checkout-item-title'>
                <p>{cartItem.itemName}</p>
                <p id={itemPriceID}>${totalItemCost}</p>
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