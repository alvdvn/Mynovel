import React from "react"
import { View, Text,StyleSheet } from "react-native"
import TopComunity from "../component/ComunityScreen/tabView"
const ComunityScreen = () => {
    return (
        <View style={styles.container}>
           <TopComunity/>
        </View>
    )
}
const styles =StyleSheet.create({
    container:{
        flex:1
    }
})

export default ComunityScreen;