import React from "react";
import { View,Text,StyleSheet ,Image} from "react-native";    
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from '../screen/homeScreen';
import BookShelfScreen from "../screen/bookshelfScreen";
import SearchScreen from "../screen/searchScreen";
import ComunityScreen from "../screen/comunityScreen";
import SettingScreen from "../screen/settingScreen";
const Tab = createBottomTabNavigator();
const MainScreen = () => {
    return(
       
      <View style ={styles.container}>
            <Tab.Navigator initialRouteName="home" screenOptions={{ headerShown: false, tabBarStyle: { height: 70} }}>
                <Tab.Screen
                    name="Trang chủ"
                    component={HomeScreen}
                    options={{

                        tabBarLabel: 'Trang chủ',
                        tabBarLabelStyle: {
                            fontSize: 14,
                            paddingBottom: 8
                        },
                        tabBarIcon: () => (
                            <Image name="Trang chủ" source={require('../images/home.png')} style={[styles.iconTab]} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Tìm kiếm"
                    component={SearchScreen}
                    options={{
                        tabBarLabel: 'Tìm kiếm',
                        tabBarLabelStyle: {
                            fontSize: 14,
                            paddingBottom: 8
                        },
                        tabBarIcon: () => (
                            <Image name="Tìm Kiếm" source={require('../images/search_icon.png')} style={styles.iconTab} />
                        ),
                    }}
                />
                <Tab.Screen name="kệ sách"
                    component={BookShelfScreen}
                    options={{
                        tabBarLabel: 'Kệ Sách',
                        tabBarLabelStyle: {
                            fontSize: 14,
                            paddingBottom: 8
                        },
                        tabBarIcon: () => (
                            <Image name="Kệ sách" source={require('../images/bookshelf.png')} style={styles.iconTab} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Cộng đồng"
                    component={ComunityScreen}
                    options={{
                        tabBarLabel: 'Cộng đồng',
                        tabBarLabelStyle: {
                            fontSize: 14,
                            paddingBottom: 8
                        },
                        tabBarIcon: () => (
                            <Image name="Trang chủ" source={require('../images/chat.png')} style={styles.iconTab} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Cài đặt"
                    component={SettingScreen}
                    options={{
                        tabBarLabel: 'Cài đặt',
                        tabBarLabelStyle: {
                            fontSize: 14,
                            paddingBottom: 8
                        },
                        tabBarIcon: () => (
                            <Image name="Trang chủ" source={require('../images/userprofile.png')} style={styles.iconTab} />
                        ),
                    }}
                />
            </Tab.Navigator>

      </View>
    )
} 
const styles =StyleSheet.create({
    container:{
        height:70,
        flex:1
    },
    iconTab: {
        width: 25,
        height: 25
    }
})
export default MainScreen;