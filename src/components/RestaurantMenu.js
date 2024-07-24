
import Shimmers from "./Shimmers";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";
const RestaurantMenu=()=>{
    const {resId}=useParams();
    const resInfo=useRestaurantMenu(resId);
    const[showIndex,setShowIndex]=useState(null);
    if(resInfo===null) return <Shimmers/>
    console.log("resInfo:", resInfo);
    const{name,cuisines,costForTwoMessage,cloudinaryImageId}=resInfo?.cards[2]?.card?.card?.info;
    const{itemCards}=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
    const categoriess=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=>c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"||
        c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory");
        console.log(categoriess);
    
    return (
        <div data-testid="resmenu" className="text-center">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <p className="font-bold text-2xl">{cuisines.join(",")}-{costForTwoMessage}</p>
            {categoriess.map((category,index)=>(
                <RestaurantCategory key={category?.card?.card.title}data={category?.card?.card} //each rescategory(starter,newly added) has its own state so the functionality(if i expand one accordian another accordian should automatically collapse). so as said each rescategory has its own state and unaware of their own state we just pass the control of the state of the res castegries to their parent reasetaurant menu.now the rescategory has not has its own state 
            showItems={index===showIndex?true:false}
            setShowIndex={()=>setShowIndex(index)}/>
          ))}       
            
        </div>
    );
};
export default RestaurantMenu;