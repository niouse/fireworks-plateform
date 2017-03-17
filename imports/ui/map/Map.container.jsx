
import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
//import PureRenderMixin from 'react-addons-pure-render-mixin';
//import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, DefaultRoute, Redirect } from 'react-router';

// EXTERNAL LIBS
import Tracker from 'tracker-component';

import Map from "./Map.jsx";

import styles from "./Map.styles.js";

import { eventsMongo } from './../../api/events/events.js';

export default class  MapContainer extends Tracker.Component {

constructor(props){
	super(props);
	//this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);

	this.state = {
		canTest : false,
		styles : styles(props.route.stylesOptions),
	}
	
	this.autorun(()=>{          
		Meteor.subscribe('events');
		var events = eventsMongo.find({}).fetch()
		//console.log(events)
		this.setState({
			events : events,
			users : Meteor.users.find({}).fetch()
		})

	})



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
		return  (
			<div style={style}>
				{this.state.events ? 
					<Map 
						{...this.props}
						events = {this.state.events}
						users = {this.state.users}
						styles={this.state.styles}
						stylesOptions={this.props.route.stylesOptions}
					/>:
					<p>loading</p>
				}
			</div>
		);
	}
}
    