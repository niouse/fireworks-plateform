
import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
//import PureRenderMixin from 'react-addons-pure-render-mixin';
//import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, DefaultRoute, Redirect } from 'react-router';

// EXTERNAL LIBS
import Cropper from 'cropperjs'

//MATERIAL COMPNENTS
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

//MATERIAL ICONS
import MoveIcon from 'material-ui/svg-icons/action/open-with.js';
import CheckIcon from 'material-ui/svg-icons/navigation/check.js';
import CropIcon from 'material-ui/svg-icons/image/crop.js';
import CenterIcon from 'material-ui/svg-icons/image/crop-original.js';
import RefreshIcon from 'material-ui/svg-icons/navigation/refresh.js';
import ClearIcon from 'material-ui/svg-icons/content/clear.js';

export default class  SignupWithPhoto extends Component {

	constructor(props){
		super(props);
		//this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
		this.cropper;
		this.state = {
			type: "visitor",
			notCroppable:true,
			photo : false,
			message : "",
			messageStyle : {
				color: props.styles.message.successMessage.color,
				visibility: "hidden"
			}
		};

	}

/*_______________________________________________________________________________________________________________
_________________________________________________________________________________________________________________  
_____________________________________________COMPONENT LIFE TIME_________________________________________________
_________________________________________________________________________________________________________________*/

	componentDidMount(){
		var fileInput = document.querySelector('#userInput');
		fileInput.addEventListener('change', ()=>this.loadCropper(fileInput));
	}

	/*componentWillReceiveProps(newProps) {

	}

	shouldComponentUpdate(){

	}

	componentDidUpdate(){

	}

	componentWillUnmount(){

	}	*/


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
	
	submitUser(e){
		e.preventDefault();
		
		if (!this.state.notCroppable){
			this.showMessage("Vous devez valider ou annuler la photo avant de soumettre l\'inscription", 'warning')
			return
		}
		
		let form = document.getElementById('register')
		 var options = {
			 username : form.username.value,
			 email: form.email.value,
			 password: form.password.value,
			 firstName : form.firstName.value,
			 lastName : form.lastName.value,
			 //type: this.state.type,
			 type : 'user',
			 photo : this.state.photo
		 };

		 Meteor.call('register', options , (error, result) => {
			 if (error){
				 this.showMessage(error, 'error');
			 }
			 else {
				 this.showMessage("l'utilisateur a été enregistré dans la base de données", 'success');
			 }
		});
	 }
	
	showMessage(message, type){
		//alert(JSON.stringify(this.state));
		 if(type==='error'){
			 this.setState({
				 message : message.reason,
				 messageStyle : {color : this.props.styles.message.errorMessage.color, visibility: "visible"}
			  });
		 }
		if(type==='warning'){
			 this.setState({
				 message : message,
				 messageStyle : {color : this.props.styles.message.errorMessage.color, visibility: "visible"}
			  });
		 }
		 if(type==='success'){
			 this.setState({
				 message : message,
				 messageStyle : {color : this.props.styles.message.successMessage.color, visibility: "visible"}
			 })
		 };
		
		 setTimeout(()=>{ 
			 this.setState({messageStyle : {visibility : "hidden"}});
		 }, 4000);
	}
	
	loadCropper(fileInput){
		
		if (this.cropper){
			this.cropper.destroy()
		}
		var reader = new FileReader();
		reader.onload = (e)=>{
			this.setState({notCroppable:false})
			$('#photoProfile').attr('src', e.target.result);
			var image = document.getElementById('photoProfile');		
			this.cropper = new Cropper(image, {
			  aspectRatio: 1 / 1,
			  viewMode : 1,
			  crop: (e)=>{
				  //console.log(e)
			  }
			});
		}
		reader.readAsDataURL(fileInput.files[0]);
	}
	
	cropperAction(action, param){
		this.cropper[action](param)
	}
	
	clearCropper(){
		this.cropper.destroy()
		$('#photoProfile').attr('src', "./comon/defaultProfile.png");
		let input = $('#userInput')
		input.replaceWith(input.val('').clone(true));
		var fileInput = document.querySelector('#userInput');
		fileInput.addEventListener('change', ()=>this.loadCropper(fileInput));
		this.setState({notCroppable:true})
	}
	
	crop(){
		//console.log('cropping image')
		var canvas=this.cropper.getCroppedCanvas({
		  width: 100,
		  height: 100
		});
		this.cropper.destroy()
		$('#photoProfile').attr('src', canvas.toDataURL());
		this.setState({
			notCroppable:true,
			photo : canvas.toDataURL()
		})
		
		/*testCollection.update({_id:this.state.photo._id}, {$set : {
			photo : canvas.toDataURL()
		}})*/
		
	}

