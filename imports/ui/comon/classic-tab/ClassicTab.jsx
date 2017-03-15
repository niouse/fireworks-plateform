
import React, { Component } from 'react';

// EXTERNAL LIBS
import d3 from 'd3';

//MATERIAL ICONS
import ActionLock from 'material-ui/svg-icons/action/lock';


export default class  ClassicTab extends Component {

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

	componentDidMount() {
        d3.select('#'+this.props.id).transition().duration(300).ease(d3.easeLinear)
			.style("background-size", "80% 80%")
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

	changeIn(id) {
		//console.log(id)
		//document.getElementById(this.props.id).style['background-image']= "url('comon/trbTab.png')";

		d3.select('#'+id).transition().duration(200).ease(d3.easeLinear)
			.style("background-size", "90% 90%")	
	  }
		
	 changeOut(id) {
		 //document.getElementById(this.props.id).style['background-image']= "url('comon/trbTab2.png')";
		 d3.select('#'+id).transition()
			 .style("background-size", "80% 80%")
			.duration(100); 
	  	};

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
			<div 
				id={this.props.id} 
				style = {styles.container} 
				onMouseEnter={()=>this.changeIn(this.props.id)} 
				onMouseLeave={()=>this.changeOut(this.props.id)}
			>
				 
			</div>
		);
	}
}
    