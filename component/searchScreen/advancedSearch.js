import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from "react-native";
import { Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
const width = Dimensions.get('window').width;
let ListCate = [
    {
        id: 1,
        des: 'Toàn bộ'
    },
    {
        id: 2,
        des: 'Tên truyện'
    },
    {
        id: 3,
        des: 'Tác giả'
    },
]
const Item = ({ cate,bgColor ,onPress}) => {
    return (
        <TouchableOpacity style={[styles.containerItem,{backgroundColor:bgColor}]} onPress={onPress}>
            <Text style={[styles.textItem, { color: '#ffffff'}]}>{cate.des}</Text>
        </TouchableOpacity>
    )
}
const AdvancedSearch = (props) => {
    const [listCateUpdate, setListCateUpdate] = useState(ListCate)
    const [selectID, setSelectID] = useState(null)
    const [backgroundItemColor, setbackgroundItemColor] = useState('#545c69')
    const renderItem = ({ item }) => {
        const onPressItem = () => {
            setSelectID(item.id)
         
        }
        
        return (
            <Item
                cate={item}
                onPress={onPressItem}
                bgColor={backgroundItemColor}
            />
        )
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.btnReset}>
                <Text>Reset</Text>
            </TouchableOpacity>
            <SafeAreaView style={styles.containerCategory}>
                <Text style={styles.titleListChoice}>
                    Danh mục:
                </Text>
                <FlatList
                    horizontal={true}
                    data={listCateUpdate}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    extraData={listCateUpdate}
                />
            </SafeAreaView>
            <TouchableOpacity style={styles.containerButton}>
                <Text style={styles.titleButton}>Tìm kiếm cơ bản</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerButton: {
        padding: 16,
        borderRadius: 32,
        paddingHorizontal: 40,
        borderColor: 'blue',
        borderWidth: 1
    },
    containerCategory: {
        position: 'absolute',
        flexDirection: 'column',
        left: 16,
        top: 50,
        backgroundColor: '#f8f6f7',
        width: width - 32,
        borderRadius: 16,
        padding: 10
    },
    containerItem: {
        marginTop: 10,
        paddingVertical: 8,
        paddingHorizontal: 20,
        marginLeft: 8,
        borderRadius: 8
    },
    textItem: {
        fontSize:14
    },
    titleButton: {
        color: '#1f1f1f',
        fontSize: 14
    },
    btnReset: {
        flex: 1,
        position: 'absolute',
        right: 16,
        top: 30
    },
    titleListChoice: {
        fontSize: 20,
        color: '#1f1f1f',
        fontWeight: 'bold',
    }
})
export default AdvancedSearch;