	test(){

	}
/*_________________________________________________________________________________________________________________
___________________________________________________________________________________________________________________ 
_____________________________________________COMPONENT VIEWS_______________________________________________________
_________________________________________________________________________________________________________________*/

getPhoto(){
	let photo = this.state.photo ? 
	<img style={styles.photo} src="#" /> : 
	<div>pas de photo</div>
	return photo
}

/*_________________________________________________________________________________________________________________
___________________________________________________________________________________________________________________  
_____________________________________________COMPONENT TEMPLATE____________________________________________________
_________________________________________________________________________________________________________________*/

	render() {
		const styles = this.props.styles
		return  (
			<form 
				id="register" 
				onSubmit={(e)=>this.submitUser(e)} 
				style={styles.container}
			>
				
				<div style={styles.header}>
					Nouvel utilisateur
				</div>
				
				<div  style={styles.content}>
						 
					<div style={styles.fields}>			 
						 <TextField
							  id="username"
							  name="username"
							  hintText="Hint Text"
							  floatingLabelText="pseudo"
							  required="true"
							  style={styles.fields.textField}
							/>
						 <TextField
							  id="firstName"
							  name="firstName"
							  hintText="Hint Text"
							  floatingLabelText="prénom"
							  style={styles.fields.textField}
							/>
						 <TextField
							  id="lastName"
							  name="lastName"
							  hintText="Hint Text"
							  floatingLabelText="nom de famille"
							  style={styles.fields.textField}
							/>

						<TextField
							  id="email"
							  name="email"
							  hintText="Hint Text"
							  type="email" 
							  pattern="[^ @]*@[^ @]*"
							  floatingLabelText="Email"
							  required="true"
							  style={styles.fields.textField}
							/>

						 <TextField
							  id="password"
							  name="password"
							  type="password"
							  pattern=".{5,10}"
							  hintText="Hint Text"
							  floatingLabelText="Password"
							  required="true"
							  style={styles.fields.textField}
							/>

						 {false && <DropDownMenu
							  id="type"
							  value={this.state.type}
							  label="type de compte"
							  style={styles.fields.menu}
							  autoWidth={false}
							>
							  <MenuItem value="visitor" primaryText="visiteur" style={styles.textField}/>
							  <MenuItem value="user" primaryText="utilisateur" style={styles.textField}/>
							  <MenuItem value="admin" primaryText="administrateur" style={styles.textField}/>
							</DropDownMenu>}
							<div style={styles.photoEdit.photoInputBox}>
								 <span style={styles.photoEdit.photoInputLabel}>Image de profil:</span>
								 <input 
									 id="userInput" 
									 type="file" 
									 style={styles.photoEdit.photoInput}
								 />
							</div>
						</div>
						 
					<div style={styles.photoEdit}>
						<div style={styles.photoEdit.photoBox}>
							<img id="photoProfile" style={styles.photoEdit.photo} src="./comon/defaultProfile.png" />
						</div>

						<div style={styles.photoEdit.toolsBox}>
							<IconButton 
								style={styles.photoEdit.toolsButton}
								onClick={()=>this.cropperAction('setDragMode', 'move')}
								disabled = {this.state.notCroppable}
								title='mode déplacement' 
							>
								<MoveIcon />
							</IconButton>
							<IconButton 
								style={styles.photoEdit.toolsButton}
								onClick={()=>this.cropperAction('setDragMode', 'crop')}
								disabled = {this.state.notCroppable}
								title='mode crop'
							>
								<CropIcon />
							</IconButton>
							<IconButton 
								style={styles.photoEdit.toolsButton}
								onClick={()=>this.cropperAction('reset', null)}
								disabled = {this.state.notCroppable}
								title='recentrer la photo'
							>
								<CenterIcon />
							</IconButton>
							<IconButton 
								style={styles.photoEdit.toolsButton}
								onClick={()=>this.cropperAction('rotate', 45)}
								disabled = {this.state.notCroppable}
								title='pivoter de 45°'
							>
								<RefreshIcon />
							</IconButton>
							<IconButton 
								style={styles.photoEdit.toolsButton}
								onClick={()=>this.clearCropper()}
								title='annuler'
							>
								<ClearIcon />
							</IconButton>
							<IconButton 
								style={styles.photoEdit.toolsButton}
								onClick={()=>this.crop('crop')}
								title='Cropper la photo'
								disabled = {this.state.notCroppable}
							>
								<CheckIcon />
							</IconButton>
							
						</div>

					</div> 
						 
				</div>
					
				<div style={styles.footer}>
						 
					<p id="message" style={Object.assign({}, this.state.messageStyle, styles.message)}>{this.state.message}</p>
					
					<RaisedButton 
						id="submitButton" 
						type="submit"
						label="créer un compte" 
						primary={true} 
						style={styles.submitButton} 
					/> 
					</div>
			</form>
		);
	}
}
    