
const styles=function(options) {
	
   let theme = options.theme
   let screenWidth = options.screenWidth
   let screenHeight = options.screenHeight
	
   let styles = {
	   pc : {
		   container : {
			   fontFamily : 'Play'
		   },
			header : {
				width : "100vw",
				height : "100px"
			},
		    trbBand : {
				height : "50px",
				width : "100%",
				position : "absolute",
				top : 0,
				left : 0,
				//zIndex : 100,
				display : "flex",
				backgroundColor : theme.colors.primary,
			},
			trbLogo : {
				height : "50px",
				width : 'auto'
			},
			trbTitle : {
				fontFamily : 'Play',
				color : 'white',
				fontSize : "1.2em",
				fontWeight : "bold",
				//height : '100%',
				//display : 'flex',
				paddingLeft : '50px',
				margin : 'auto 0 auto 0',
				//alignItems : 'center'
			},
			navigation : {
				position : "fixed",
				left : 0,
				top : 50,
				width:"100%"
			}
	   },
	   smartPhone : {
		   container : {
			   fontFamily : 'Play',
			   width : "100%"
		   },
			header : {
				width : "100%",
				height : "35px"
			},
			navigation : {
				position : "fixed",
				left : 0,
				top : 0,
				width:"100%"
			},
		   trbBand : {
				height : "50px",
				width : "100%",
				position : "absolute",
				top : 0,
				left : 0,
				//zIndex : 100,
				display : "flex",
				backgroundColor : theme.colors.primary,
			},
			trbLogo : {
				height : "50px",
				width : 'auto'
			},
			trbTitle : {
				fontFamily : 'Play',
				color : 'white',
				fontSize : "1.2em",
				fontWeight : "bold",
				//height : '100%',
				//display : 'flex',
				paddingLeft : '50px',
				margin : 'auto 0 auto 0',
				//alignItems : 'center'
			},
			navigation : {
				position : "fixed",
				left : 0,
				top : 50,
				width:"100%"
			}
		}
	}
   console.log(options.device)
   return styles[options.device]
}
export default styles
