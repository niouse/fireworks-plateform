
const styles=function(options) {
	
   let theme = options.theme
   let screenWith = options.screenWidth
   let screenHeight = options.screenHeight
   
   let styles = {
	   pc : {
		   container : {
				color: theme.colors.primary,
				height : "100%",
				//overflow : "auto",
				width : "100%",
			   display : "flex",
			   flexDirection : "column",
				//padding : "0 20px 0 20px",
				//border : "3px solid green"
			},
			header : {
				display : "flex",
				justifyContent : "space-between",
				alignItems : "center",
				//margin : "25px 0 5px 0",
				//border : "1px solid green"
			},
		    content : {
				display : "flex",
				width:"100%",
				margin : "15px 0 0 0",
				flex : 1,
				display :"flex",
				justifyContent : "space-between",
				//border : "1px solid red",

			},
			center : {
				display : "flex",
				alignItems : "center",
				justifyContent : "center",
				width : "100%",
				height : "100%",
				color : theme.colors.primary,
				//border : "1px solid blue"
			},
			title : {
				maxWidth : "60%",
			},
			buttonBox : {
				display : "flex",
				//justifyContent : "space-between",
				alignItems : "center",	
			},
			button : {
				margin : 0,
				padding : 0,
				fontFamily : 'Play',
				//border : "1px solid red",
			},
			eventNumber : {
				margin : "0 10px 0 0",
				fontSize : "2em",
				fontWeight : "bold"
			},
			row : {
				margin : 0,
				padding : 0
			},
		    detailsBox : {
				justifyContent : "center",
				textJustify : "center",
				width : "50%",
				//border : "1px solid black",
				color : "black"
			},
		   details : {
			   width : "600px", 
			   color:"white", 
			   display:"flex"
		   },
		   details1 :{
			   width : "300px"
		   },
		   details2 :{
			   width : "300px"
		   },
			teamBox : {
				//flex:1,
				width : "48%",
				height : "100%",
				padding : "0px 10px 0px 10px",
				borderStyle: "solid",
				borderColor: theme.colors.primary,
			},
		    subBox : {
				height : "100%",
				width : "48%",
				padding : "0px 10px 0px 10px",
				borderStyle: "solid",
				borderColor: theme.colors.primary,
			},
			usersBox : {
				display : "flex",
				flexWrap : "wrap",
				flex : 1,
				overflowY : "auto",
				margin : "10px 0 0 0"

			},
			smallTitle : {
				fontWeight : "bold",
				dontSize : "1.3em",
				textAlign : "center",
				margin : "10px 0 10px 0",
			},
			userBox : {
				width : "auto",
				height : "auto",
				margin: "0 10px 10px 0",
				cursor : "pointer",
				//border : "1px solid black",
			},
			image : {
				height : "70px",
				width : "70px",
				borderRadius : '35px',
				margin : "auto"
			},
			lastName : {
				//width : "100%",
				textAlign : "center",
				margin : "auto",
				//border:"1px solid black"
			},
		   nobodyMsg : {
			   //width : "100%",
			   textAlign : "center",
			   margin : "10px auto 0px 10px",
		   }
	   },
	   smartPhone : {
		   container : {
				color: theme.colors.primary,
				height : "100%",
				//overflow : "auto",
				width : "100%",
			    display : "flex",
			    flexDirection : "column",
				//padding : "0 20px 0 20px",
				//border : "3px solid green"
			},
			header : {
				display : "flex",
				justifyContent : "space-between",
				flexDirection : "column",
				alignItems : "center",
				margin : "0px 0 20px 0",
				//border : "1px solid green"
			},
		    content : {
				display : "flex",
				width:"100%",
				margin : "15px 0 0 0",
				flex : 1,
				display :"flex",
				flexDirection:"column",
				justifyContent : "space-between",
				//border : "1px solid red",

			},
			center : {
				display : "flex",
				alignItems : "center",
				justifyContent : "center",
				width : "100%",
				height : "100%",
				color : theme.colors.primary,
				//border : "1px solid blue"
			},
			title : {
				margin : "0px 0px 20px 0px",
			},
			buttonBox : {
				display : "flex",
				//justifyContent : "space-between",
				alignItems : "center",	
				//margin: "0px 0px 20px 0px",
			},
			button : {
				margin : 0,
				padding : 0,
				fontFamily : 'Play',
				//border : "1px solid red",
			},
			eventNumber : {
				margin : "0 10px 0 0",
				fontSize : "2em",
				fontWeight : "bold"
			},
			row : {
				margin : 0,
				padding : 0
			},
		   detailsBox : {
				justifyContent : "center",
				textJustify : "center",
				//width : "50%",
				//border : "1px solid black",
				//color : "black"
			},
		   details : {
			   //width : "600px", 
			   color:"white", 
			  // display:"flex"
		   },
		   details1 :{
			   //width : "300px"
		   },
		   details2 :{
			  // width : "300px"
		   },
			teamBox : {
				//flex:1,
				//width : "100%",
				height : "200px",
				padding : "0px 10px 0px 10px",
				borderStyle: "solid",
				borderColor: theme.colors.primary,
			},
		    subBox : {
				//width : "100%",
				height : "200px",
				padding : "0px 10px 0px 10px",
				borderStyle: "solid",
				borderColor: theme.colors.primary,
				margin : "0px 0 20px 0",
			},
			usersBox : {
				display : "flex",
				flexWrap : "wrap",
				flex : 1,
				overflowY : "auto",
				margin : "10px 0 0 0"

			},
			smallTitle : {
				fontWeight : "bold",
				dontSize : "1.3em",
				textAlign : "center",
				//margin : "10px 0 10px 0",
			},
			userBox : {
				width : "auto",
				height : "auto",
				//margin: "0 10px 10px 0",
				cursor : "pointer",
				marginLeft : "5px",
				//border : "1px solid black",
			},
			image : {
				height : "24px",
				width : "24px",
				borderRadius : '12px',
				margin : "auto"
			},
			lastName : {
				//width : "100%",
				textAlign : "center",
				margin : "auto",
				fontSize : "0.5em"
				//border:"1px solid black"
			},
		   nobodyMsg : {
			   //width : "100%",
			   textAlign : "center",
			   margin : "10px auto 0px 10px",
		   }
	   }
   }
   
   return styles[options.device]
}

export default styles

