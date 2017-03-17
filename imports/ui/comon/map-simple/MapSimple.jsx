
import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
//import PureRenderMixin from 'react-addons-pure-render-mixin';
//import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, DefaultRoute, Redirect } from 'react-router';


// EXTERNAL LIBS
var GoogleMapsLoader = require('google-maps');


// MATERIAL UI COMPONENTS
import Drawer from 'material-ui/Drawer';
import FloatingActionButton from 'material-ui/FloatingActionButton';
//import Dialog from 'material-ui/Dialog';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import {List, ListItem} from 'material-ui/List';

// MATERIAL UI ICONS
import Checkbox from 'material-ui/Checkbox';
import Visibility from 'material-ui/svg-icons/action/visibility';
import VisibilityOff from 'material-ui/svg-icons/action/visibility-off';

export default class  MapSimple extends Component {

	constructor(props){
		super(props);
		//this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
		this.map;
		this.marker = {
			events : [],
			users : []
		};
		this.state = {
			canTest : false,
			message : "",
			showMarkersOptions : false,
			events : props.events,
			users : props.users,
		}
	}

/*_______________________________________________________________________________________________________________
_________________________________________________________________________________________________________________  
_____________________________________________COMPONENT LIFE TIME_________________________________________________
_________________________________________________________________________________________________________________*/


	componentWillMount() { 
		
	}

	componentDidMount(){
		this.loadMap()
	}

