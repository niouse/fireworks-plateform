const styles = function (options) {
    let theme = options.theme
    let screenWidth = options.screenWidth
    let screenHeight = options.screenHeight
    let styles = {
        pc: {
            container: {
                maxWidth: "50%",
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
                margin: "auto",
                fontFamily: "Play"
                //borderWidth : "1px",
                //borderColor : theme.colors.primary,
                //borderStyle : "solid",
            },
            form: {
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center"
            },
            mailInput: {
                width: '100%',
            },
            passwordInput: {
                width: '100%',
                marginBottom: "30px"
            },
            message: {
                fontSize: "1.5em",
                color: "red",
                visibility: "hidden"
            },
            button: {
                margin: "0px",
                width: "100%"
            }
        },
        smartPhone: {
            container: {
                maxWidth: "50%",
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
                margin: "65px auto 0 auto",
                fontFamily: "Play"
                //borderWidth : "1px",
                //borderColor : theme.colors.primary,
                //borderStyle : "solid",
            },
            form: {
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center"
            },
            mailInput: {
                width: '100%',
            },
            passwordInput: {
                width: '100%',
                marginBottom: "30px"
            },
            message: {
                fontSize: "1em",
                color: "red",
                visibility: "hidden"
            },
            button: {
                margin: "0px",
                width: "100%"
            }
        }
    }
    return styles[options.device]
}
export default styles
