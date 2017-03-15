import React, { Component } from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, DefaultRoute } from 'react-router';

// APP COMPONENTS
import Navigation from './navigation/Navigation.container.jsx';
import Login from "./login/Login.container.jsx";
import Signup from './signup/Signup.container.jsx';
import SignupWithPhoto from './signup-with-photo/SignupWithPhoto.container.jsx';
import Home from "./home/Home.container.jsx";
import PageNotFound from './PageNotFound.jsx';



export default class App extends Component {
	constructor(){
	super()

	}

	componentDidMount(){
		//document.body.style['background-color']=this.state.theme.colors.main
		document.addEventListener("scroll", ()=>{
			let top = document.body.scrollTop;
			let el = document.querySelector("#navigation")
			let realTop = el.style.top
			let testTop = top + 'px'
			if (top>50){
				if (realTop !== testTop){el.style.top = "0px"}
				return
			}
			else {
				el.style.top = (50 - document.body.scrollTop) + 'px'
			}
			//console.log(document.body.scrollTop)            
		});
	}

	handleStyleChange(e){

	}

	handleBGChange(e){
		document.body.style['background-color']=e.target.value
	}

  render() {
	const styles = this.props.styles
    return (
      
		  <div className="container">
			<header style={styles.header}>
				<div style={styles.trbBand}>
					<img src="./comon/fond-ruggieri-base.png" style={styles.trbLogo}></img>
					<div style={styles.trbTitle}>RUGGIERI PLATEFORM</div>
            	</div>
	  			<Navigation 
					style={styles.navigation}
					stylesOptions={this.props.stylesOptions}
				/>
			</header>
			  <Router history={browserHistory}>
				    <Route 
						path="/" 
						component={Login} 
						stylesOptions={this.props.stylesOptions}
					/>
				  	<Route 
						path="/home" 
						component={Home} 
						stylesOptions={this.props.stylesOptions}
					/>
				    <Route 
						path="/login" 
						component={Login} 
						stylesOptions={this.props.stylesOptions}
					/>
				    <Route 
						path="/signup" 
						component={SignupWithPhoto} 
						stylesOptions={this.props.stylesOptions}
					/>
				    <Route path="*" component={PageNotFound}/>
			  </Router>
		  </div>
    );
  }
}