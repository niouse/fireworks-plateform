const styles=function(options) {
	
   let theme = options.theme
   let screenWidth = options.screenWidth
   let screenHeight = options.screenHeight
   
   let styles = {
	   pc : {
		   container : {
				display : "flex",
				justifyContent : "space-around",
				flexWrap : "wrap",
				width : "100%",
				margin : "80px 0 0 0",
			    paddingTop : "30px",
				borderTopStyle : "solid",
				borderTopColor : theme.colors.primary,
				borderTopWidth : "1px",
			},
		   clock : {
				container : {
					color : "#b89a53",
				},
				titleBox : {
					fontSize : "1.7em", 
					fontWeight:"bold", 
					textAlign : "center"
				},
			   title : {
				   
			   },
				timeBox : {
					fontSize : "1em", 
					fontWeight:"normal", 
					textAlign : "center",
					color : "white",
					fontWeight : "bold"
				},
			    tiùe : {
					
				},
				buttonBox : {
					display : "flex",
					justifyContent : "center"
				}
			}
	   },
	   smartPhone : {
		   container : {
				display : "flex",
			    flexDirection : "column",
				//justifyContent : "space-around",
				//flexWrap : "wrap",
				width : "100%",
				margin : "80px 0 0 0",
				borderTopStyle : "solid",
				borderTopColor : theme.colors.primary,
				borderTopWidth : "1px",
			},
		     clock : {
				container : {
					color : "#b89a53",
					marginTop : "20px",
					display : "flex",
					alignItems : "center",
					//border : "1px solid red"
				},
				titleBox : {
					width : "40%",
					height : "100%",
					fontSize : "1em", 
					fontWeight:"bold", 
					display : "flex",
					//flex : 1,
					alignItems : "center",
					
				},
				title : {
					height : "1em",
					//border : "1px solid green"
				},
				timeBox : {
					width : "20%",
					height : "100%",
					fontSize : "0.7em", 
					fontWeight:"normal", 
					marginLeft:"10px",
					display : "flex",
					alignItems : "center",
					color : "white",
					fontWeight : "bold",
					//border : "1px solid green"
					
				},
				time : {
					height : "1em",
					//border : "1px solid blue"
				},
				buttonBox : {
					width : "40%",
					display : "flex",
					alignItems : "center",
					justifyContent : "flex-end",
					//border : "1px solid yellow"
				}
			}
	   },
   }
   return styles[options.device]
}
   
   


export default styles



