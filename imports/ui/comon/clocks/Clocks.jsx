import React, { Component } from 'react';
//import PureRenderMixin from 'react-addons-pure-render-mixin';


// APP COMPONENTS
import Clock from "./Clock.jsx";



const locations = [
	{
		name : "Dubai",
		gmt : -4,
		code : 'DXB,DWC'
	},
	{
		name : "NewYork",
		gmt : -5,
		code : 'JFK,EWR,LGA'
	},
	{
		name : "RioDeJaneiro",
		gmt : -3,
		code : 'GIG,SDU'
	},
	{
		name : "Sydney",
		gmt : -10,
		code : 'SYD'
	},
	{
		name : "Rome",
		gmt : -1,
		code : 'FCO,CIA,IRT,XRJ'
	},	
]

var timer;

export default class Clocks extends Component {
	constructor() {
		super();
		//this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
		this.state = {
			timeStep : 0
		}
	}
	
	/*_______________________________________________________________________________________________________________
_________________________________________________________________________________________________________________  
_____________________________________________COMPONENT LIFE TIME_________________________________________________
_________________________________________________________________________________________________________________*/
	

	componentDidMount() {
		this.startTime()
	}	
	
	
	componentWillReceiveProps(newProps) {
	}
	
	
	componentWillUnmount(){
		clearTimeout(timer)
	}
	
	/*_______________________________________________________________________________________________________________
_________________________________________________________________________________________________________________  
_____________________________________________COMPONENT METHODS___________________________________________________
_________________________________________________________________________________________________________________*/
	
	
	startTime(){
		timer = window.setTimeout(()=>{
			this.setState({timeStep : this.state.timeStep+1})
			this.startTime()
		}, 1000)
	}
	
	
	test(){
		//console.log(this.state.test)
	}
	
	/*_________________________________________________________________________________________________________________
___________________________________________________________________________________________________________________ 
_____________________________________________COMPONENT VIEWS_______________________________________________________
_________________________________________________________________________________________________________________*/
	
	
	/*_________________________________________________________________________________________________________________
___________________________________________________________________________________________________________________  
_____________________________________________COMPONENT TEMPLATE____________________________________________________
_________________________________________________________________________________________________________________*/

	
	render () {
		let styles = this.props.styles
		let stylesClock = this.props.styles.clock
		return (
			<div style = {styles.container}>
				{locations.map((location, index)=>{
					return (
							<Clock  
								key={index} 
								location={location} 
								timeStep={this.state.timeStep} 
								styles={stylesClock}/>
					)
				})}
				
			</div>
		)
	}
}