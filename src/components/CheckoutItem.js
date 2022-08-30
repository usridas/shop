import './CheckoutItem.scss';

export const CheckoutItem = ({cartItem}) => {
    let itemQuantity = cartItem.itemQuantity;
    const counterID = `${cartItem.itemID}-checkout-counter`;
    const decreaseNumber = () => {
        if (itemQuantity !== 0){
            itemQuantity--;
        }
        if (itemQuantity === 0) {
        }
        document.getElementById(counterID).innerHTML = itemQuantity;
    }
    const increaseNumber = () => {
        if (itemQuantity < 10) {
            itemQuantity++;
        }
        document.getElementById(counterID).innerHTML = itemQuantity;
    }
    return (
        <div className='checkout-item-container'>
            <div className='checkout-item-title'>
                <p>{cartItem.itemName}</p>
                <p>${cartItem.itemPrice * cartItem.itemQuantity}</p>
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