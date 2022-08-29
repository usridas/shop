import './Modal.scss';

export const Modal = ({item}) => {
    let modalID = `${item.itemID}-modal`;
    let counterID = `${item.itemID}-counter`;
    let itemNameModalID = `${item.itemID}-item-name-modal`;
    let itemPriceModalID = `${item.itemID}-item-price-modal`;
    let imagePathModalID = `${item.itemID}-image-path-modal`;
    const closeModal = () => {
        let modalElement = document.getElementById(modalID);
        itemNumber = 0;
        document.getElementById(counterID).innerHTML = itemNumber;
        modalElement.style.display = 'none';
    };
    let itemNumber = 0;
    const decreaseNumber = () => {
        if (itemNumber !== 0)
        itemNumber--;
        document.getElementById(counterID).innerHTML = itemNumber;
    }
    const increaseNumber = () => {
        if (itemNumber < 10)
        itemNumber++;
        document.getElementById(counterID).innerHTML = itemNumber;
    }

    return (
        <div id={modalID} className='modal'>
            <div className='modal-container'>
                <span className="close" onClick={closeModal}>&times;</span>
                <img id={imagePathModalID} src={item.imagePath} alt="logo" />
                <p id={itemNameModalID}>{item.itemName}</p>
                <p id={itemPriceModalID}>{item.itemPrice}</p>
                <div className='modal-footer'>
                    <div className='modal-item-number'>
                        <button className='counter-button' onClick={decreaseNumber}>-</button>
                        <p className='counter-label' id={counterID}>{itemNumber}</p>
                        <button className='counter-button' onClick={increaseNumber}>+</button>
                    </div>
                    <button className='cart-button'>Add to cart</button>
                </div>
            </div>
        </div>
    )
}