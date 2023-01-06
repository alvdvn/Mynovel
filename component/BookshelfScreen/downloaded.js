import React from "react";
import { View, Text, StyleSheet } from "react-native";
const LayoutDownloaded = () => {
    return (
        <View style={styles.container}>
            <Text>List Downloaded novel</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
export default LayoutDownloaded;