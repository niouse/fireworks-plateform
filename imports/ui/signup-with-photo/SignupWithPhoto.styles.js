
const getStyles=function(options) {
   let theme = options.theme
   let screenWidth = options.screenWidth
   let screenHeight = options.screenHeight
   let styles = {
	  pc :{
		 container: {
			width: "900px",
			height:"630px",
			display: "flex",
			//justifyContent: "center",
			flexDirection: "column",
			alignItems: "center",
			margin: "auto",
			//border:"1px solid black",
			fontFamily : theme.fonts.main
		},
		header : {
			//border:"1px solid red",
			width:"100%",
			height : "30px",
			textAlign : "center",
			fontSize : "1.5em",
			fontWeight : "bold",
			color : theme.colors.primary
		},
		footer : {
			display : "flex",
			justifyContent : "space_between",
			alignItems : "center",
			width : "100%",
			height : "50px",
		},
		content : {
			display : "flex",
			width : "100%",
			height : "550px",
			//border:"1px solid blue"
		},
		fields :{
			width:"20%",
			height:"100%",
			display: "flex",
			padding : "0px 10px 0px 10px",
			//justifyContent: "center",
			flexDirection: "column",
			alignItems: "center",
			justifyContent : "space-around",
			//border:"1px solid blue",
			textField: {
				width: '100%',
				margin : "0px"
			},
			menu : {
				width: '100%',
				margin : "10px 0 10px 0"
			},
		},
		photoEdit : {
			flex:1,
			height : "100%",
			width : "70%",
			display : "flex",
			flexDirection : "column",
			//border:"1px solid black",
			photoInputBox : {
				display : "flex",
				flexDirection : "column",
				width : "100%",
				//padding : "10px",
				height : "30px",
				alignItems : "center",
				//margin : "10px 5px 10px 5px"
			},
			photoInputLabel : {
				color : theme.colors.secondary,
				margin : "0px 10px 0px 10px",
				fontFamily : theme.fonts.main,
			},
			photoInput : {
				//margin : "10px 5px 10px 5px"
				//border:"1px solid black",
				width: "100%",
				marginTop:"5px",
			},
			photoBox : {
				width : "100%",
				height : "480px",
				//flex : 1,
				//border:"1px solid green",
				display : "flex",
				justifyContent : "center",
				alignItems : "center"
			},
			photo : {
				maxWhidth : "100%",
				height : "200px",
				margin: "auto",
				//border:"1px solid black"
			},
			toolsBox : {
				width : "100%",
				display : "flex",
				justifyContent : "space-around",
				alignItems : "center",
				height : "40px",
				//border:"1px solid black"
			},
			toolsButton : {
				width : "30px",
				height : "30px",
				//border:"1px solid black",
				margin : 0,
				padding : 0
			},
		},
		message:{
			fontSize:"1em",
			flex : 1,
			marginLeft : "10px",
			//textAlign: "center",
			successMessage :{
				color: theme.colors.good
			},
			errorMessage: {
				color: theme.colors.warning
			}
		},	
		submitButton : {
		   margin : "0px 5px 10px 0px"
		},
	  },
	  smartPhone :{
		 container: {
			maxWidth: "100%",
			display: "flex",
			justifyContent: "center",
			flexDirection: "column",
			alignItems: "center",
			margin: "20px auto 0 auto",
			fontFamily: "Play"
		},
		header : {
			//border:"1px solid red",
			width:"100%",
			height : "30px",
			textAlign : "center",
			fontSize : "1.5rem",
			fontWeight : "bold",
			//color : theme.colors.primary
		},
		footer : {
			display : "flex",
			flexDirection:"column",
			justifyContent : "space_between",
			alignItems : "center",
			width : "100%",
			height : "50px",
		},
		content : {
			display : "flex",
			flexDirection : "column",
			alignItems : "center",
			width : "100%",
			height : "auto",
			//border:"1px solid blue"
		},
		fields :{
			width:"50%",
			height:"auto",
			display: "flex",
			margin:"auto",
			//padding : "0px 10px 0px 10px",
			//justifyContent: "center",
			flexDirection: "column",
			alignItems: "center",
			justifyContent : "space-around",
			//border:"1px solid blue",
			textField: {
				width: '100%',
				margin : "0px"
			},
			menu : {
				width: '100%',
				margin : "10px 0 10px 0"
			},
		},
		photoEdit : {
			//flex:1,
			height : "200px",
			width : "80%",
			display : "flex",
			flexDirection : "column",
			//border:"1px solid black",
			photoInputBox : {
				display : "flex",
				flexDirection : "column",
				AlignItems : "center",
				width : "100%",
				//padding : "10px",
				height : "auto",
				alignItems : "center",
				margin : "10px 0 10px 0"
			},
			photoInputLabel : {
				color : theme.colors.secondary,
				margin : "0px 10px 0px 10px",
				fontFamily : theme.fonts.main,
			},
			photoInput : {
				width: "100%",
				marginTop:"5px",
			},
			photoBox : {
				/*width : "100%",
				height : "200px",*/
				flex : 1,
				//border:"1px solid green",
				display : "flex",
				justifyContent : "center",
				alignItems : "center"
			},
			photo : {
				maxWidth : "100%",
				maxHeight : "100px",
				margin: "auto",
				//border:"1px solid black"
			},
			toolsBox : {
				width : "100%",
				display : "flex",
				justifyContent : "space-around",
				alignItems : "center",
				height : "40px",
				//border:"1px solid black"
			},
			toolsButton : {
				width : "30px",
				height : "30px",
				//border:"1px solid black",
				margin : 0,
				padding : 0
			},
		}, 
		message:{
			fontSize:"1em",
			flex : 1,
			textAlign : "center",
			marginLeft : "10px",
			//textAlign: "center",
			successMessage :{
				color: theme.colors.good
			},
			errorMessage: {
				color: theme.colors.warning
			}
		},	
		submitButton : {
		   margin : "0px 5px 10px 0px",
		   width : "50%"
		},
	  },
  }
   return styles[options.device]
}
export default getStyles
