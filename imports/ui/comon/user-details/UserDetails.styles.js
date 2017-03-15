
const styles=function(options) {
	
   let theme = options.theme
   let screenWidth = options.screenWidth
   let screenHeight = options.screenHeight
   
   let styles = {
	   pc : {
		   container :{
				//width : "100%",
				height : "100%",
			    backgroundColor : theme.colors.component,
			    fontFamily : "Play",
			    padding : "20px",
			    //border:"1px solid red"
			},
			userTitle : {
				color : theme.colors.primary,
				textAlign : "center",
				//border:"1px solid red",
				width : "100%"
			},
		   table : {
			   color:theme.colors.primary, 
			   width:"100%", 
			   //padding:"10px", 
			   fonSize:"1.2em",
			   //border:"1px solid red",
			   row : {
				   display:"flex", 
				   width:"100%", 
				   margin:"10px 0 0 0",
				   //border:"1px solid red"
			   },
			   column : {
				   width:"100%", 
				   //border:"1px solid red"
			   }
		   }
	   },
	   smartPhone : {
		   container :{
				width : "100%",
				height : "100%",
			    backgroundColor : theme.colors.component,
			    fontFamily : "Play",
			},
			userTitle : {
				color : theme.colors.primary,
				textAlign : "center",
				marginTop : "30px",
				width : "100%"
			},

		    table : {
			   color:theme.colors.primary, 
			   width:"100%", 
			   padding:"10px", 
			   fonSize:"1.2em",
			   row : {
				   display:"flex", 
				   width:"100%", 
				   margin:"10px 0 00"
			   },
			   column : {
				   width:"100%", 
			   }
		   }
	   }
   }
   
   return styles[options.device]
}

export default styles

