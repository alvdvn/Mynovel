import React, { useState } from "react";
import { View, Text, StyleSheet, useWindowDimensions } from "react-native";
import { SceneMap, TabBar, TabView } from "react-native-tab-view";
import LayoutDownloaded from "./downloaded";
import LayoutHistory from "./history";
const History = () => {
    return (<View style={{ flex: 1 }}>
        <LayoutHistory />
    </View>)
}
const Downloaded = () => {
    return (<View style={{flex:1}}>
        <LayoutDownloaded />
    </View>)
}
const renderScene = SceneMap({
    LichSu: History,
    TaiVe: Downloaded
})

const TopBookShelf = () => {
    const [index, setIndex] = useState(0)
    const layout = useWindowDimensions();
    const [routes] = useState([
        { key: 'LichSu', title: 'Lịch Sử' },
        { key: 'TaiVe', title: 'Tải về ' }
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
            indicatorStyle={{ borderBottomColor:'#2082d3', borderBottomWidth: 2 }}
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
export default TopBookShelf;