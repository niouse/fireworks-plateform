
import React, { Component } from 'react';


//MATERIAL COMPNENTS
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

//MATERIAL ICONS




export default class  UserFinder extends Component {

	constructor(props){
		super(props);
		//this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);

		this.state = {
			canTest : false,
			message : "",
			function : "all",
			status : "all",
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
	
	handleMouseOver(name){
		var id = "name"+name
		var text = document.getElementById(id).style.color = 'red'
	}
	
	handleMouseOut(name){
		var id = "name"+name
		var text = document.getElementById(id).style.color = "#b89a53"
	}

	
	filterList(event, index, value, key){
		event.preventDefault();	
		this.setState({[key]: value});
	    var updatedList = this.props.itemList.filter((item)=>{
		  return (item[key] === value || value==='all')
		});
		this.setState({
			itemList: updatedList
		});
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
				<div style={styles.searchBar}>
					<div style={styles.searchTitle}>Options de recherche :</div>
					 <SelectField
						  id="format"
						  floatingLabelText="type"
						  value={this.state.function}
						  onChange={(event, index, value)=>this.filterList(event, index, value, 'function')}
						  style = {styles.selectFields}
					>
						  <MenuItem value="all" primaryText="all" />
						  <MenuItem value="admin" primaryText="gestionaire" />
						  <MenuItem value="contactExt" primaryText="contact exterieur" />
						  <MenuItem value="artificier" primaryText="artificier" />
					</SelectField>
					<SelectField
						  id="format"
						  floatingLabelText="status"
						  value={this.state.status}
						  onChange={(event, index, value)=>this.filterList(event, index, value, 'status')}
						  style = {styles.selectFields}
					>
						  <MenuItem value="all" primaryText="all" />
						  <MenuItem value="ready" primaryText="disponible" />
						  <MenuItem value="notReady" primaryText="indisponible" />
					</SelectField>
				</div>
				<div style={styles.gallery}>
					{this.state.itemList.map((x, index)=>{ 
						return <div 
								   key={index} 
								   onTouchTap={()=>this.props.showUserDetails(x)}
								   style={styles.userBox}
								   onMouseOver={()=>this.handleMouseOver(x.username)}
								   onMouseOut={()=>this.handleMouseOut(x.username)}
							    >
							<img src={x.photo || './comon/defaultProfile.png'} style={styles.image}/>
							<div id={"name"+x.username} style={styles.lastName}>{x.lastName}</div>
						</div>
					})}
				</div>
			</div>
		);
	}
}
    