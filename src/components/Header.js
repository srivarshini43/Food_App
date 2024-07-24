import { CDN_LOGO } from "../utils/constants";
import { useState,useEffect,useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const Header=()=>{
    const[btnName,setbtnName]=useState("Login");
    const onlineStatus=useOnlineStatus();
    const {loggedInUser} = useContext(UserContext);
    //console.log("header");
    //useEffect(()=>{console.log("useEffect");},[btnName])
    const cartItems=useSelector((store)=>store.cart.items); //subscribing to store using selector
    return(
        <div className="flex justify-between items-center p-4  shadow-lg">
          <div className="logo-container">
              <img className="w-24" src={CDN_LOGO}/>
          </div>
          <div className="">
             <ul className="flex space-x-4 items-center ">
                <li>online Status:{onlineStatus?"🟢":"🔴"}</li>
                <li><Link className="no-underline" to="/">Home</Link></li>
                <li><Link className="no-underline" to="/about">About Us</Link></li>
                <li><Link className="no-underline" to="/contact">Contact Us</Link></li>
                <li><Link className="no-underline" to="/grocery">Grocery</Link></li>
                <li><Link className="no-underline" to="/cart">Cart({cartItems.length})</Link></li>
                <button className="Login" onClick={()=>{
                     btnName==="Login"?setbtnName("Logout"):setbtnName("Login");
                    console.log(btnName);
                }}>{btnName}</button>
                <li className="no-underline font-bold">{loggedInUser}</li>
             </ul>
          </div>  
        </div>
    );
};

export default Header;