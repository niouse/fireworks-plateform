
import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
//import PureRenderMixin from 'react-addons-pure-render-mixin';
//import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, DefaultRoute, Redirect } from 'react-router';

// EXTERNAL LIBS

import MapSimple from "./MapSimple.jsx";

import styles from "./MapSimple.styles.js";

export default class  MapSimpleContainer extends Component {

constructor(props){
	super(props);
	//this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	//console.log(props.stylesOptions)
	this.state = {
		canTest : false,
		styles : styles(props.stylesOptions),
	}



}

/*_______________________________________________________________________________________________________________
_________________________________________________________________________________________________________________  
_____________________________________________COMPONENT LIFE TIME_________________________________________________
_________________________________________________________________________________________________________________*/


	componentWillMount() { 

	}

	componentDidMount(){

	}

	componentWillReceiveProps(newProps) {

	}

	/*shouldComponentUpdate(){

	}*/

	componentDidUpdate(){

	}

	componentWillUnmount(){

	}	


/*_______________________________________________________________________________________________________________
_________________________________________________________________________________________________________________  
_____________________________________________COMPONENT METHODS___________________________________________________
_________________________________________________________________________________________________________________*/

	toggleStateBool(key){
		this.setState({
			[key] : !this.state[key]
		})
	}

	showMessage(message){
		this.setState({
			message : message,
			showMessage : true
		})
	}

	test(){

	}


/*_________________________________________________________________________________________________________________
___________________________________________________________________________________________________________________ 
_____________________________________________COMPONENT VIEWS_______________________________________________________
_________________________________________________________________________________________________________________*/



/*_________________________________________________________________________________________________________________
___________________________________________________________________________________________________________________  
_____________________________________________COMPONENT TEMPLATE____________________________________________________
_________________________________________________________________________________________________________________*/

	render() {
		const style=this.props.style || {width:"100%", height:"100%"}
		return  ( <div style={style}>
			{this.props.events  && this.props.events[0] ?
				
					<MapSimple 
						{...this.props}
						styles={this.state.styles}
					/>:
				<p>loading</p>}
			</div>
		);
	}
}
    