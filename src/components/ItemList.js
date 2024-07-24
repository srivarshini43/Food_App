import React from 'react';
import { CDN_URL } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addItem } from '../utils/cartSlice';
// Component to render a list of items
const ItemList = ({ items }) => {
    // Log items to debug and ensure correct data structure
    console.log('ItemList items:', items);

    // Check if items is defined and is an array
    if (!items || !Array.isArray(items) || items.length === 0) {
        return <div>No items available</div>; // Placeholder if items are not available
    }
    const dispatch=useDispatch();
 const handleAddItem=(item)=>{
    dispatch(addItem(item));
 };
    return (
        <div>
            {items.map((item, index) => (
                <div key={index} className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between">
                   
                    <div className='w-9/12'>
                    <div className='py-2'>
                        <span>{item.card.info.name}</span>
                        <span> - ₹ {item.card.info.price?item.card.info.price/100:item.card.info.defaultPrice/100}</span>
                    </div>
                    <p className='text-xs'>{item.card.info.description}</p>
                </div>
                <div className='w-3/12 p-4 relative'>
                {item.card.info.imageId && (
                            <img src={CDN_URL + item.card.info.imageId} className='w-full' />
                        )}
                        <button className='absolute bottom-0 left-1/2 transform -translate-x-1/2 p-1 my-0 rounded-lg bg-black text-white shadow-lg z-10'
                        onClick={()=>handleAddItem(item)}>
                            Add +
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ItemList;
