
import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
//import PureRenderMixin from 'react-addons-pure-render-mixin';
import {  browserHistory } from 'react-router';

//APP COMPONENT
import MapSimple from "./../comon/map-simple/MapSimple.container.jsx";
import ToolMenu from "./../comon/tool-menu/ToolMenu.container.jsx";
import SideFinder from "./../comon/side-finder/SideFinder.container.jsx";
import EventDetails from "./../comon/event-details/EventDetails.container.jsx";
import SendEmailSimple from "./../comon/send-email-simple/SendEmailSimple.container.jsx";
import AddEvent from "./../comon/add-event/AddEvent.container.jsx";

// EXTERNAL LIBS
var GoogleMapsLoader = require('google-maps');

//MATERIAL COMPNENTS
import Drawer from 'material-ui/Drawer';
import FloatingActionButton from 'material-ui/FloatingActionButton';
//import Dialog from 'material-ui/Dialog';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import {List, ListItem} from 'material-ui/List';

//MATERIAL ICONS
import Refresh from 'material-ui/svg-icons/navigation/refresh.js';
import ImportExport from 'material-ui/svg-icons/communication/import-export.js';
import Settings from 'material-ui/svg-icons/action/settings.js';
import Save from 'material-ui/svg-icons/content/save.js';

import { eventsMongo } from './../../api/events/events.js';

export default class  Map extends Component {

	constructor(props){
		super(props);
		//this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);

		this.state = {
			canTest : false,
			message : "",
			openSearch : false,
			events  : props.events,
			currentEvent : false,
			showSendEmail : false,
			showAddEvent : false,
		}

	}

/*_______________________________________________________________________________________________________________
_________________________________________________________________________________________________________________  
_____________________________________________COMPONENT LIFE TIME_________________________________________________
_________________________________________________________________________________________________________________*/


	componentWillMount() { 

	}

	componentDidMount(){
		//console.log(this.props.events)
	}

	componentWillReceiveProps(newProps) {
		this.setState({
			events : newProps.events
		})
		if (this.state.currentEvent){
			
			let updatedEvent=newProps.events.filter((x)=>{
				return x._id === this.state.currentEvent._id
			})[0]
			
			this.setState({
				currentEvent : updatedEvent
			})
		}
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
			if(x.status === 'finished'){avatar = 'comon/ruggieri-map-finished.png'}
			if(x.status === 'ready'){avatar = 'comon/ruggieri-map-ready.png'}
			if(x.status === 'notReady'){avatar = 'comon/ruggieri-map-not-ready.png'}
			let item = {
				id : x._id,
				primaryText : x.name,
				secondaryText : x.Annecy,
				leftIcon : <img src={avatar} />
			}
			transformedList.push(item)
		})
		
		return transformedList
	}
	
	showEventDetails(event){
		console.log(event)
		this.setState({
			currentEvent : event
		})
	}
	
	findAndShowEvent(eventId){
		let event= this.state.events.filter((x)=>{
			return x._id === eventId
		})[0];
		console.log(event)
		this.showEventDetails(event)
	}
	
	addEvent(infos){
        GoogleMapsLoader.KEY = 'AIzaSyBYpDxD02s53whM6m-NCZwkfWH8shEponY';
		GoogleMapsLoader.load((google)=>{
             var geocoder= new google.maps.Geocoder();
             geocoder.geocode( { 'address': infos.city}, (results, status)=> {
              if (status == google.maps.GeocoderStatus.OK) {

				  let pos = results[0].geometry.location;
				  infos.lat = pos.lat()
				  infos.lng = pos.lng()
		  
				eventsMongo.insert(infos, (err, res)=>{
					if(err){alert('erreur: '+err.reason)}
					else{
						alert("l'évenement a été ajouté à la base de données")
					}
				})
				
				this.setState({
					showAddEvent : false
				})           
              } else {
                alert("Geocode was not successful for the following reason: " + status);
              }
            });
		});
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
						title="LA CARTE"
						openSearch={()=>this.toggleStateBool('openSearch')}
						openAdd={()=>this.setState({showAddEvent:true})}
						goToHelp={()=>browserHistory.push("/help/map")}
					/>
			    </div>
				
				<div style={styles.content}>
					<div style={styles.mapBox}>						
						<MapSimple 
							stylesOptions={this.props.route.stylesOptions}
							users={this.props.users}
							events={this.props.events}
							showEventDetails={(event)=>this.showEventDetails(event)}
						/>
					</div>
					<div style={styles.eventDetails}>
						<EventDetails 
							stylesOptions={this.props.route.stylesOptions}
							event={this.state.currentEvent}
							showSendEmail={()=>this.setState({showSendEmail : true})}
						/>
					</div>
				</div>
				

				{
					this.state.showSendEmail && <div style={styles.sendEmailBox}>
						<SendEmailSimple 
							stylesOptions={this.props.route.stylesOptions}
							close={()=>this.setState({showSendEmail : false})}
						/>
					</div>
				}
				
				{
					this.state.showAddEvent && <AddEvent
						stylesOptions={this.props.route.stylesOptions}
						close={()=>this.setState({showAddEvent : false})}
						addEvent={(infos)=>this.addEvent(infos)}
					/>
				}
				
				<Drawer
				  docked={false}
				  width={200}
				  open={this.state.openSearch}
				  onRequestChange={()=>this.toggleStateBool('openSearch')}
				>
				  <SideFinder 
					  stylesOptions={this.props.route.stylesOptions}
					  itemList={this.transformItemList(this.state.events)} 
					  handleItemClick={(EventId)=>this.findAndShowEvent(EventId)}
				  />
				</Drawer>
			</div>
		);
	}
}
    