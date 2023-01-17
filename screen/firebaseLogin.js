import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import auth from '@react-native-firebase/auth';
let testAcount = { email: 'alvdvip@gmail.com', password: '852456' }
import LoginForm from '../component/loginForm';
import { useNavigation } from '@react-navigation/native';
const FireBaseLogin = ({navigation}) => {
    // Set an initializing state whilst Firebase connects
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState(null);
    const onPressLogin  = (flag) =>{
        console.log(flag)
        if(flag== 'true'){
            navigation.navigate('home')
        }
    }   

    return (
        <View style={styles.container}>
            <LoginForm onPressLogin={onPressLogin}/>
        </View>

    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
export default FireBaseLogin;