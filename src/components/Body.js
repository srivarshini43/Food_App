import RestaurantCard from "./RestaurantCard";
import { useState,useEffect,useContext } from "react";
import Shimmers from "./Shimmers";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
const Body=()=>{
    const [ListOfRestaurants,setListOfRestaurants]=useState([]);
    const [SearchText,setSearchText]=useState("");
    const [FilteredRestaurants, setFilteredRestaurants] = useState([]);
    //console.log("body rendered",ListOfRestaurants);
    useEffect(()=>{
       fetchData();
    },[]);
    const fetchData = async()=>{
        const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.2423833&lng=76.96038709999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json=await data.json();
        //console.log(json);
        setListOfRestaurants(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
        setFilteredRestaurants(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
        //console.log(json.data.cards[3].card.card.facetList);
    };
    //const[onlineStatus]=useOnlineStatus(); bcoz it is a bool value we cant iterate over it
    const onlineStatus=useOnlineStatus();
    if(onlineStatus===false)
        return(
            <h1>sry you are offline</h1>
        )
        const {loggedInUser,setUserName}=useContext(UserContext);
    return ListOfRestaurants.length===0?<Shimmers/>:(
        <div className="body">
            <div className="filter flex">
                <div className="search m-4 p-4">
                    <input data-testid="searchInput" type="text" className="border border-solid border-black" value={SearchText} onChange={(e)=>{setSearchText(e.target.value);}}/>
                    <button className="px-4 py-2 m-4 bg-green-100 rounded-lg"onClick={()=>
                        {
                            const filteredRes=ListOfRestaurants.filter((res)=>res.info.name.toLowerCase().includes(SearchText.toLowerCase()));
                            setFilteredRestaurants (filteredRes);
                        }}>Search</button>
                </div>
                <div className="search m-4 p-4 flex items-center ">
                <button className="px-7 py-2 bg-green-100 rounded-lg" 
                onClick={()=>{
                    const filterlist=ListOfRestaurants.filter((res)=>res.info.avgRating>4);
                    setFilteredRestaurants(filterlist);
                }}>Top Rated Restaurants</button>
                 <div className="flex items-center ml-5">
                        <label className="mr-2">User</label>
                        <input className="border border-black p-2" value={loggedInUser} onChange={(e)=>setUserName(e.target.value)}/>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap">

              {FilteredRestaurants.map((restaurant) =>
                 (<Link key={restaurant.info.id} 
                 to={"/restaurants/"+restaurant.info.id} className="no-underline">
                    <RestaurantCard  resObj={restaurant}/></Link>))}
             
            </div>
        </div>
    )
};

export default Body;