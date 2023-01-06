import React from "react"
import { View, Text,StyleSheet } from "react-native"
import TopSetting from "../component/SettingScreen/tabView";
const SettingScreen = () => {
    return (
        <View style={styles.container}>
            <TopSetting/>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1
    }
})
export default SettingScreen;