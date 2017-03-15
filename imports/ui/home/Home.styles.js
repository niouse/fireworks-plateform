

const styles=function(options) {
	
   let theme = options.theme
   let screenWidth = options.screenWidth
   let screenHeight = options.screenHeight
   
   let styles = {
	   pc : {
		   container : {
				width : "100%"
			},
			itemGrid : {
				display : "flex",
				justifyContent : "space-around",
				flexWrap : "wrap",
				height : "auto",
				width : "100%",
				margin : "50px 0 0 0"
			},
			tab : {
				width : "200px",
				height : "200px",
			},
			clocksContainer : {
				width : "100%",
				maxWidth : "1280px",
				margin : "50px 0 0 0",
				position : "fixed",
				bottom : "100px"
			}
	   },
	   smartPhone : {
		   container : {
				width : "100%"
			},
			itemGrid : {
				display : "flex",
				justifyContent : "space-around",
				flexWrap : "wrap",
				height : "auto",
				width : "100%",
				margin : "50px 0 0 0"
			},
			tab : {
				width : "150px",
				height : "150px",
			},
			clocksContainer : {
				width : "100%",
				maxWidth : "1280px",
				margin : "50px 0 0 0",
				position : "fixed",
				bottom : "100px"
			}
	   }
   }
   
   return styles[options.device]
}

export default styles
