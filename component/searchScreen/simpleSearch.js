import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Dimensions } from "react-native";
const width = Dimensions.get('window').width;
const SimpleSearch = () => {

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.containerButton}>
                <Text style={styles.titleButton}>Tìm kiếm nâng cao</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerButton: {
        padding:16,
        borderRadius:32,
        paddingHorizontal:40,
        borderColor: 'blue',
        borderWidth: 1
    },
    titleButton: {
        color: '#1f1f1f',
        fontSize: 14
    }
})
export default SimpleSearch