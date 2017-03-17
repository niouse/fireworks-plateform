
const styles=function(options) {
	
   let theme = options.theme
   let screenWidth = options.screenWidth
   let screenHeight = options.screenHeight
   
   let styles = {
	   pc : {
		   container : {
			   width : "100%",
			   height : "100%",
			  // display : "flex",
			   position : "relative"
			},
		   map : {
			   width : "100%",
			   height : "100%",
			   flex : 1,
			   position : "absolute",
			   //border : "1px solid red"
		   },
		   toggleOptions : {
			   position : "relative",
			   width : "50px",
			   top : "50%",
			   left : "20px",
			   zIndex : 100,
			   cursor : "pointer",
			   //border : "1px solid black"
		   },
		   toggleOptionsIcon : {
			   width : "50px", 
			   height:"50px",
			   borderColor : theme.colors.primary,
			   borderStyle : "solid",
			   attr : {
				   color : theme.colors.primary
			   }
		   },
		   drawerHeader  :{
			   display : "flex",
			   justifyContent : "space-between",
			   marginBottom : "10px"
			   
		   },
		   drawerTitle  :{
			   width : "80%",
			   display : "flex",
			   justifyContent : "space-between",
		   },
		   drawerClose  :{
			   fontWeight : "900",
			   sontSize : "2em",
		   },
		    checkBox : {
				
			},
		   markersOptionsList : {
			   width : "100%",
			   //height : "100%",
			   padding : "10px",
		   },
		   markerOption : {
			   width : "80%",
			   height : "50px",
			   //marginLeft : "10px"
		   }
	   },
	   smartPhone : {
		   container : {
			   width : "100%",
			   height : "100%",
			  // display : "flex",
			   position : "relative"
			},
		   map : {
			   width : "100%",
			   height : "100%",
			   flex : 1,
			   position : "absolute",
			   //border : "1px solid red"
		   },
		   toggleOptions : {
			   position : "relative",
			   width : "50px",
			   top : "50%",
			   left : "20px",
			   //zIndex : 100,
			   cursor : "pointer",
			   //border : "1px solid black"
		   },
		   toggleOptionsIcon : {
			   width : "50px", 
			   height:"50px",
			   borderColor : theme.colors.primary,
			   borderStyle : "solid",
			   attr : {
				   color : theme.colors.primary
			   }
		   },
		   drawerHeader  :{
			   display : "flex",
			   justifyContent : "space-between",
			   marginBottom : "10px"
			   
		   },
		   drawerTitle  :{
			   width : "80%",
			   display : "flex",
			   justifyContent : "space-between",
		   },
		   drawerClose  :{
			   fontWeight : "900",
			   sontSize : "2em",
		   },
		    checkBox : {
				
			},
		   markersOptionsList : {
			   width : "100%",
			   //height : "100%",
			   padding : "10px",
		   },
		   markerOption : {
			   width : "80%",
			   height : "50px",
			   //marginLeft : "10px"
		   }
	   },
   }
   
   return styles[options.device]
}

export default styles

