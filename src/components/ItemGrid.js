import './Item.scss';
import { Item } from './Item'
import { itemList } from '../itemList';

export const ItemGrid = ({cartItems, setCartItems, setCheckoutDisabled}) => {
    const grid = itemList.map((item)=>{
        return <Item item={item} key={item.itemID} cartItems={cartItems} setCartItems={setCartItems} setCheckoutDisabled={setCheckoutDisabled}/>
    });
    return (
        <div className='item-grid'>
            {grid}
        </div>
    )
}