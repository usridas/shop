import './Item.scss';
import { Modal } from './Modal';

export const Item = ({item}) => {
    let modalID = `${item.itemID}-modal`;
    let itemNameID = `${item.itemID}-item-name`;
    let itemPriceID = `${item.itemID}-item-price`;
    let imagePathID = `${item.itemID}-image-path`;
    let itemNameModalID = `${item.itemID}-item-name-modal`;
    let itemPriceModalID = `${item.itemID}-item-price-modal`;
    let imagePathModalID = `${item.itemID}-image-path-modal`;
    const setModal = () => {
        let modalElement = document.getElementById(modalID);
        document.getElementById(itemNameModalID).innerHTML = item.itemName;
        document.getElementById(itemPriceModalID).innerHTML = item.itemPrice;
        document.getElementById(imagePathModalID).innerHTML = item.imagePath;
        modalElement.style.display = 'block';
    };
    return (
    <div>
        <div className='item-container'>
            <img id={imagePathID} src={item.imagePath} alt={item.itemName} />
            <p id={itemNameID}>{item.itemName}</p>
            <div className='item-footer'>
                <p id={itemPriceID}>{item.itemPrice}</p>
                <button onClick={setModal}>Buy</button>
            </div>
        </div>
        <Modal item={item}/>
    </div>
    )
}