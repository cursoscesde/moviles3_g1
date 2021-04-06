import { StyleSheet, Dimensions } from 'react-native'

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column"
    },
    iconContainer: {
        flex: 1,
        backgroundColor: "#F3671C",
        borderBottomLeftRadius: 100,
        alignItems: "center",
        justifyContent: "center",
    },
    inputDatacontainer: {
        flex: 2,
        flexDirection: "column",
        alignItems: "center",
        marginTop: 30
    },
    inputDataUser: {
        width: Dimensions.get('screen').width * 0.9,
        backgroundColor: "white",
        borderRadius: 30,
        marginBottom: 20,
        paddingLeft: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
    }
});

export default Styles;