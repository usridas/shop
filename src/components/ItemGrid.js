import './Item.scss';
import { Item } from './Item'
import { itemList } from '../itemList';

export const ItemGrid = () => {
    const grid = itemList.map((item)=>{
        return <Item item={item} key={item.itemID}/>
    })
    return (
        <div className='item-grid'>
            {grid}
        </div>
    )
}