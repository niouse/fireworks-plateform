import React, { Component } from 'react';
//import PureRenderMixin from 'react-addons-pure-render-mixin';

//MATERIAL COMPONENTS
import IconButton from 'material-ui/IconButton';


//MATERIAL ICONS
import Flight from 'material-ui/svg-icons/maps/flight';
import Hotel from 'material-ui/svg-icons/maps/hotel';
import ZoomIn from 'material-ui/svg-icons/action/zoom-in';


var timer;

export default class Clock extends Component {
	constructor(props) {
		super(props);
		//this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
		this.state = {
			time : "",
		}
		
		
	}
	
	componentWillMount() {	
		//Meteor.subscribe("sub");
	}

	componentDidMount() {
		
	}
	
	componentWillReceiveProps(newProps) {
		this.worldClockZone();
	}
	
	worldClock(zone){
			var dst = 0
			var time = new Date()
			var gmtMS = time.getTime() + (time.getTimezoneOffset() * 60000)
			var gmtTime = new Date(gmtMS)
			var day = gmtTime.getDate()
			var month = gmtTime.getMonth()
			var year = gmtTime.getYear()
			if(year < 1000){
			year += 1900
			}
			var monthArray = new Array("Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aôut", 
							"Septembre", "Octobre", "Novembre", "Décembre")
			var monthDays = new Array("31", "28", "31", "30", "31", "30", "31", "31", "30", "31", "30", "31")
			if (year%4 == 0){
			monthDays = new Array("31", "29", "31", "30", "31", "30", "31", "31", "30", "31", "30", "31")
			}
			if(year%100 == 0 && year%400 != 0){
			monthDays = new Array("31", "28", "31", "30", "31", "30", "31", "31", "30", "31", "30", "31")
			}

			var hr = gmtTime.getHours() + zone
			var min = gmtTime.getMinutes()
			var sec = gmtTime.getSeconds()

			if (hr >= 24){
			hr = hr-24
			day -= -1
			}
			if (hr < 0){
			hr -= -24
			day -= 1
			}
			if (hr < 10){
			hr = " " + hr
			}
			if (min < 10){
			min = "0" + min
			}
			if (sec < 10){
			sec = "0" + sec
			}
			if (day <= 0){
			if (month == 0){
				month = 11
				year -= 1
				}
				else{
				month = month -1
				}
			day = monthDays[month]
			}
			if(day > monthDays[month]){
				day = 1
				if(month == 11){
				month = 0
				year -= -1
				}
				else{
				month -= -1
				}
			}
			if (dst == 1){
				hr -= -1
				if (hr >= 24){
				hr = hr-24
				day -= -1
				}
				if (hr < 10){
				hr = " " + hr
				}
				if(day > monthDays[month]){
				day = 1
				if(month == 11){
				month = 0
				year -= -1
				}
				else{
				month -= -1
				}
				}
			return monthArray[month] + " " + day + ", " + year + "<br>" + hr + ":" + min + ":" + sec + " DST"
			}
			else{
			return hr + ":" + min + ":" + sec
			}
		}
	
	worldClockZone(){
			this.state.time = this.worldClock(this.props.location.gmt)	
	}
			

	
	
	
	componentWillUnmount(){
		
	}
	
	goToFlight(code){
		url = `https://www.google.fr/flights/#search;f=LYS,XYD;t=${code};d=2017-03-18;r=2017-03-22`;
		window.open(url,'_blank');
	}
	
	
	test(){
		//console.log(this.state.test)
	}
	
	render () {
		let styles = this.props.styles
		return (
			<div style={styles.container}>
				<div>
					<div style={styles.title}>{this.props.location.name}</div>
					<div style={styles.time}> {this.state.time} </div>
					<div style={styles.buttonBox}> 
						<IconButton 
							tooltip={tooltip="flight to "+this.props.location.name}
							onClick={()=>this.goToFlight(this.props.location.code)}
						>
							<Flight style={styles.button} color="#b89a53" hoverColor="blue"/> 
						 </IconButton>
						<IconButton 
							tooltip={tooltip="Hotel in "+this.props.location.name}
							onClick={()=>this.goToFlight(this.props.location.code)}
						>
							<Hotel style={styles.button} color="#b89a53" hoverColor="blue"/> 
						 </IconButton>
						<IconButton 
							tooltip={tooltip="Events in "+this.props.location.name}
							onClick={()=>this.goToFlight(this.props.location.code)}
						>
							<ZoomIn style={styles.button} color="#b89a53" hoverColor="blue"/> 
    					</IconButton>							
					</div>
				</div>
			</div>
		)
	}
}