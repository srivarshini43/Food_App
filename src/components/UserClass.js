import React from "react";
class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state={
            userInfo:{     //state variable
            name:"Str",
            location:"london",
            avatar_url:"htp://avatar.com"
            }
        };
        //console.log(this.props.name+"child constructor");
    }
    async componentDidMount(){
        //console.log(this.props.name+"child mount");
        const data =await fetch("https://api.github.com/users/SRI23VARS");
        const json=await data.json();
        this.setState({
            userInfo:json,
        }
    );
    console.log(json);
}
    render(){
        //const{name,location}=this.state.userInfo;
        // or can desturcture like this const{count}=this.count;//<h1>count:{count}</h1>
        //console.log("child render");
        const { name,location,avatar_url } = this.state.userInfo;
        return(
            <div className="user-card">
              
           <img src={avatar_url}/>
            <h2>{name}</h2>
            <h3>{location}</h3>
            <h4>Contact:sruhjbjhv</h4>
        </div> 
        );
    }
}
export default UserClass;