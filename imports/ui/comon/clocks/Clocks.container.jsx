import React, { Component } from 'react';

import Clocks from "./Clocks.jsx";
import styles from "./Clocks.styles.js"


export default class ClocksContainer extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			styles : styles(props.stylesOptions),
		}
	}
	
	/*_______________________________________________________________________________________________________________
_________________________________________________________________________________________________________________  
_____________________________________________COMPONENT LIFE TIME_________________________________________________
_________________________________________________________________________________________________________________*/

	componentDidMount() {
	}						

	componentWillReceiveProps(newProps) {
	}
	
	
	componentWillUnmount(){
		//Meteor.subscribe("sub").stop();
	}
	
	
	test(){
		//console.log(this.state.test)
	}
	
	render () {
		const style=this.props.style || {width:"100%", height:"100%"}
		return (
			<Clocks 
				{...this.props}
				styles={this.state.styles}
			/>
		)
	}
}