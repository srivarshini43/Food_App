import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component{
    constructor(props){
        super(props);
        console.log("parent constructor");
    }
    componentDidMount(){
        console.log("parent mount");
    }
    render(){
        console.log("parent render")
        return(
            <div>
            <h1>About</h1>
            <h1>namaste react</h1>
            <UserClass name="sri class" location="cbe"/>
            
            
        </div>
        );
    };
    
}

export default About;