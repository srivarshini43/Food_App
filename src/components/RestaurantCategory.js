import React, { useState } from 'react';
import ItemList from './ItemList';

const RestaurantCategory = ({ data,showItems,setShowIndex }) => {
    
    console.log('RestaurantCategory data:', data);

    // Check if categories exist and if itemCards are present in categories
    const hasCategories = data.categories && Array.isArray(data.categories) && data.categories.length > 0;
    
    // Determine item count based on available data structure
    const itemCount = data.itemCards ? data.itemCards.length : (
        hasCategories ? data.categories.reduce((acc, category) => {
            return acc + (category.itemCards ? category.itemCards.length : 0);
        }, 0) : 0
    );

    // Determine items to be passed to ItemList
    const items = data.itemCards || (
        hasCategories ? data.categories.reduce((acc, category) => {
            return acc.concat(category.itemCards || []);
        }, []) : []
    );
    
    // Log the items to debug
    //console.log('Items being passed to ItemList:', items);
  const handleClick=()=>{
    setShowIndex();
  }
    return (
        <div>
            <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
                <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                    <span className="font-bold text-lg">{data.title} ({itemCount})</span>
                    <span>&#9660;</span>
                </div>
                {showItems && <ItemList items={items} />}
            </div>
        </div>
    );
};

export default RestaurantCategory;
