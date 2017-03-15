import React, { Component } from 'react';
//import PureRenderMixin from 'react-addons-pure-render-mixin';
import {browserHistory } from 'react-router';

// EXTERNAL LIBS
//import moment from 'moment';

// APP COMPONENTS
import ToolMenu from "./../comon/tool-menu/ToolMenu.container.jsx";
import SideFinder from "./../comon/side-finder/SideFinder.container.jsx";
import UserFinder from "./../comon/user-finder/UserFinder.container.jsx";
import UserDetails from "./../comon/user-details/UserDetails.container.jsx";

//MATERIAL COMPNENTS
import Drawer from 'material-ui/Drawer';
import FloatingActionButton from 'material-ui/FloatingActionButton';
//import Dialog from 'material-ui/Dialog';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

//MATERIAL ICONS
import PlayArrow from 'material-ui/svg-icons/av/play-arrow.js';
import Stop from 'material-ui/svg-icons/av/stop.js';
import Pause from 'material-ui/svg-icons/av/pause.js';
import FiberManualRecord from 'material-ui/svg-icons/av/fiber-manual-record.js';
import Refresh from 'material-ui/svg-icons/navigation/refresh.js';
import ImportExport from 'material-ui/svg-icons/communication/import-export.js';
import Settings from 'material-ui/svg-icons/action/settings.js';
import Save from 'material-ui/svg-icons/content/save.js';



export default class  UserViewer extends Component {

	constructor(props){
		super(props);
		//this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
		//console.log(props.userList)
		this.state = {
			canTest : false,
			message : "",
			currentUser : props.currentUser,
			openSearch : false,
			userList : this.transformItemList(props.userList)
		}
	}

/*_______________________________________________________________________________________________________________
_________________________________________________________________________________________________________________  
_____________________________________________COMPONENT LIFE TIME_________________________________________________
_________________________________________________________________________________________________________________*/


	componentWillMount() { 

	}

	componentDidMount(){
		console.log(Meteor.user())
	}

	componentWillReceiveProps(newProps) {
		this.setState({
			userList : this.transformItemList(newProps.userList)
		})
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
	
	transformItemList(list){
		let transformedList = [];
		list.forEach((x)=>{
			let item = {
				id : x._id,
				primaryText : x.username,
				secondaryText : x.email,
				leftIcon : <img src={x.photo || './comon/defaultProfile.png'} />
			}
			transformedList.push(item)
		})
		
		return transformedList
	}
	
	showUserDetails(user){
		this.setState({
			currentUser : user
		})
	}
	
	findAndShowUser(userId){
		let user = Meteor.users.find({_id : userId}).fetch()[0];
		this.showUserDetails(user)
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
		const styles = this.props.styles
		return  (
			<div className="container" style={styles.container}>
				<div style={styles.header}>
					<ToolMenu 
						stylesOptions={this.props.route.stylesOptions}
						title="LA TEAM"
						openSearch={()=>this.toggleStateBool('openSearch')}
						openAdd={()=>browserHistory.push("/signup")}
						goToHelp={()=>browserHistory.push("/help/babou")}
					/>
			    </div>
				
				<div style={styles.content}>
					<div style={styles.userFinder}>
						<UserFinder 
							stylesOptions={this.props.route.stylesOptions}
							itemList={this.props.userList} 
							showUserDetails={(user)=>this.showUserDetails(user)}
						/>
					</div>

					<div style={styles.userDetails}>
						<UserDetails 
							stylesOptions={this.props.route.stylesOptions}
							currentUser={this.state.currentUser || this.props.currentUser} 
							showUserDetails={(user)=>this.showUserDetails(user)}
						/>
					</div>
				</div>
				
				<Drawer
				  docked={false}
				  width={200}
				  open={this.state.openSearch}
				  onRequestChange={()=>this.toggleStateBool('openSearch')}
				>
				  <SideFinder 
					  stylesOptions={this.props.route.stylesOptions}
					  itemList={this.state.userList} 
					  handleItemClick={(userId)=>this.findAndShowUser(userId)}
				  />
				</Drawer>
			</div>
		);
	}
}
    