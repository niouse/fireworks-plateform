
import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
//import PureRenderMixin from 'react-addons-pure-render-mixin';
//import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, DefaultRoute, Redirect } from 'react-router';

// EXTERNAL LIBS
//import moment from 'moment';

//MATERIAL COMPNENTS
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import DropDownMenu from 'material-ui/DropDownMenu';
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



export default class  Signup extends Component {

	constructor(props){
		super(props);
		//this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);

		this.state = {
			type: "visitor",
			message : "",
			successMessage:"Le compte à été enregistré dans la base de données",
			messageStyle : {
				color: props.styles.successMessage.color,
				visibility: "hidden"
			}
		};
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
	
	onTypeChange(event, index, newValue){
	  this.setState({type: newValue});
  	}
	
	onTextChange(event, key){
		var newValue = event.currentTarget.value;
		this.setState({[key]: newValue});
	}
	
	submitUser(e){
		 e.preventDefault();
		let form = document.getElementById('register')
		 var options = {
			 username : form.username.value,
			 email: form.email.value,
			 password: form.password.value,
			 firstName : form.firstName.value,
			 lastName : form.lastName.value,
			 type: 'user'
		 };

		 Meteor.call('register', options , (error, result) => {
			 this.showMessage(error);
		});
	 }
	
	showMessage(error){
		//alert(JSON.stringify(this.state));
		 if(error){
				 this.setState({
					 message : error.reason,
					 messageStyle : {color : this.props.styles.errorMessage.color, visibility: "visible"}
				  });
			 }
			 else {
				 this.setState({
					 message : this.state.successMessage,
					 messageStyle : {color : this.props.styles.successMessage.color, visibility: "visible"}
				 })
			 };
		
		 setTimeout(()=>{ 
			 this.setState({messageStyle : {visibility : "hidden"}});
		 }, 4000);
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
			<div style={styles.container}>
				<div style={styles.title}>Nouvel utilisateur</div>
				 <form id="register" className="register" style={styles.form} onSubmit={this.submitUser.bind(this)}>
					 <TextField
						  id="username"
						  name="username"
						  hintText="Hint Text"
						  floatingLabelText="Username"
						  onChange={(event) => {this.onTextChange(event, "username")}}
						  required="true"
						  style={styles.textField}
						/>
					 <TextField
						  id="firstName"
						  name="firstName"
						  hintText="Hint Text"
						  floatingLabelText="First name"
						  onChange={(event) => {this.onTextChange(event, "firstName")}}
						  style={styles.textField}
						/>
					 <TextField
						  id="lastName"
						  name="lastName"
						  hintText="Hint Text"
						  floatingLabelText="Last name"
						  onChange={(event) => {this.onTextChange(event, "lastName")}}
						  style={styles.textField}
						/>

					<TextField
						  id="email"
						  name="email"
						  hintText="Hint Text"
						  type="email" pattern="[^ @]*@[^ @]*"
						  floatingLabelText="Email"
						  onChange={(event) => {this.onTextChange(event, "email")}}
						  required="true"
						  style={styles.textField}
						/>

					 <TextField
						  id="password"
						  name="password"
						  type="password"
						  pattern=".{5,10}"
						  hintText="Hint Text"
						  floatingLabelText="Password"
						  onChange={(event) => {this.onTextChange(event, "password")}}
						  required="true"
						  style={styles.textField}
						/>

					 {false && <DropDownMenu
						  id="type"
						  value={this.state.type}
						  label="type de compte"
						  onChange={(event, index, newValue)=>{this.onTypeChange(event, index, newValue)}}
						  style={styles.textField}
						  autoWidth={false}
						>
						  <MenuItem value="visitor" primaryText="visiteur" />
						  <MenuItem value="user" primaryText="utilisateur" />
						  <MenuItem value="admin" primaryText="administrateur" />
						</DropDownMenu>}
					 
						<RaisedButton type="submit" label="créer un compte" primary={true} style={styles.submitButton} /> 
				</form>
				<p id="message" style={Object.assign({}, this.state.messageStyle, styles.message)}>{this.state.message}</p>
			</div>
		);
	}
}
    