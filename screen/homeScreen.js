import React from "react"
import { View, Text, StyleSheet } from "react-native"
import TopTabView from "../component/homeScreen/tabView";
const HomeScreen = () => {
    return (
        <View style={styles.container}> 
            <TopTabView />
        </View>
    )

}
const styles = StyleSheet.create({
    container:{
        flex:1,
    }
})
export default HomeScreen;