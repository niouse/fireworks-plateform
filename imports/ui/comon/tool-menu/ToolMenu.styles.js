
const styles=function(options) {
	
   let theme = options.theme
   let screenWidth = options.screenWidth
   let screenHeight = options.screenHeight
   
   let styles = {
	   pc : {
		   container : {
				display : "flex",
				width : "100%",
			    fontFamily : "Play",
				//border : "1px solid black"
				//flexWrap: "wrap",
			},
			toolMenu : {
				display : "flex",
				flex : 1,
				height : "100%",
				flexWrap: "wrap",
				justifyContent : "flex-end",
				//margin : "0px 20px 0px 10px",
				//border : "1px solid red"
			},
			toolButton : {
				marginRight: 20,
				attr : {
				}
			},
			title : {
				display : "flex",
				alignItems : "center",
				color : "#b89a53",
				fontSize : "40px",
				fontWeight : 900,
				margin : 0,
				padding : 0,
				fontFamily : 'Play',
				//border : "1px solid green"
			},
	   },
	   smartPhone : {
		     container : {
				display : "flex",
				alignItems : "center",
				width : "100%",
				marginTop : "52px",
				fontFamily : "Play",
				//border : "1px solid blue"
				//flexWrap: "wrap",
			},
			toolMenu : {
				display : "flex",
				flex : 1,
				height : "100%",
				flexWrap: "wrap",
				justifyContent : "flex-end",
				//margin : "10px 20px 0px 10px",
				//border : "1px solid red"
			},
			toolButton : {
				marginRight: 5,
				attr : {
					mini : true
				}	
			},
			title : {
				//display : "flex",
				//alignItems : "center",
				color : "#b89a53",
				fontSize : "1.5em",
				fontWeight : 900,
				margin : 0,
				padding : 0,
				fontFamily : 'Play',
				//border : "1px solid green"
			},
	   }
	}
   	return styles[options.device]
}


export default styles

