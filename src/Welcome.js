import React from "react";


//class Welcome extends React.Component{
//		render(){
//			return( <h1> Welcome </h1> );
//		}

//}

let Welcome = (props)=>{
	// pros can't change it's immutable
	//this.state={
	//		message:"Hello Props..!"
	//	}
	return(<h1>Welcome {props.name} </h1>)
}

export default Welcome;