
import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
//import PureRenderMixin from 'react-addons-pure-render-mixin';
//import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, DefaultRoute, Redirect } from 'react-router';

// EXTERNAL LIBS
//import moment from 'moment';

//MATERIAL COMPNENTS
import {List, ListItem} from 'material-ui/List';
import FlatButton from 'material-ui/FlatButton';



//MATERIAL ICONS
import ActionSearch from 'material-ui/svg-icons/action/search';



export default class  SideFinder extends Component {

	constructor(props){
		super(props);
		//this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
		//console.log(props.itemList)
		this.state = {
			canTest : false,
			message : "",
			itemList : props.itemList
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
			itemList : newProps.itemList
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
	
	filterList(event){
		event.preventDefault();
		var updatedList = this.props.itemList;
		
		updatedList = updatedList.filter(function(item){
			//console.log(event.target.value.toLowerCase())
		  return ((item.primaryText.toLowerCase().search(
			event.target.value.toLowerCase()) !== -1) || (item.primaryText.toLowerCase().search(
			event.target.value.toLowerCase()) !== -1) || (item.primaryText.toLowerCase().search(
			event.target.value.toLowerCase()) !== -1));
		});
		//console.log(updatedList)
		this.setState({itemList: updatedList});
		//console.log(this.state.quizzList)
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
			<div>
				<ActionSearch style={styles.iconStyles} />
				<input type="text" placeholder="Search" style={styles.searchBar} onChange={(event)=>this.filterList(event)}/>
				<List>
					{(this.state.itemList && this.state.itemList[0]) ? 
					  this.state.itemList.map((x, index)=>{
					  return (
						  <ListItem key={"card"+ index}
							  primaryText={x.primaryText}
							  secondaryText={x.secondaryText}
							  leftIcon={x.leftIcon}
							  onTouchTap={()=>this.props.handleItemClick(x.id)}
							/>)
							  }	
							) :
					  <p>No records</p>}
				</List>
			</div>
		);
	}
}
    