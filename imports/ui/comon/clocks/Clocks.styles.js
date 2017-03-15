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
				//border :"3px solid white"
			},
		   clock : {
				container : {
					color : "#b89a53",
				},
				title : {
					fontSize : "1.7em", 
					fontWeight:"bold", 
					textAlign : "center"
				},
				time : {
					fontSize : "1em", 
					fontWeight:"normal", 
					textAlign : "center",
					color : "white",
					fontWeight : "bold"
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
				justifyContent : "space-around",
				flexWrap : "wrap",
				width : "100%",
				//border :"3px solid white"
			},
		     clock : {
				container : {
					color : "#b89a53",
				},
				title : {
					fontSize : "1em", 
					fontWeight:"bold", 
					textAlign : "center"
				},
				time : {
					fontSize : "0.7em", 
					fontWeight:"normal", 
					textAlign : "center",
					color : "white",
					fontWeight : "bold"
				},
				buttonBox : {
					display : "flex",
					justifyContent : "center"
				}
			}
	   },
   }
   return styles[options.device]
}
   
   


export default styles



