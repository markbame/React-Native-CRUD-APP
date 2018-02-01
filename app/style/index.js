import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    mainTitle: {
      fontSize: 25,
      fontWeight: "600",
      textAlign: 'center',
    },
    backdrop: {
        flex:1,
        backgroundColor: '#b0d6f4',
        paddingTop:20
    },
    activityIndicator:{
        backgroundColor: "#fff",
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    row:{
        borderBottomWidth: 1,
        borderColor: "#ccc",
        padding: 10
    },
    title:{
        fontSize: 15,
        fontWeight: "600"
    },
    description:{
        marginTop: 5,
        fontSize: 14,
    },
    itemButtonContainer: {
      margin:10
    }
})
