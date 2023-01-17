import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Dimensions, Image, Button } from "react-native";
import auth from '@react-native-firebase/auth';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const LoginForm = (props) => {
    const [textUserName, onChangeTextUserName] = useState();
    const [textPassWord, onChangeTextPassWord] = useState();
  
    const onPressLogin = () => {

        auth()
            .signInWithEmailAndPassword(textUserName, textPassWord)
            .then(() => {
                console.log('Login Success');
                props.onPressLogin && props.onPressLogin('true')

            })
            .catch(error => {
                if (error.code === 'auth/invalid-email') {
                    console.log('That email wrong!');
                }

                if (error.code === 'auth/wrong-password') {
                    console.log('Wrong password entered!');
                }

                console.error(error);
            });

    }
    return (
        <View style={styles.ContainerForm}>
            <Image source={require('../images/userprofile.png')} />
            <Text style={styles.LoginTitle}>Login</Text>
            <TextInput
                style={styles.TextUserName}
                onChangeText={onChangeTextUserName}
                value={textUserName}
                placeholder='  username'
                maxLength={20}
            />
            <TextInput
                style={styles.TextPassWord}
                onChangeText={onChangeTextPassWord}
                value={textPassWord}
                placeholder='  PassWord'
                secureTextEntry={true}
                maxLength={20}
            />
            <View style={styles.ButtonLogin}>
                <Button
                    title="Login"
                    onPress={onPressLogin}
                />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    ContainerForm: {
        alignItems: 'center',
        flex: 1
    },
    LoginTitle: {
        fontSize: 50,
        color: '#1f1f1f'
    },
    TextUserName: {
        width: width - 80,
        borderColor: '#1f1f1f',
        borderWidth: 1,
        borderRadius: 20,
        paddingHorizontal: 20,
        marginTop: 20
    },
    TextPassWord: {
        width: width - 80,
        borderColor: '#1f1f1f',
        borderWidth: 1,
        borderRadius: 20,
        marginTop: 20,
        marginBottom: 20,
        paddingHorizontal: 20,
    },
    ButtonLogin: {
        position: 'absolute',
        bottom: 300,
        width: width - 200,

    }
});
export default LoginForm;
