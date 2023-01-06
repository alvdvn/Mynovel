import React, { useState } from "react";
import { View, Text, StyleSheet, useWindowDimensions } from "react-native";
import { SceneMap, TabBar, TabView } from "react-native-tab-view";
import LayoutAccount from "./layoutAccount";
import LayoutSetting from "./layoutSetting";
const Setting = () => {
    return (<View style={{ flex: 1 }}>
        <LayoutSetting />
    </View>)
}
const Account = () => {
    return (<View style={{ flex: 1 }}>
        <LayoutAccount />
    </View>)
}
const renderScene = SceneMap({
    setting: Setting,
    account: Account
})

const TopSetting = () => {
    const [index, setIndex] = useState(0)
    const layout = useWindowDimensions();
    const [routes] = useState([
        { key: 'setting', title: 'Cài đặt' },
        { key: 'account', title: 'Tài khoản' }
    ])
    const renderTabar = (props) => {
        return <TabBar
            scrollEnabled={true}
            {...props}
            activeColor={'#2082d3'}
            pressColor={'#2082d3'}
            inactiveColor={'#2082d3'}
            labelStyle={{ fontFamily: 'Rubik', fontSize: 18 }}
            style={{ backgroundColor: 'white' }}
            indicatorStyle={{ borderBottomColor: '#2082d3', borderBottomWidth: 2 }}
        />
    }
    return <TabView
        renderTabBar={renderTabar}
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width * (1 / 2) }}
        style={{ width: layout.width }}
    />
}
const styles = StyleSheet.create({
    tabContainer: {
        backgroundColor: '#ffffff'
    }
})
export default TopSetting;