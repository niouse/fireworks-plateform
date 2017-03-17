
import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
//import PureRenderMixin from 'react-addons-pure-render-mixin';
import { browserHistory } from 'react-router';

// EXTERNAL LIBS
//import moment from 'moment';

//MATERIAL COMPNENTS
import RaisedButton from 'material-ui/RaisedButton';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Snackbar from 'material-ui/Snackbar';

//MATERIAL ICONS

// MONGO APIS
import { eventsMongo } from './../../../api/events/events.js';


export default class  EventDetails extends Component {

	constructor(props){
		super(props);
		//this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);

		this.state = {
			canTest : false,
			message : "",
			showMessage : false,
			event : props.event,
			openActionsOnSub : false,
			openActionsOnTeam : false,
			userToAdd : {},
			mailAdress : "seba.pinard@gmail.com"
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
		this.setState({
			event : newProps.event
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
		console.log(key)
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
	
	getDateString(date){
		var result;
		var day = date.getDay()
		var month = date.getMonth()
		var year= date.getFullYear()
		result = `${day}-${month}-${year}`;
		console.log(result)
		return result
	}
	
	subscribeToEvent(id){
		
		//Check if user is already in subscription list
		var test1 = this.props.event.subscriptions.filter((x)=>{
			return x._id === Meteor.user()._id 
		})
		
		//Check if user is already in team list
		var test2 = this.props.event.team.filter((x)=>{
			return x._id === Meteor.user()._id 
		})
		
		if (test1[0] || test2[0]) {
			alert('Vous êtes déjà inscrit à cet évenement') 
			return
		}
			
		eventsMongo.update({_id : id}, {
			$push : {
				subscriptions : {
					_id : Meteor.user()._id,
					name : Meteor.user().lastName,
					photo : Meteor.user().photo,
				}
			}
		}, (err)=>{
			if (err){
				this.showMessage("une erreur s\'est produite :"+err.reason)
			}
			else{
				this.showMessage(`Vous avez souscris à l'évenement ${this.props.event.name}`)
			}
		})
		
		let message = `Une nouvelle Subscription est arrivée de la part de ${Meteor.user().lastName} pour l\'évenement ${this.props.event.name}`;
		
		/*Meteor.call('sendSubscription',
            'seba.pinard@gmail.com',
            'ruggieri.plateforme@ruggieri.com',
            'Nouvelle subscription',
            message
		 );*/
	}
	
	integrate(user, eventId){
		console.log(user)
		//var obj = _.find(this.props.event.subscriptions, function(obj) { return obj._id === id })
		var test2 = this.props.event.team.filter((x)=>{
			return x._id === user._id 
		})
		
		if (test2[0]) {
			alert('cet utilisateur est déjà intégré à l\'évenement évenement') 
			return
		}
			
		eventsMongo.update({_id : eventId}, {
			$push : {
				team : user
			}
		})
	}
	
	openActionsOnSub(event, user){
		// This prevents ghost click.
		event.preventDefault();
		this.setState({
		  openActionOnSub: true,
		  anchorEl: event.currentTarget,
		  userToAdd : user
		});
	  };
	
	openActionsOnTeam(event){
		// This prevents ghost click.
		event.preventDefault();

		this.setState({
		  openActionsOnTeam: true,
		  anchorEl: event.currentTarget,
		});
	  };

	closeActions(){
		this.setState({
		  openActionsOnSub: false,
		  openActionsOnTeam: false,
		});
	};
	
	test(){
		console.log(this.state.openActionsOnSub)
	}


/*_________________________________________________________________________________________________________________
___________________________________________________________________________________________________________________ 
_____________________________________________COMPONENT VIEWS_______________________________________________________
_________________________________________________________________________________________________________________*/

getHeader(styles){
	//console.log(this.props.event)
	const header = (
		<div style={styles.header}>
			<h2 style={styles.title}>{this.props.event.name}</h2>
			<div style={styles.buttonBox}>
				<span style={styles.eventNumber}>{this.props.event.team.length+'/'+this.props.event.nbTeam}</span>
				<RaisedButton 
					label="souscrire" 
					primary={true} 
					style={styles.button}
					onClick = {()=>{this.subscribeToEvent(this.props.event._id)}}
				/>
			</div>
		</div>
	)
	
	return header
}

getDetails(styles){
	let details = (
		<div style={styles.detailsBox}>
			 <div  style={styles.details}>
				 <div style={styles.details1}>
					<div>Location: {this.props.event.city}</div>
					<div>Date du show: {this.getDateString(this.props.event.dateShow)}</div>
				</div>
				 <div  style={styles.details2}>
					  <div>Début des travaux: {this.getDateString(this.props.event.dateMin)}</div>
					  <div>Fin des travaux: {this.getDateString(this.props.event.dateMax)}</div>
				 </div>
			</div>
		</div>
	)
	return details
}
	
getSubBox(styles){
	let subBox = (
		<div style={styles.subBox}>
			<div style={styles.smallTitle}> Ont souscrit: </div>
			<div  style={styles.usersBox}>
				{this.props.event.subscriptions[0] ? this.props.event.subscriptions.map((x, index)=>{
					console.log(x)
					return(
						<div key={index} style={styles.userBox} onTouchTap={(e)=>this.openActionsOnSub(e, x)}>
							<img src={x.photo} style={styles.image}/>
							<div style={styles.lastName}>{x.name}</div>
						</div>
					)
				}):
				<div style={styles.nobodyMsg}>Personne n'a souscri à cet évenement</div>
				}
			</div>
		</div>
	)
	
	return subBox
}
		
getTeamBox(styles){
	let teamBox=(
		<div style={styles.teamBox}>
			<div style={styles.smallTitle}> Intégrés dans la Team: </div>
			<div style={styles.usersBox}>
				{this.props.event.team[0] ? this.props.event.team.map((x, index)=>{
					return(
						<div key={index} style={styles.userBox} onTouchTap={(e)=>this.openActionsOnTeam(e)}>
							<img src={x.photo} style={styles.image}/>
							<div style={styles.lastName}>{x.name}</div>
						</div>
					)
				}):
				<div style={styles.nobodyMsg}>Personnes n'est intégré dans la team </div>
				}
			</div>
		</div>
	)
	
	return teamBox
}

/*_________________________________________________________________________________________________________________
___________________________________________________________________________________________________________________  
_____________________________________________COMPONENT TEMPLATE____________________________________________________
_________________________________________________________________________________________________________________*/

	render() {
		const styles = this.props.styles
		return  (
			<div style={styles.container}>
				{this.state.canTest && <button onClick={()=>this.test()}>test</button>}
				
				{
					this.getHeader(styles)
				}
				{
					this.getDetails(styles)
				}
				
				<div style={styles.content}>
					{
						this.getSubBox(styles)
					}
					{
						this.getTeamBox(styles)
					}
				</div>	
				<Popover
				  open={this.state.openActionOnSub}
				  anchorEl={this.state.anchorEl}
				  anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
				  targetOrigin={{horizontal: 'left', vertical: 'top'}}
				  onRequestClose={()=>this.setState({openActionOnSub:false})}
				>
					  <Menu>
						<MenuItem 
							primaryText="Voir les détails" 
							onClick={()=> browserHistory.push("/user-viewer")}
						/>
						<MenuItem primaryText="Integrer dans la team" 
							onClick={()=>this.integrate(this.state.userToAdd, this.props.event._id)}/>
						<MenuItem primaryText="Refuser la souscription" />
						<MenuItem primaryText="Envoyer un message" 
							onClick={()=>this.props.showSendEmail()}
						/>
						<MenuItem primaryText="Envoyer un email" 
							onClick={()=>this.props.showSendEmail()}
						/>
					  </Menu>
				</Popover>
				<Popover
				  open={this.state.openActionsOnTeam}
				  anchorEl={this.state.anchorEl}
				  anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
				  targetOrigin={{horizontal: 'left', vertical: 'top'}}
				  onRequestClose={(e)=>this.toggleStateBool('openActionsOnTeam')}
				>
					  <Menu>
						<MenuItem primaryText="Voir les détails" />
						<MenuItem primaryText="Retirer de la liste" />
						<MenuItem primaryText="Envoyer un message" />
						<MenuItem primaryText="Envoyer un email" />
					  </Menu>
				</Popover>
				<Snackbar
				  open={this.state.showMessage}
				  message={this.state.message}
				  autoHideDuration={4000}
				  onRequestClose={()=>this.setState({showMessage:false})}
				  
				/>
			</div>
		);
	}
}
    