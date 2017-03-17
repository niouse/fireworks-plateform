
const styles=function(options) {
	
   let theme = options.theme
   let screenWith = options.screenWidth
   let screenHeight = options.screenHeight
   
   let styles = {
	   pc : {
		   container:{
				position:"fixed",
				top : 0,
				left : 0,
				width : "100vw",
				height:"100vh",
				justifyContent : "center",
				alignItems : "center",
				//zIndex : 300,
				backgroundColor : 'rgba(0,0,0,0.2)',
				backgroundOpacity : 0.2,
				content : {
					height : "auto",
					width : "auto",
					display: "flex",
					flexWrap : "wrap",
					maxWidth : "300px",
					margin : "auto",
					backgroundColor : "white",
					padding : "20px",
					//border : "3px solid black",
					title : {
						margin : "auto auto 20px auto",
						fontWeight : "bold",
						fontSize: "1.1em",
						color : "#b89a53",
						fontFamily : 'Play'
					},
					message : {
						margin : "30px 10% 30px 10%"
					},
					inputs : {
						//maxWidth : "50px",
						fontFamily : 'Play',
						margin : "auto 0 auto 10px",  
					},
					selectField : {
						//maxWidth : "70px",
						marginLeft : "10px"
					}
				}
			},

			tableRow :{
				display : "flex",
				flexWrap : "wrap",
				//width : "100%",
				margin : "auto auto 15px auto"
			},
			tableCell : {
				//flex : 1,
				width : "250px",
			},
			tableCell2 : {
				//flex : 1,
				width : "250px",
			},
			buttonBox : {
				width : "100%",
				marginTop : "10px"
			},
			button : {
				marginLeft : "5px",
				//float : "right"
			},
			message :{
				base : {
					color : "#65ff49",
					margin : "5px auto 5px auto"
				},
				warning : {
					color : "red"
				}
			}
	   },
	   smartPhone : {
		   container:{
				position:"fixed",
				top : 0,
				left : 0,
				width : screenWith,
				height: screenHeight,
			    overflow:"auto",
				justifyContent : "center",
				alignItems : "center",
				//zIndex : 300,
				backgroundColor : 'rgba(0,0,0,0.2)',
				backgroundOpacity : 0.2,
				content : {
					height : "auto",
					width : "auto",
					display: "flex",
					flexWrap : "wrap",
					maxWidth : "300px",
					margin : "auto",
					backgroundColor : "white",
					padding : "20px",
					//border : "3px solid black",
					title : {
						margin : "auto auto 20px auto",
						fontWeight : "bold",
						fontSize: "1.1em",
						color : "#b89a53",
						fontFamily : 'Play'
					},
					message : {
						margin : "30px 10% 30px 10%"
					},
					inputs : {
						//maxWidth : "50px",
						fontFamily : 'Play',
						margin : "auto 0 auto 10px",  
					},
					selectField : {
						//maxWidth : "70px",
						marginLeft : "10px"
					}
				}
			},

			tableRow :{
				display : "flex",
				flexWrap : "wrap",
				//width : "100%",
				margin : "auto auto 15px auto"
			},
			tableCell : {
				//flex : 1,
				width : "250px",
			},
			tableCell2 : {
				//flex : 1,
				width : "250px",
			},
			buttonBox : {
				width : "100%",
				marginTop : "10px"
			},
			button : {
				marginLeft : "5px",
				//float : "right"
			},
			message :{
				base : {
					color : "#65ff49",
					margin : "5px auto 5px auto"
				},
				warning : {
					color : "red"
				}
			}
	   },
   }
   
   return styles[options.device]
}

export default styles

