
const styles=function(options) {
	
   let theme = options.theme
   let screenWidth = options.screenWidth
   let screenHeight = options.screenHeight
   
   let styles = {
	   pc : {
		   container :{
				height : "100%",
			    //width : "100%",
			   display : "flex",
			   flexDirection: "column",
			   backgroundColor : theme.colors.component,
			   fontFamily : "Play",
			   padding : "20px",
			},
			searchBar : {
				display : "flex",
				margin : "0px 0 10px 0",
				width : "100%",
				justifyContent : "space-around",
				alignItems : "center",
				color : theme.colors.primary,
				borderTop: "1px solid #b89a53",
				borderBottom: "1px solid #b89a53",
			},
		    searchTitle : {
				
			},
			gallery : {
				display : "flex",
				flexWrap: "wrap",
				flex : 1,
				overflowY : "auto",
				//border : "1px solid red"
			},

			image : {
				width : "74px",
				height : "74px",
				borderRadius : '37px'
			},
			userBox : {
				width : "80px",
				display : "flex",
				flexDirection : "column",
				alignItems : "center",
				height : "90px",
				//marginBottom : "10px",
				cursor : "pointer",
				margin : "15px",
				//border : "1px solid red"
			},
			lastName : {
				//width : "100%",
				textAlign : "center",
				marginTop : "5px",
				color : theme.colors.primary,
				//border:"1px solid black"
			}	
	   },
	   smartPhone : {
		   container :{
				height : "100%",
				flex : 1,
			    backgroundColor : theme.colors.component
			},
			searchBar : {
				display : "flex",
				margin : "0px 0px 10px 0",
				width : "100%",
				justifyContent : "space-around",
				alignItems : "center",
				color : theme.colors.primary,
				borderTop: "1px solid #b89a53",
				borderBottom: "1px solid #b89a53",
			},
		    searchTitle : {
				display : "none"
			},
			gallery : {
				display : "flex",
				flexWrap: "wrap",
				flex : 1,
				justifyContent : "space-around",
				//height : "90%",
				//border : "1px solid black",
				//overflow : "scroll",
				//height : "600px",
				//justifyContent : "space-around",
				//marginTop : "60px",
				overflowY : "auto",
				//border : "1px solid red"
			},

			userBox : {
				width : "50px",
				height : "60px",
				display : "flex",
				flexDirection : "column",
				alignItems : "center",
				cursor : "pointer",
				margin : "5px",
				fontSize: "0.5em"
				//border : "1px solid red"
			},
		    image : {
				width : "32px",
				height : "32px",
				borderRadius : '16px'
			},
			lastName : {
				//width : "100%",
				marginTop : "5px",
				textAlign : "center",
				margin : "auto",
				color : theme.colors.primary
				//border:"1px solid black"
			}
	   }
   }
   
   return styles[options.device]
}

export default styles

