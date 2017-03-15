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
                fontFamily: theme.fonts.main
            },
            title: {
                fontSize: "2em",
                testAlign: "center",
            },
            form: {
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center"
            },
            textField: {
                width: '100%',
            },
            message: {
                fontSize: "1.5em",
                textAlign: "center"
            },
            successMessage: {
                color: theme.colors.good
            },
            errorMessage: {
                color: theme.colors.warning
            },
            submitButton: {
                width: "100%",
                marginTop: "30px"
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
                fontFamily: theme.fonts.main
            },
            title: {
                fontSize: "1em",
                testAlign: "center",
            },
            form: {
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center"
            },
            textField: {
                width: '100%',
            },
            message: {
                fontSize: "1em",
                textAlign: "center"
            },
            successMessage: {
                color: theme.colors.good
            },
            errorMessage: {
                color: theme.colors.warning
            },
            submitButton: {
                width: "100%",
                marginTop: "30px"
            }
        }
    }
    return styles[options.device]
}
export default styles
