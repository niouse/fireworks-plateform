
import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
//import PureRenderMixin from 'react-addons-pure-render-mixin';
//import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, DefaultRoute, Redirect } from 'react-router';

// EXTERNAL LIBS
//import moment from 'moment';

//MATERIAL COMPNENTS
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Checkbox from 'material-ui/Checkbox';
import DatePicker from 'material-ui/DatePicker';
import DropDownMenu from 'material-ui/DropDownMenu';

//MATERIAL ICONS




export default class  AddEvent extends Component {

	constructor(props){
		super(props);
		//this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);

		this.state = {
			canTest : false,
			message : "",
			showSettings : false,
            showMessage : false,
            message : "pas de message",
            eventType : "petit",
            eventName:"",
            eventCity:"",
            eventNb : 0,
            eventMinDate : new Date(),
            eventMaxDate : new Date(),
			eventShowDate : new Date(),
			lat : 0,
			lng : 0,
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
	
	addEvent(){
        let form = document.getElementById('eventForm');
        console.log(this.state.eventType)
		
        let infos = {
			name : form.name.value,
			city : form.city.value,
			type : this.state.eventType,
			nbTeam : form.nb.value,
			lat:0,
			lng:0,
			dateMin : this.state.eventMinDate,
			dateMax : this.state.eventMaxDate,
			dateShow : this.state.eventShowDate,
			year : this.state.eventMinDate.getFullYear(),
			status : "notReady",
			team : [],
			subscriptions : []
        }
        this.props.addEvent(infos)
    }
    
    changeEventType(event, index, value){
        this.setState({eventType: value})
    }
    
    handleChangeMinDate(event, date){
			this.setState({
			  eventMinDate: date,
			});
      };

	handleChangeMaxDate(event, date){
		this.setState({
			eventMaxDate: date,
		});
	};

	handleChangeShowDate(event, date){
		this.setState({
			eventShowDate: date,
		});
	};

	test(){

	}

 handleChange(event, index, value) {this.setState({value})}
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
                    <Paper zDepth={2} style={styles.container.content}>
                        <div style={styles.container.content.title}>Ajouter un Feu </div>

                        <form id="eventForm" style={{margin : "auto", width: "500px"}} action={"javascript:void(0)"}>

                            <div style={styles.serieInfo}>
                                <div style={styles.tableRow} className="flexi">
                                    <div style={styles.tableCell} className="flexi">Nom de l'évenement: </div>
                                    <div style={styles.tableCell2} className="flexi">
										<TextField name="name" style={styles.container.content.inputs} required={true}/>
									</div>
                                </div>
								
                                <div style={styles.tableRow} className="flexi">
                                    <div style={styles.tableCell} className="flexi">Nom de la ville: </div>
                                    <div style={styles.tableCell2} className="flexi">
										<TextField name="city" style={styles.container.content.inputs} />
									</div>
                                </div>
								
                                <div style={styles.tableRow} className="flexi">
                                    <div style={styles.tableCell} className="flexi">type de feu:</div>
                                    <div style={styles.tableCell2} className="flexi">
                                         <SelectField 
                                            style={styles.container.content.selectField}  
                                            value={this.state.eventType}
                                            name="type"
                                            onChange={(event, index, value)=>this.changeEventType(event, index, value)}
                                        >
                                            <MenuItem value="petit" primaryText="petit" />
                                            <MenuItem value="moyen" primaryText="moyen" />
                                            <MenuItem value="gros"  primaryText="gros" />
                                        </SelectField>
                                    </div>
                                </div>
								
                                <div style={styles.tableRow} className="flexi">
                                    <div style={styles.tableCell} className="flexi">Nombre de personnes :
                                         </div>
                                    <div style={styles.tableCell2} className="flexi">
										<TextField name="nb" style={styles.container.content.inputs} type="number"/>
                                    </div>
                                </div>
                                
								<div style={styles.tableRow} className="flexi">
                                    <div style={styles.tableCell} className="flexi">Date du show: </div>
                                    <div style={styles.tableCell2} className="flexi">
                                        <DatePicker name="dateShow" value={this.state.eventShowDate} onChange={(event, date)=>this.handleChangeShowDate(event, date)}/>
                                    </div>
                                </div>
								
                                <div style={styles.tableRow} className="flexi">
                                    <div style={styles.tableCell} className="flexi">Date de début: </div>
                                    <div style={styles.tableCell2} className="flexi">
                                        <DatePicker name="dateMin" value={this.state.eventMinDate} onChange={(event, date)=>this.handleChangeMinDate(event, date)}/>
                                    </div>
                                </div>
                                
                                <div style={styles.tableRow} className="flexi">
                                    <div style={styles.tableCell} className="flexi">Date de fin: </div>
                                    <div style={styles.tableCell2} className="flexi">
                                        <DatePicker name="dateMax" value={this.state.eventMaxDate} onChange={(event, date)=>this.handleChangeMaxDate(event, date)}/>
                                    </div>
                                </div>
                               
                                
                                <div style={styles.tableRow} className="flexi">
                                    <div className="flexi">
                                        <Checkbox
                                          label="Alerter les artificiers par mail"
                                          labelStyle = {Object.assign({}, styles.play)}
                                          style={styles.checkbox}
                                          onCheck={(e)=>{return}}
                                        />
                                    </div>
                                
                                </div>
                                
                            </div>

                            {this.state.showMessage && <div style={[styles.message.base, this.state.error && styles.message.warning]}>{this.state.message}</div>}
                            <div style={styles.buttonBox}>
                                <RaisedButton onClick={()=>{this.addEvent()}} label="Ajouter" style={styles.button}/>
                                <RaisedButton onClick={()=>this.props.close()} label="Fermer" style={styles.button}/>
                            </div>
                        </form>

                    </Paper>
                </div>	
		);
	}
}
    