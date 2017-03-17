
const styles=function(options) {
	
   let theme = options.theme
   let screenWith = options.screenWidth
   let screenHeight = options.screenHeight
   
   let styles = {
	   pc : {
		   container : {
				width : "300px",
				height : "430px",
				position : "fixed",
				bottom : 0,
				right: 0,
				borderWidth : "3px",
				borderStyle : "solid",
				borderColor : theme.colors.primary,
				backgroundColor : theme.colors.main,
				margin: "auto",
				display : "flex",
				flexDirection : "column",
				borderRadius : "10px",
				overflow:"hidden"
				//justifyContent : "space-between"
			},
			header : {
				backgroundColor : theme.colors.primary,
				fontWeight : "bold",
				color : "white",
				textAlign : "center",

			},
			content : {
				flex : 1,
				display : "flex",
				flexDirection : "column",
				padding : "10px",
				//border : "1px solid black",
				color : theme.colors.primary,
				title : {
					width : "100%",
					height : "20px",
					margin : "10px 0 5px 0",
					//border : "1px solid black",
					//textAlign : "center",			
				},
				receiver : {
					width : "100%",
					color : theme.colors.primary,
					selectField : {
						underlineStyle : {
							borderColor : theme.colors.primary
						},
						floatingLabelStyle : {
						},
						labelStyle : {
							color : theme.colors.primary,
						},
						iconStyle : {

						},
						underlineFocusStyle : {
							borderColor : theme.colors.primary
						},
					},

				},
				message : {
					//flexGroth : 1,
					width : "100%",
					inputStyle : {

					},
					textField : {
						underlineStyle : {
							borderColor : theme.colors.primary
						},
						hintStyle : {
							color : theme.colors.primary,
						},
						textareaStyle:  {
							color : theme.colors.primary,
						},
						underlineStyle : {
							borderColor : theme.colors.primary
						},
						underlineFocusStyle : {
							borderColor : theme.colors.primary
						},

					},

					//border : "1px solid black",
				}

			},
			footer : {
				padding : "10px",
				display : "flex",
				justifyContent : "space-around",
				button : {
					backgroundColor : theme.colors.primary,

				}
			},	
	   },
	   smartPhone : {
		   container : {
				width : "90%",
				height : "auto",
				position : "fixed",
				bottom : 0,
				right: 0,
				borderWidth : "3px",
				borderStyle : "solid",
				borderColor : theme.colors.primary,
				backgroundColor : theme.colors.main,
				margin: "auto",
				display : "flex",
				flexDirection : "column",
				borderRadius : "10px",
				overflow:"hidden"
				//justifyContent : "space-between"
			},
			header : {
				backgroundColor : theme.colors.primary,
				fontWeight : "bold",
				color : "white",
				textAlign : "center",

			},
			content : {
				flex : 1,
				display : "flex",
				flexDirection : "column",
				padding : "10px",
				//border : "1px solid black",
				color : theme.colors.primary,
				title : {
					width : "100%",
					height : "20px",
					margin : "10px 0 5px 0",
					//border : "1px solid black",
					//textAlign : "center",			
				},
				receiver : {
					width : "100%",
					color : theme.colors.primary,
					selectField : {
						underlineStyle : {
							borderColor : theme.colors.primary
						},
						floatingLabelStyle : {
						},
						labelStyle : {
							color : theme.colors.primary,
						},
						iconStyle : {

						},
						underlineFocusStyle : {
							borderColor : theme.colors.primary
						},
					},

				},
				message : {
					//flexGroth : 1,
					width : "100%",
					inputStyle : {

					},
					textField : {
						underlineStyle : {
							borderColor : theme.colors.primary
						},
						hintStyle : {
							color : theme.colors.primary,
						},
						textareaStyle:  {
							color : theme.colors.primary,
						},
						underlineStyle : {
							borderColor : theme.colors.primary
						},
						underlineFocusStyle : {
							borderColor : theme.colors.primary
						},

					},

					//border : "1px solid black",
				}

			},
			footer : {
				padding : "10px",
				display : "flex",
				justifyContent : "space-around",
				button : {
					backgroundColor : theme.colors.primary,

				}
			},	
	   },
   }
   
   return styles[options.device]
}

export default styles

