
import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
//import PureRenderMixin from 'react-addons-pure-render-mixin';
//import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, DefaultRoute, Redirect } from 'react-router';

// EXTERNAL LIBS
//import moment from 'moment';

//MATERIAL COMPNENTS
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
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



export default class  SendEmailSimple extends Component {

	constructor(props){
		super(props);
		//this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);

		this.state = {
			canTest : false,
			message : "",
			user : props.usersList[0]
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
	
	handleChange(event, index, value){
		 this.setState({user:value})
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
					<div>Envoyer un email</div>
				</div>
				<div style={styles.content}>

					<div  style={styles.content.title}>
						Déstinataire:
					</div>
					 <SelectField
						 {...styles.content.receiver.selectField}
						 style={styles.content.receiver}
						 id="contentReceiver"
						 value={this.state.user} 
						 onChange={(event, index, value)=>this.handleChange(event, index, value)}
						 maxHeight={200}
					 >
						{this.props.usersList.map((user, index)=>{
							 return (
								<MenuItem key={index} value={user} primaryText={user.firstName+' '+user.lastName} />
							 )
						 })}
					</SelectField>
					<TextField 
						{...styles.content.message.textField}
						style={styles.content.message}
						id="contentMessage"
						multiLine={true} 
						hintText="Taper votre message"
						rows={10}
						required="true"
					/>
				</div>
				<div style={styles.footer}>
					<RaisedButton 
						{...styles.footer.button}
						label="Envoyer" 
						onClick={()=>this.sendEmail()}
					/>
					<RaisedButton 
						{...styles.footer.button}
						label="Quitter" 
						onClick={()=>this.props.close()}
						
					/>
				</div>

			</div>
		);
	}
}
    