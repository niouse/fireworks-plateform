
import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
//import PureRenderMixin from 'react-addons-pure-render-mixin';
//import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, DefaultRoute, Redirect } from 'react-router';

// EXTERNAL LIBS
//import moment from 'moment';

//MATERIAL COMPNENTS
import Drawer from 'material-ui/Drawer';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Dialog from 'material-ui/Dialog';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

//import IconButton from 'material-ui/IconButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ActionInfo from 'material-ui/svg-icons/action/info';
import CommunicationImportExport from 'material-ui/svg-icons/communication/import-export';
import ActionSearch from 'material-ui/svg-icons/action/search';



export default class  ToolMenu extends Component {

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

	showMessage(message){
		this.setState({
			message : message,
			showMessage : true
		})
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
					<div style={styles.title}>{this.props.title}</div>
					<div style={styles.toolMenu}>
						 <FloatingActionButton 
							 style={styles.toolButton}  
							 onTouchTap={(key)=>this.props.openSearch(key)}
							 {...styles.toolButton.attr}
						>
							<ActionSearch />
						</FloatingActionButton>
						<FloatingActionButton  
							style={styles.toolButton}  
							onTouchTap={()=>this.props.openAdd()}
							{...styles.toolButton.attr}
						>
							<ContentAdd />
						</FloatingActionButton>
						<FloatingActionButton  
							style={styles.toolButton}   
							onTouchTap={()=>this.props.toggleDrawer('Export')}
							{...styles.toolButton.attr}
						>
							<CommunicationImportExport />
						</FloatingActionButton>
						<FloatingActionButton  
							style={styles.toolButton}   
							onTouchTap={()=>this.props.goToHelp()}
							{...styles.toolButton.attr}
						>
							<ActionInfo />
						</FloatingActionButton>
					</div>
				</div>
		);
	}
}
    