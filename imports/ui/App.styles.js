
const styles=function(options) {
	
   let theme = options.theme
   let screenWidth = options.screenWidth
   let screenHeight = options.screenHeight
	
   let styles = {
	   pc : {
		   container : {
			   fontFamily : 'Play'
		   },
			header : {
				width : "100vw",
				height : "100px"
			},
			navigation : {
				position : "fixed",
				left : 0,
				top : 50,
				width:"100%"
			}
	   },
	   smartPhone : {
		   container : {
			   fontFamily : 'Play',
			   width : "100%"
		   },
			header : {
				width : "100%",
				height : "35px"
			},
			navigation : {
				position : "fixed",
				left : 0,
				top : 0,
				width:"100%"
			}
		}
	}
   console.log(options.device)
   return styles[options.device]
}
export default styles
