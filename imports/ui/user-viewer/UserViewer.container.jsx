
import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
//import PureRenderMixin from 'react-addons-pure-render-mixin';
//import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, DefaultRoute, Redirect } from 'react-router';

// EXTERNAL LIBS
import Tracker from 'tracker-component';

// APPS COMPONENTS
import UserViewer from "./UserViewer.jsx";
//import Loading from "./../comon/loading/Loading.container.jsx";

// STYLES
import styles from "./UserViewer.styles.js";

// MONGO APIS
//import { AllusersMongo } from './../api/Allusers/Allusers.js';


export default class  UserViewerContainer extends Tracker.Component {

constructor(props){
	super(props);
	//this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);

	this.state = {
		canTest : false,
		styles : styles(props.route.stylesOptions),
	}
	
	 this.autorun(() => {	 
		Meteor.subscribe("allUsers");
		 Meteor.subscribe("userData");
		let user = Meteor.user() || false;
		var userList = Meteor.users.find({}).fetch();			 
		this.setState({
			userList : userList,
			currentUser: user,
		});		  
	  });


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
				{this.state.userList ? 
					<UserViewer 
						{...this.props}
						userList = {this.state.userList}
						styles={this.state.styles}
						currentUser={this.state.currentUser}
					/>:
					<Loading />
				}
			</div>
		);
	}
}
    