
import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
//import PureRenderMixin from 'react-addons-pure-render-mixin';
import { browserHistory } from 'react-router';


// APP COMPONENTS
import DigitalClock from "./../comon/digital-clock/DigitalClock.container.jsx"

// EXTERNAL LIBS
//import moment from 'moment';

//MATERIAL COMPNENTS
import IconButton from 'material-ui/IconButton';
import SvgIcon from 'material-ui/SvgIcon';
import DropDownMenu from 'material-ui/DropDownMenu';
import Drawer from 'material-ui/Drawer';
import Menu from 'material-ui/Menu';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';

//MATERIAL ICONS
import ActionHome from 'material-ui/svg-icons/action/home';
import ActionInfo from 'material-ui/svg-icons/action/info';
import ActionLanguage from 'material-ui/svg-icons/action/language';
import ActionLock from 'material-ui/svg-icons/action/lock';
import ActionBuild from 'material-ui/svg-icons/action/build';
import ActionExitToApp from 'material-ui/svg-icons/action/exit-to-app';
import ActionAccountBox from 'material-ui/svg-icons/action/account-box';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';

export default class  Navigation extends Component {

	constructor(props){
		super(props);
		//this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);

		this.state = {
			canTest : false,
			message : "",
			openMenu : false
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
	
	goToPage(page) {
		 if(!Meteor.userId()){
			 browserHistory.push('/login')
		 }
		else {
			browserHistory.push(page)
		}
	 }
	
	logOut(){
		Meteor.logout(()=>{
			browserHistory.push("/login")
		});	
	}
	
	setLanguage(language){
		TAPi18n.setLanguage(language);
	}
	
	openDrawer() {
		this.setState({open: !this.state.open})
	}

	test(){

	}


/*_________________________________________________________________________________________________________________
___________________________________________________________________________________________________________________ 
_____________________________________________COMPONENT VIEWS_______________________________________________________
_________________________________________________________________________________________________________________*/
	getHomeButton(styles){
		let HomeButton = <IconButton style={styles.iconButton} onTouchTap={()=>this.goToPage("/home")}> 
			<ActionHome 
				style={styles.icons}  
				{...styles.icons.attr}
			/>	
		</IconButton> 

		return HomeButton
	}

	getLogButton(styles){
		let logButton = this.props.user ? 
		<IconButton style={styles.iconButton} onTouchTap={()=> this.logOut()}>
				<ActionExitToApp 
					style={styles.icons}   
					{...styles.icons.attr}
				/>
		</IconButton>:
		<IconButton style={styles.iconButton} onTouchTap={()=>this.goToPage("/login")}>
			<ActionAccountBox 
				style={styles.icons}  
				{...styles.icons.attr}
			/>
		</IconButton>

		return logButton
	}

	getLanguageButton(styles){
		let languageButton = <IconMenu								
			iconButtonElement={
				<IconButton style={styles.iconButton}>
					<ActionLanguage 
						style={styles.icons}   
						{...styles.icons.attr}
					/>
				</IconButton>
			}
			anchorOrigin={{horizontal: 'left', vertical: 'top'}}
			targetOrigin={{horizontal: 'left', vertical: 'top'}}
		>
			<MenuItem onClick= {()=>{this.setLanguage('fr')}}primaryText="fr" />
			<MenuItem onClick= {()=>{this.setLanguage('en')}} primaryText="en" />
		</IconMenu>

		return languageButton
	}

	getHelpButton(styles){
		return <IconButton style={styles.iconButton} onTouchTap={()=>this.goToPage("/help")}> 
			<ActionInfo 
				style={styles.icons}   
				{...styles.icons.attr}
			/>
		</IconButton>
	}

	getSettingsButton(styles){
		let SettingsButton = this.props.user ?  
			<IconButton style={styles.iconButton} onTouchTap={()=>this.openDrawer()}>
				<ActionBuild 
					style={styles.icons}   
					{...styles.icons.attr}
				/>
			</IconButton> : 
			<IconButton style={styles.iconButton}>
				<ActionLock 
					style={styles.icons}   
					{...styles.icons.attr} 
					/>
			</IconButton>

		return SettingsButton
	}

	getUserInfos(styles){
		let userInfos = this.props.user ? 
		<span style={styles.userInfos}>
			<img src={this.props.user.photo || "./comon/defaultProfile.png"} style={styles.avatar}/>
			{"Connecté: " +this.props.user.firstName.slice("")[0] + ". " + this.props.user.lastName}
		</span> :
		<span style={styles.userInfos}>Non Connecté</span>
		return userInfos
	}

	getUserMenu(styles){
			const adminMenu = [
				<MenuItem  style={styles.iconButtonMenu.list} primaryText="mon compte" />,
				<MenuItem  style={styles.iconButtonMenu.list} primaryText="Gérer les comptes" />,
				<MenuItem  style={styles.iconButtonMenu.list} primaryText="nouvel utilisateur" onTouchTap={()=>this.goToPage('signup')}/>
			];

			const userMenu = [
				<MenuItem  style={styles.iconButtonMenu.list} primaryText="mon compte" />,
			];

			const visitorMenu = [
				<MenuItem  style={styles.iconButtonMenu.list} primaryText="nouvel utilisateur" onTouchTap={()=>this.goToPage('signup')}/>,
			]

			if (this.props.user && this.props.user.type==='admin') {
				return  adminMenu
			}
			if (this.props.user && this.props.user.type==='user') {
				return  userMenu
			}
			else {
				return  visitorMenu
			}
		}

	getMenuButton(styles){
		return  <IconMenu 
		  iconButtonElement={<IconButton iconStyle={styles.menuIcon} style={styles.iconButtonMenu}><MenuIcon {...styles.icons.attr} /></IconButton>}
		  anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
		  targetOrigin={{horizontal: 'left', vertical: 'top'}}
		  menuStyle={styles.iconButtonMenu.menu}
		>
		  <MenuItem  
			  style={styles.iconButtonMenu.list} 
			  primaryText="home" 
			  rightIcon={<ActionHome style={styles.icons}/>}
			   onTouchTap={()=>this.goToPage("home")}
		  />
		  <MenuItem  
			  style={styles.iconButtonMenu.list} 
			  primaryText="comptes" 
			  rightIcon={<ActionBuild style={styles.icons}/>}
			  menuItems={this.getUserMenu(styles)}
			  />
		  <MenuItem  
			  style={styles.iconButtonMenu.list} 
			  primaryText="langue" 
			  rightIcon={<ActionLanguage style={styles.icons}/>}
			  menuItems={[
					<MenuItem  style={styles.iconButtonMenu.list} primaryText="Français" />,
					<MenuItem  style={styles.iconButtonMenu.list} primaryText="Anglais" />
				]}
			  />
		  <MenuItem  style={styles.iconButtonMenu.list} primaryText="aide" rightIcon={<ActionInfo  style={styles.icons}/>}/>
		  {
				(()=>{
					let menuItem = this.props.user ?	
					<MenuItem 
					  style={styles.iconButtonMenu.list}  
					  primaryText="déconexion" 
					  rightIcon={<ActionExitToApp style={styles.icons}/>} 
					  onTouchTap={()=> this.logOut()}
				   /> :
					<MenuItem 
					  style={styles.iconButtonMenu.list}  
					  primaryText="login" 
					  rightIcon={<ActionAccountBox style={styles.icons}/>} 
					  onTouchTap={()=> this.logOut()}
				   />
				   return menuItem
				})()
		   }
		</IconMenu>
	}

/*_________________________________________________________________________________________________________________
___________________________________________________________________________________________________________________  
_____________________________________________COMPONENT TEMPLATE____________________________________________________
_________________________________________________________________________________________________________________*/

	render() {
		const styles = this.props.styles
		//console.log(this.props.stylesOptions)
		return  (
			<div style={styles.container}>
				<div style={styles.left}>
				
					{
						this.getUserInfos(styles)
					}
					
					{
						this.getHomeButton(styles)
					}

					{
						this.getLogButton(styles)
					}

					{
						this.getLanguageButton(styles)
					}

					{
						this.getHelpButton(styles)
					}

					{
						this.getSettingsButton(styles)
					}
					
					
						
				</div>

				<div style={styles.right}>
					<DigitalClock 
						style={styles.date}
						stylesOptions={this.props.stylesOptions}
					/>
					{
						this.getMenuButton(styles)
					}
				</div>
				
			    <Drawer
				  docked={false}
				  openSecondary={true}
				  width={200}
				  open={this.state.open}
				  onRequestChange={(open)=>this.setState({open})}
				>
				  {(this.props.user && this.props.user.type==='admin') && <MenuItem onTouchTap={()=>{this.goToPage('/signup')}}>Nouvel utilisateur</MenuItem>}
				  {(this.props.user && this.props.user.type==='admin') && <MenuItem onTouchTap={()=>this.goToPage()}>Gérer les comptes</MenuItem>}
				  <MenuItem onTouchTap={()=>this.goToPage()}>Mon compte</MenuItem>
				</Drawer>
			</div>
		);
	}
}
    