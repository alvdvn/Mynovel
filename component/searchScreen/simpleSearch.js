import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, TouchableHighlight } from "react-native";
import { Dimensions } from "react-native";
const width = Dimensions.get('window').width;
const SimpleSearch = (props) => {
    const [display, setDisplay] = useState()
    const displayUpdate = props.display

    const AlowAdvancedSearch = () => {
        props.AlowAdvancedSearch && props.AlowAdvancedSearch('false')

    }
    useEffect(() => {
        if (displayUpdate == 'true') {
            setDisplay('flex')
        } else {
            setDisplay('none')
        }
    }, [displayUpdate])
    return (
        <View style={[styles.container, { display: display }]}>
            <TouchableHighlight style={styles.containerButton} onPress={AlowAdvancedSearch} underlayColor="#ffffff">
                <Text style={styles.titleButton}>Tìm kiếm nâng cao</Text>
            </TouchableHighlight>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 100,
        alignItems:'center',
        backgroundColor: '#fffbff',
        justifyContent: 'center',
        
    },
    containerButton: {
        paddingVertical:12,
        borderRadius: 32,
        paddingHorizontal: 20,
        borderColor: 'blue',
        borderWidth: 1
    },
    titleButton: {
        color: '#1f1f1f',
        fontSize: 14
    }
})
export default SimpleSearch