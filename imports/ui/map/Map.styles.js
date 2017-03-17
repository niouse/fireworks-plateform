
const styles=function(options) {
	
   let theme = options.theme
   let screenWidth = options.screenWidth
   let screenHeight = options.screenHeight
   
   let styles = {
	   pc : {
		   container : {
			   width: "100%",
			   maxWidth : "1280px",
			   margin : "auto"
			   //display:"flex",
			   //flexWrap : "wrap",
			   //justifyContent : "space-between",
			   //border : "1px solid red"
			},
		    header : {
			   width : "100%",
			   minWidth : "900px",
			   marginBottom : "40px",
			   //border : "1px solid blue"
		   },
		   content : {
			   //border : "1px solid blue",
		   },
		   mapBox : {
			   width : "80%",
			   height : "500px",
			   margin : "0px auto 20px auto",
			   padding : "20px",
			   backgroundColor : theme.colors.component,
			   //border : "1px solid red",
			   
		   },
		   eventDetails : {
			   //marginTop : "20px",
			   width : "80%",
			   height : "500px",
			   margin : "0px auto 20px auto",
			   padding : "20px",
			   backgroundColor : theme.colors.component,
			   //border : "1px solid green",
		   },
		   sendEmailBox : {
			   height:"100%", 
			   width:"100%", 
			   position:"fixed", 
			   top:0, 
			   left : 0
		   }
	   },
	   smartPhone : {
		   container : {
			   width: "100%",
			},
		    header : {
			   width : "100%",
			   marginBottom : "20px",
		   },
		   content : {
			   //border : "1px solid blue",
		   },
		   mapBox : {
			   width : "80%",
			   height : "500px",
			   margin : "0px auto 20px auto",
			   padding : "20px",
			   backgroundColor : theme.colors.component,
			   //border : "1px solid red",
			   
		   },
		   eventDetails : {
			   //marginTop : "20px",
			   width : "80%",
			   height : "500px",
			   margin : "0px auto 20px auto",
			   padding : "20px",
			   backgroundColor : theme.colors.component,
			   //border : "1px solid green",
		   },
		   sendEmailBox : {
			   height:"100%", 
			   width:"100%", 
			   position:"fixed", 
			   top:0, 
			   left : 0
		   }
	   },
   }
   
   return styles[options.device]
}

export default styles

