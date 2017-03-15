
import React, { Component } from 'react';
import { browserHistory } from 'react-router';

// APP COMPONENTS
import ClassicTab from "./../comon/classic-tab/ClassicTab.container.jsx";
import Clocks from "./../comon/clocks/Clocks.container.jsx";

export default class  Home extends Component {

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
	
	goToPage(page){
		if (Meteor.userId) {browserHistory.push(page)}	
		else return
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
				<div style={styles.itemGrid}>
					{this.props.navItems.map((item, index)=>{
						return (
							<div key={index} style={styles.tab} onClick={()=>this.goToPage(item.url, this.props.userLevel)}>
								<ClassicTab 
									id={'tab'+index}
									item={item}
									userLevel={this.props.userLevel}
									stylesOptions={this.props.route.stylesOptions}
								/>
							</div>
						)
					})}
				</div>
				<Clocks stylesOptions={this.props.route.stylesOptions}/>
			</div>
		);
	}
}
    