import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { Dimensions } from "react-native";
import auth from '@react-native-firebase/auth';
const width = Dimensions.get('window').width;
const LayoutSetting = ({navigation}) => {
    const onPressLogOut = () => {
         auth()
            .signOut()
            .then(() => {
                navigation.navigate('firebase')
            })
    }
    return (
        <View style={styles.container}>
            <Text style={styles.TextTitle}>Setting</Text>
            <View style={styles.containerButtonLogout}>
                <Button title="Logout" onPress={onPressLogOut} />
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1
    },
    TextTitle: {
        fontSize: 50,
        color: '#1f1f1f'
    },
    containerButtonLogout: {
        width: width - 200
    }
})
export default LayoutSetting;