
const styles=function(options) {
	
   let theme = options.theme
   let screenWidth = options.screenWidth
   let screenHeight = options.screenHeight
	
   let styles = {
	   pc : {
			 container : {
				zIndex : 200,
				width : "100%",
				height : "35px",
				display : "flex",
				//alignItems : "space-between",
				justifyContent :  "space-between",
				backgroundColor : 'black',
				color : theme.colors.textSecondary,
				 fontFamily : 'Play'
			},
			right : {
				width : "100%",
				flex : 1,
				display : "flex",
				alignItems : "center",
				justifyContent : "flex-end",
				paddingRight : "10px"
				//border : "1px solid blue"
			},
			left : {
				display : "flex",
				alignItems : "center",
				flex : 1,
			},
			userInfos : {
				margin : "0 20px 0 0",
				height:"100%",
				...theme.layouts.center
			},
			avatar : {
				width:"30px",
				height:"30px", 
				borderRadius:"15px",
				margin:"0px 10px 0px 10px"
			},
			iconButton : {
				//display : "none"
			},
			iconButtonMenu : {
				display : "none"
			},
			icons : {
				 marginRight: 24,
				 attr : {
					 color:theme.colors.primary,
					 hoverColor:theme.colors.secondary
				 }
			},
			menuIcon : {
				//display : "none"
			},
			title: {
				cursor: 'pointer',
			  },
			date : {
				//color : theme.colors.textSecondary,
				margin : "0 20px 0 0",
				width : "100%",
				height:"100%",
				display : "flex",
				justifyContent : "flex-end",
				alignItems : "center"
				//...theme.layouts.center
			},
	   },
	   smartPhone : {
			 container : {
				zIndex : 9999,
				width : "100%",
				height : "35px",
				display : "flex",
				//alignItems : "space-between",
				justifyContent :  "space-between",
				backgroundColor : 'black',
				color : theme.colors.textSecondary,
				fontFamily : 'Play'
			},
			right : {
				//width : "100%",
				display : "flex",
				alignItems : "center",
				justifyContent : "flex-end",
				minWidth : "100px"
				//border:"1px solid blue"
			},
			left : {
				display : "flex",
				alignItems : "center",
				flex : 1,

			},
			userInfos : {
				margin : "0 20px 0 0",
				height:"100%",
				...theme.layouts.center,
				//fontSize : "2em"
			},
			avatar : {
				width:"24px",
				height:"24px", 
				borderRadius:"16px",
				margin:"0px 10px 0px 5px"
			},
			iconButton : {
				display : "none"
			},
			iconButtonMenu : {
				width : 32, 
				height:32,
				margin :0,
				padding:0,
				menu : {
					width : "150px"
				},
				list : {
					//width : screenWidth,
					//fontSize : "3em",
					//height : "130px",
					//display : "flex",
					alignItems : "center",
					//fontSize : "2em",
					borderTopColor : theme.colors.primary,
					borderTopStyle : "solid",
					borderTopWidth : "1px",
				}
			},
			icons : {
				//marginRight: 24,
				/*height : "90px",
				width : "90px",
				margin : 0,
				padding : 0*/
			},
			menuIcon : {
				width : 32, 
				height:32
			},
			title: {
				cursor: 'pointer',
			  },
			date : {
				display : "none"
			}
	   }
	}
   
   return styles[options.device]
}
export default styles
