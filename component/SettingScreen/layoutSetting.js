import React from "react";
import { View, Text, StyleSheet } from "react-native";
const LayoutSetting = () => {
    return (
        <View style={styles.container}>
            <Text>Layout Setting</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
export default LayoutSetting;