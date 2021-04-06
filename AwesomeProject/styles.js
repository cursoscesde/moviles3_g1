import {StyleSheet, Dimensions} from 'react-native'

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
        justifyContent: "center"
    },
    inputDatacontainer: {
        flex: 2,
        flexDirection: "column",
        justifyContent: "center"
    },
    inputDataUser:{
        width: Dimensions.get('screen').width*0.9
    }
});

export default Styles;