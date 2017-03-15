
import React, { Component } from 'react';
import { browserHistory } from 'react-router';

// EXTERNAL LIBS
//import moment from 'moment';

//MATERIAL COMPNENTS
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';

//MATERIAL ICONS
import PlayArrow from 'material-ui/svg-icons/av/play-arrow.js';
import Stop from 'material-ui/svg-icons/av/stop.js';
import Pause from 'material-ui/svg-icons/av/pause.js';
import FiberManualRecord from 'material-ui/svg-icons/av/fiber-manual-record.js';
import Refresh from 'material-ui/svg-icons/navigation/refresh.js';
import ImportExport from 'material-ui/svg-icons/communication/import-export.js';
import Settings from 'material-ui/svg-icons/action/settings.js';
import Save from 'material-ui/svg-icons/content/save.js';




export default class  Login extends Component {

	constructor(props){
		super(props);
		//this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);

		this.state = {
			canTest : false,
			message : ""
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

	submitUser(e){
		e.preventDefault();
		Meteor.loginWithPassword(this.refs.email.input.value, this.refs.password.input.value, (error)=>{
			this.showMessage(error)
		});
	}
	
	showMessage(error){
		if(error){
			 this.setState({
				 message : error.reason,
			 });
			 document.getElementById("message").style.visibility= "visible";
			 setTimeout(function(){ 
				 document.getElementById("message").style.visibility= "hidden";
			 }, 4000);
		}
		 else {
			 browserHistory.push("/home");
		 };
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
		//console.log(styles)
		return  (
			<div style={styles.container}>
				<h1>LOGIN</h1>
				 <form className="register" style={styles.form} onSubmit={this.submitUser.bind(this)}>
					<TextField
						  ref="email"
						  hintText="Hint Text"
						  type="email" pattern="[^ @]*@[^ @]*"
						  floatingLabelText="Email"				
						  required="true"
						  style={styles.mailInput}
						/>

					 <TextField
						  ref="password"
						  type="password" pattern=".{5,10}"
						  hintText="Hint Text"
						  floatingLabelText="Password"
						  required="true"
						 style={styles.passwordInput}
						/>
						<RaisedButton type="submit" label="se connecter" primary={true} style={styles.button}/>
					 <p>ou</p>
					 <RaisedButton label="créer un compte" primary={true} style={styles.submit} onClick={()=>{browserHistory.push("/signup")}} style={styles.button}/>
				</form>	
				<p id="message" style={styles.message}>{this.state.message}</p>
			</div>
		);
	}
}
    