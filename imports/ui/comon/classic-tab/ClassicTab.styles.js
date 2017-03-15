
const styles=function(options, tabUrl) {
	
   let theme = options.theme
   let screenWidth = options.screenWidth
   let screenHeight = options.screenHeight
   
   let styles = {
	   pc : {
		   container :{
				backgroundImage : tabUrl,
				backgroundSize : "0% 80%",
				backgroundRepeat:"no-repeat",
				backgroundPosition:"center center",
				//height : "300px",
				width : "100%",
				paddingBottom : "100%",
				//border : "3px solid white",
				cursor : "pointer",
				zIndex:300
			},
			itemName : {
				position : "absolute",
				width : "100%",
				top : "80%",
				textAlign : "center",
				color : "white",
				fontSize : "0.2em"
			},
	   },
	   smartPhone : {
		     container :{
				backgroundImage : tabUrl,
				backgroundSize : "0% 80%",
				backgroundRepeat:"no-repeat",
				backgroundPosition:"center center",
				//height : "300px",
				width : "100%",
				paddingBottom : "100%",
				//border : "3px solid white",
				cursor : "pointer",
				zIndex:300
			},
			itemName : {
				position : "absolute",
				width : "100%",
				top : "80%",
				textAlign : "center",
				color : "white",
				fontSize : "0.2em"
			},
	   }
   }
   
   return styles[options.device]
}

export default styles