	componentWillReceiveProps(newProps) {
		if (this.props.events.length !== newProps.events.length){
			
			var event = newProps.events[newProps.events.length-1];
			var marker = new google.maps.Marker({
			  animation: google.maps.Animation.DROP,  
			  position: {lat: event.lat, lng: event.lng},
			  map: this.map,
			  icon : this.getEventIcon(google, event.status, event.type),
			  title: event.name,
			  type : event.type,
			  status : event.status,
			  zIndex: 3,
			});
			this.addEventMarker(marker, event)
			this.map.setCenter({lat: event.lat, lng: event.lng});
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
	
	loadMap(){
		GoogleMapsLoader.KEY = 'AIzaSyBYpDxD02s53whM6m-NCZwkfWH8shEponY';
		GoogleMapsLoader.load((google)=>{
			this.map = new google.maps.Map(document.getElementById('map'),{
            center: {lat: 45.760329, lng: 4.825506},
            zoom: 5,
          });
		  this.loadEvents(google);
		});
	}
	
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
	
	showMarkersOptions(){
		this.setState({
			showMarkersOptions : true
		})
	}
	
	getEventIcon(google, status, type){
		let url;
		let size;
		
		if (status === 'finished'){
			url = "./comon/ruggieri-map-finished.png"
		}
		if (status==='ready'){
			url = './comon/ruggieri-map-ready.png'
		}
		if (status==='notReady'){
			url = './comon/ruggieri-map-not-ready.png'
		}
		if (type === 'petit'){
			size = 15
		}
		if (type === 'moyen'){
			size = 25
		}
		if (type === 'gros'){
			size = 40
		}
		
		let icon = {
		  url: url,
		  size: new google.maps.Size(size, size),
		  origin: new google.maps.Point(0, 0),
		  anchor: new google.maps.Point(17, 34),
		  scaledSize: new google.maps.Size(size, size)
		}
		return icon
	}
	
	loadEvents(google){
		//if(this.state.events.length === this.marker['event'].length){return}
		this.marker['events']=[]

		for (var i = 0; i < this.props.events.length; i++) {
			var event = this.props.events[i];
			var marker = new google.maps.Marker({
			  animation: google.maps.Animation.DROP,  
			  position: {lat: event.lat, lng: event.lng},
			  map: this.map,
			  icon : this.getEventIcon(google, event.status, event.type),
			  title: event.name,
			  type : event.type,
			  status : event.status,
			  zIndex: 3,
			});
			
			this.addEventMarker(marker, event)
	  }
	}
	
	addEventMarker(marker, obj){
		marker.addListener('click', ()=>{
			this.props.showEventDetails(obj)
		});
		this.marker['events'].push(marker);
	}
	
	toggleMarker(e, value, key, collection){
		//console.log(type);
		//console.log(this.marker.aluminium[1])
		
		if (!e.currentTarget.checked){
			this.marker[collection].forEach((x)=> {
				if (x[key] === value){x.setMap(null)}
			})
        }
		else {
			this.marker[collection].forEach((x)=> {
				if (x[key] === value){x.setMap(this.map)}
			})
		}
    }

	test(){

	}


/*_________________________________________________________________________________________________________________
___________________________________________________________________________________________________________________ 
_____________________________________________COMPONENT VIEWS_______________________________________________________
_________________________________________________________________________________________________________________*/

getMarkersOptions(styles){
	
	let options = [
		{
			label : <img src="./comon/ruggieri-map-blank.png" style={{height : "25px", width: "auto"}}/>,
			onCheck: (e)=>{this.toggleMarker(e, 'gros', 'type', 'events')}
		},
		{
			label : <img src="./comon/ruggieri-map-blank.png" style={{height : "20px", width: "auto"}}/>,
			onCheck: (e)=>{this.toggleMarker(e, 'moyen', 'type', 'events')}
		},
		{
			label : <img src="./comon/ruggieri-map-blank.png" style={{height : "15px", width: "auto"}}/>,
			onCheck: (e)=>{this.toggleMarker(e, 'petit', 'type', 'events')}
		},
		{
			label : <img src="./comon/ruggieri-map-not-ready.png" style={{height : "20px", width: "auto"}}/>,
			onCheck: (e)=>this.toggleMarker(e, "notReady", 'status', 'events')
		},
		{
			label : <img src="./comon/ruggieri-map-ready.png" style={{height : "20px", width: "auto"}}/>,
			onCheck: (e)=>this.toggleMarker(e, "ready", "status", 'events')
		},
		{
			label : <img src="./comon/ruggieri-map-finished.png" style={{height : "20px", width: "auto"}}/>,
			onCheck: (e)=>this.toggleMarker(e, "finished", "status", 'events')
		},
		{
			label : <img src="./comon/photosProfiles/default.png" style={{height : "20px", width: "auto"}}/>,
			onCheck: (e)=>this.toggleMarker(e, "notReady", "status", "users")
		},
		{
			label : <img src="./comon/photosProfiles/default-ready.png" style={{height : "20px", width: "auto"}}/>,
			onCheck: (e)=>this.toggleMarker(e, "ready", "status", "users")
		},	
	]
	
	let markersOptions = (					
		<div style={styles.markersOptionsList}>
			<div style={styles.drawerHeader}>
				<span style={styles.drawerTitle}>Options</span>
				<div 
					style={styles.drawerClose}
					onTouchTap={()=>this.toggleStateBool('showMarkersOptions')}
				>X</div>
			</div>
			{options.map((x, index)=>{
				return (
					<div key={index} style={styles.markerOption}>
						<Checkbox
						  uncheckedIcon={<Visibility />}
						  checkedIcon={<Visibility />}
						  defaultChecked = {true}
						  label={x.label}
						  labelStyle = {Object.assign({}, styles.play)}
						  labelPosition = "left"
						  style={styles.checkbox}
						  onCheck={x.onCheck}
						/>
					</div>
				)
			})}
		</div>
	)
	
	return markersOptions
}


/*_________________________________________________________________________________________________________________
___________________________________________________________________________________________________________________  
_____________________________________________COMPONENT TEMPLATE____________________________________________________
_________________________________________________________________________________________________________________*/

	render() {
		const styles = this.props.styles
		return  (
			<div className="container" style={styles.container}>
				
				<div id='map' style={styles.map}></div>
				
				<div style={styles.toggleOptions}>
					<Visibility 
						onTouchTap={()=>this.toggleStateBool('showMarkersOptions')}
						style={styles.toggleOptionsIcon}
						{...styles.toggleOptionsIcon.attr}
					/>
				</div>
				
				<Drawer
				  docked={false}
				  width={150}
				  open={this.state.showMarkersOptions}
				  onRequestChange={()=>this.toggleStateBool('showMarkersOptions')}
				>
					  {
						this.getMarkersOptions(styles)
					  }
				</Drawer>
			</div>
		);
	}
}
    