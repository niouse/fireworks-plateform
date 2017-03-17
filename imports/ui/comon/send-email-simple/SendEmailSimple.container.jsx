
import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
//import PureRenderMixin from 'react-addons-pure-render-mixin';
//import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, DefaultRoute, Redirect } from 'react-router';

// EXTERNAL LIBS
import Tracker from 'tracker-component';

import SendEmailSimple from "./SendEmailSimple.jsx";

import styles from "./SendEmailSimple.styles.js";

export default class  SendEmailSimpleContainer extends Tracker.Component {

constructor(props){
	super(props);
	//this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	this.state = {
		canTest : false,
		styles : styles(props.stylesOptions),
		userList : false
	}
	
	this.autorun(()=>{          
		Meteor.subscribe('usersList');
		var usersList = Meteor.users.find({}).fetch()
		this.setState({
			usersList : usersList
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
				{this.state.usersList ? <SendEmailSimple 
					{...this.props}
					styles={this.state.styles}
					usersList={this.state.usersList}
				/>:
				<p>loading</p>}
			</div>
		);
	}
}
    