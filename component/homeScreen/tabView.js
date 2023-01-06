import React, { useState } from "react";
import { View, useWindowDimensions, Text, StyleSheet } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import Category from "./category";
import ListComposed from "./composed";
import ListFullNovel from "./fullNovel";
import ListUpdate from "./listUpdate";
import ListYourComposed from "./yourNovel";
const CapNhat = () => {
    return <View style={[{ backgroundColor: '#ffffff' }, { flex: 1 }]} >
        <ListUpdate />
    </View>
}
const DanhMuc = () => {
    return <View style={[{ backgroundColor: '#ffffff' }, { flex: 1 }]} >
        <Category />
    </View>
}
const DaFull = () => {
    return <View style={[{ backgroundColor: '#ffffff' }, { flex: 1 }]} >
        <ListFullNovel />
    </View>
}
const SangTac = () => {
    return <View style={[{ backgroundColor: '#ffffff' }, { flex: 1 }]} >
        <ListComposed />
    </View>
}
const CuaBan = () => {
    return <View style={[{ backgroundColor: '#ffffff' }, { flex: 1 }]} >
        <ListYourComposed/>
    </View>
}
const renderScene = SceneMap({
    update: CapNhat,
    category: DanhMuc,
    listfull: DaFull,
    composed: SangTac,
    yournovel: CuaBan

})

const TopTabView = () => {
    const [index, setIndex] = useState(0)
    const layout = useWindowDimensions();
    const [routes] = useState([
        { key: 'update', title: 'Cập nhật' },
        { key: 'category', title: 'Danh mục' },
        { key: 'listfull', title: 'Đã full' },
        { key: 'composed', title: 'Sáng tác' },
        { key: 'yournovel', title: 'Của bạn' }
    ])

    const renderTabBar = (props) => {
        return <TabBar
            scrollEnabled={true}
            {...props}
            activeColor={'#2082d3'}
            pressColor={'#2082d3'}
            inactiveColor={'#2082d3'}
            labelStyle={{ fontFamily: 'Rubik', fontSize: 18 }}
            style={{ backgroundColor: 'white', }}
            indicatorStyle={{ borderBottomColor: '#2082d3', borderBottomWidth: 2 }}
        />


    }

    return (

        <TabView
            renderTabBar={renderTabBar}
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width * (1 / 2) }}
            style={{ width: layout.width }}
        />
    )
}
const styles = StyleSheet.create({
    tabContainer: {
        backgroundColor: '#ffffff',
    }
})
export default TopTabView;