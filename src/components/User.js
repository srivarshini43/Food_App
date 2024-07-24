import { useState } from "react";
const User=(props)=>{
    const[count]=useState(0);//setting initial value
    const[count1]=useState(0);//creating more state variable
    return(
        <div className="user-card">
            <h1>count={count}</h1>
            <h1>count={count1}</h1>
            <h2>Name:{props.name}</h2>
            <h3>Location:cbe</h3>
            <h4>Contact:sruhjbjhv</h4>
        </div>
    );
};
export default User;