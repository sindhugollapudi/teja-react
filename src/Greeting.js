import React from 'react';
import Welcome from './Welcome'

let Greeting=()=>{
	return(
		<div>
		<h1>Greeting</h1>
		<Welcome name="Sindhu"></Welcome>
		<Welcome name="Priya"></Welcome>
		<Welcome name="Bharath"></Welcome>
		<Welcome name="Tejaswi"></Welcome>
		</div>
		);
}

export default Greeting;