
const styles=function(options) {
	
   let theme = options.theme
   let screenWidth = options.screenWidth
   let screenHeight = options.screenHeight
   
   let styles = {
	   pc : {
		   container : {
				//width :"100%",
				color : theme.colors.textSecondary
			}
	   },
	   smartPhone : {
		   container : {
				//width :"100%",
				color : theme.colors.textSecondary
			}
	   }
   }
   
   return styles[options.device]
}

export default styles
