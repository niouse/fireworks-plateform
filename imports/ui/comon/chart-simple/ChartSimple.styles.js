
const styles=function(options) {
	
   let theme = options.theme
   let screenWidth = options.screenWidth
   let screenHeight = options.screenHeight
   
   let styles = {
	   pc : {
		   container : {
			   hight : "300px"
			}
	   },
	   smartPhone : {
		   container : {

			}
	   }
   }
   
   return styles[options.device]
}

export default styles

