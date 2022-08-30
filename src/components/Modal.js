import './Modal.scss';

export const Modal = ({item, cartItems}) => {
    let modalID = `${item.itemID}-modal`;
    let counterID = `${item.itemID}-counter`;
    let itemNameModalID = `${item.itemID}-item-name-modal`;
    let itemPriceModalID = `${item.itemID}-item-price-modal`;
    let imagePathModalID = `${item.itemID}-image-path-modal`;
    let addToCartButtonID = `${item.itemID}-add-to-cart-button`;
    let addToCartDisabled = true;
    let itemQuantity = 0;
    const closeModal = () => {
        let modalElement = document.getElementById(modalID);
        itemQuantity = 0;
        document.getElementById(counterID).innerHTML = itemQuantity;
        modalElement.style.display = 'none';
    };
    const decreaseNumber = () => {
        if (itemQuantity !== 0){
            itemQuantity--;
            addToCartDisabled = false;
        }
        if (itemQuantity === 0) {
            addToCartDisabled = true;
        }
        document.getElementById(addToCartButtonID).disabled = addToCartDisabled;
        document.getElementById(counterID).innerHTML = itemQuantity;
    }
    const increaseNumber = () => {
        if (itemQuantity < 10) {
            itemQuantity++;
        }
        if (itemQuantity === 0) {
            addToCartDisabled = true;
        }
        else {
            addToCartDisabled = false;
        }
        document.getElementById(addToCartButtonID).disabled = addToCartDisabled;
        document.getElementById(counterID).innerHTML = itemQuantity;
    }
    const addToCartOnClick = () => {
        if (cartItems.length) {
            const findIndex = cartItems.findIndex(cartItem => item.itemID === cartItem.itemID);
            if (findIndex !== -1) {
                cartItems[findIndex].itemQuantity += itemQuantity;
            }
            else {
                const addItem = {
                    itemID: item.itemID,
                    itemPrice: item.itemPrice,
                    itemQuantity: itemQuantity
                };
                cartItems.push(addItem);
            }
        }
        else {
            const addItem = {
                itemID: item.itemID,
                itemPrice: item.itemPrice,
                itemQuantity: itemQuantity
            };
            cartItems.push(addItem);
        }
        itemQuantity = 0;
        document.getElementById(counterID).innerHTML = itemQuantity;
        addToCartDisabled = true;
        document.getElementById(addToCartButtonID).disabled = addToCartDisabled;
    }

    return (
        <div id={modalID} className='modal'>
            <div className='modal-container'>
                <span className="close" onClick={closeModal}>&times;</span>
                <img id={imagePathModalID} src={item.imagePath} alt="logo" />
                <p id={itemNameModalID}>{item.itemName}</p>
                <p id={itemPriceModalID}>{item.itemPrice}</p>
                <div className='modal-footer'>
                    <div className='counter-container'>
                        <button className='counter-button' onClick={decreaseNumber}>-</button>
                        <p className='counter-label' id={counterID}>{itemQuantity}</p>
                        <button className='counter-button' onClick={increaseNumber}>+</button>
                    </div>
                    <button id={addToCartButtonID} className='cart-button' onClick={addToCartOnClick}>Add to cart</button>
                </div>
            </div>
        </div>
    )
}