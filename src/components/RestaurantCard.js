import { CDN_URL } from "../utils/constants";

 export const RestaurantCard=(props)=>{
    const{resObj}=props;
    
    const{
     cloudinaryImageId,
     name,
     cuisines,
     avgRating,
     costForTwo,
     deliveryTime
    }=resObj?.info;
      return(
         <div data-testid="rescards" className="m-4 p-4 w-[250px] break-words rounded-lg bg-gray-100 hover:bg-gray-200" >
             <img className=" w-[200px] rounded-lg" alt="res-logo" src={CDN_URL+cloudinaryImageId}/>
             <h3 className="font-bold py-4">{name}</h3>
             <h4>{cuisines.join(",")}</h4>
             <h4>{avgRating}</h4>
             <h4>{costForTwo}</h4>
             <h4>{deliveryTime}</h4>
         </div>
      )
 };

 export default RestaurantCard;