
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
			   width : "80%",
			   display : "flex",
			   margin: "auto",
			   justifyContent : "space-between"
		   },
		   userFinder : {
			   width : "600px",
			   height : "auto",
			   //border:"1px solid blue"
			   
		   },
		   userDetails:{
			   width : "300px",
			   height : "auto",
			   //border:"1px solid blue"
		   }
	   },
	   smartPhone : {
		    container : {
			   width: "100%",
			   //display:"flex"
			},
		   header : {
			   width : "100%",
			   marginBottom : "20px",
		   },
		    content : {

		   },
		   userFinder : {
			   width : "100%",
			   
		   },
		   userDetails:{
			   width : "100%",
		   }
	   }
   }
   
   return styles[options.device]
}

export default styles

