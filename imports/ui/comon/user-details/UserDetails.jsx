
import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
//import PureRenderMixin from 'react-addons-pure-render-mixin';
//import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, DefaultRoute, Redirect } from 'react-router';

// APP COMPONENTS
import ChartSimple from "./../chart-simple/ChartSimple.container.jsx";

// EXTERNAL LIBS
//import moment from 'moment';
//import Radium from 'radium';

const options={
			chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie',
				backgroundColor : "black"
            },
            title: {
                text: null
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true
                    },
                    showInLegend: true
                }
            },
            series: [{
                name: 'Temps',
                colorByPoint: true,
                data: [{
                    name: 'France',
                    y: 56.33
                }, {
                    name: 'Europe',
                    y: 24.03,
                    sliced: true,
                    selected: true
                }, {
                    name: 'Moyen Orient',
                    y: 10.38
                }, {
                    name: 'Afrique',
                    y: 4.77
                }, {
                    name: 'Dubai',
                    y: 0.91
                }, {
                    name: 'Oman',
                    y: 0.2
                }]
            }]
    }

export default class  UserDetails extends Component {

	constructor(props){
		super(props);
		//this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);

		this.state = {
			canTest : false,
			message : "",
			//currentUser : props.currentUser
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
	
	getTable(user){
		const styles = this.props.styles
		var table = []
		for (var key in user){
			if(key === 'lng' || key === 'photo' || key ==='_id' || key==="emails" || key==='services' || key==='createdAt'){continue}
			table.push(
				<div key={key} style={styles.table.row}>
					<div style={styles.table.column}>{key} :</div>
					<div style={styles.table.column}>{user[key]}</div>
				</div>
			)
		}
		return table
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
			<div style = {styles.container}>
				<div style={styles.userTitle}>{this.props.currentUser.firstName + ' ' + this.props.currentUser.lastName}</div>
				<div style={styles.table}>
					<div style={styles.table.row}>
						<div style={styles.table.column}>email :</div>
						<div style={styles.table.column}>{this.props.currentUser.emails[0].address}</div>
					</div>
					{this.getTable(this.props.currentUser)}
				</div>
				<ChartSimple 
					stylesOptions={this.props.stylesOptions}
					options={options} 
					chartId="PieChart"
				/>
			</div> 
		);
	}
}
    