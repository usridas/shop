import './Item.scss';
import { Item } from './Item'
import { itemList } from '../itemList';

export const ItemGrid = ({cartItems, setCartItems}) => {
    const grid = itemList.map((item)=>{
        return <Item item={item} key={item.itemID} cartItems={cartItems} setCartItems={setCartItems}/>
    });
    return (
        <div className='item-grid'>
            {grid}
        </div>
    )
}