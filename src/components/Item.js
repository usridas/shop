import './Item.scss';
import { Modal } from './Modal';

export const Item = ({item, cartItems, setCartItems, setCheckoutDisabled}) => {
    let modalID = `${item.itemID}-modal`;
    let itemNameID = `${item.itemID}-item-name`;
    let itemPriceID = `${item.itemID}-item-price`;
    let imagePathID = `${item.itemID}-image-path`;
    let itemNameModalID = `${item.itemID}-item-name-modal`;
    let itemPriceModalID = `${item.itemID}-item-price-modal`;
    let imagePathModalID = `${item.itemID}-image-path-modal`;
    let addToCartButtonID = `${item.itemID}-add-to-cart-button`;
    const setModal = () => {
        let modalElement = document.getElementById(modalID);
        document.getElementById(itemNameModalID).innerHTML = item.itemName;
        document.getElementById(itemPriceModalID).innerHTML = `$${item.itemPrice.toFixed(2)}`;
        document.getElementById(imagePathModalID).innerHTML = item.imagePath;
        document.getElementById(addToCartButtonID).disabled = true;
        modalElement.style.display = 'block';
    };
    return (
    <div>
        <div className='item-container'>
            <img id={imagePathID} src={item.imagePath} alt={item.itemName} className='image-container' />
            <p id={itemNameID} className='item-name'>{item.itemName}</p>
            <div className='item-footer'>
                <p id={itemPriceID} className='item-price'>${item.itemPrice.toFixed(2)}</p>
                <button className='item-button' onClick={setModal}>Buy</button>
            </div>
        </div>
        <Modal item={item} cartItems={cartItems} setCartItems={setCartItems} setCheckoutDisabled={setCheckoutDisabled}/>
    </div>
    )
}