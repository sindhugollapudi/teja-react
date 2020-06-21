import React,{useState} from 'react';
class Counter extends React.Component{
	render(){
		return(
			<div>
			<h2> {this.props.name} </h2>
			<h2> {this.props.age} </h2>
			</div>
			)
	}
}
export default Counter;