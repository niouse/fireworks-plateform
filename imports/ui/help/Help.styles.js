
const styles=function(options) {
	
   let theme = options.theme
   let screenWidth = options.screenWidth
   let screenHeight = options.screenHeight
   
   let styles = {
	   pc : {
		   container : {
			   color : theme.colors.primary
			},
		   title : {
			   
		   },
		   content : {
			   
		   }
	   },
	   smartPhone : {
		   container : {
			   color : theme.colors.primary
			},
		   title : {
			   
		   },
		   content : {
			   
		   }
	   }
   }
   
   return styles[options.device]
}

export default styles

