/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeScreen from './screen/homeScreen';
import BookShelfScreen from "./screen/bookshelfScreen";
import SearchScreen from "./screen/searchScreen";
import ComunityScreen from "./screen/comunityScreen";
import SettingScreen from "./screen/settingScreen";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { Node } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import BotomTab from './component/bottomTab';
import { Icon } from 'react-native-paper/lib/typescript/components/Avatar/Avatar';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */
const Section = ({ children, title }): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const Stack = createNativeStackNavigator();
  const Tab = createMaterialBottomTabNavigator()
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName='bottomTab'>
    //     <Stack.Screen name='bottomTab' component={BotomTab}/>
    //   </Stack.Navigator>
    // </NavigationContainer>
    <NavigationContainer >
      <Tab.Navigator initialRouteName="home" screenOptions={{ headerShown: false, tabBarStyle: { height: 70,flex: 1 } }}>
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
              <Image name="Trang chủ" source={require('./images/home.png')} style={[styles.iconTab]} />
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
              <Image name="Trang chủ" source={require('./images/search_icon.png')} style={styles.iconTab} />
            ),
          }}
        />
        <Tab.Screen name="kệ sách"
          component={BookShelfScreen}
          options={{
            tabBarLabel: 'Trang chủ',
            tabBarLabelStyle: {
              fontSize: 14,
              paddingBottom: 8
            },
            tabBarIcon: () => (
              <Image name="Kệ sách" source={require('./images/bookshelf.png')} style={styles.iconTab} />
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
              <Image name="Trang chủ" source={require('./images/chat.png')} style={styles.iconTab} />
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
              <Image name="Trang chủ" source={require('./images/userprofile.png')} style={styles.iconTab} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  iconTab: {
    width: 25,
    height: 25
  }
});

export default App;
