import React, { useState } from "react";
import { Text, TextInput, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Dimensions } from "react-native";
const width = Dimensions.get('window').width;
const SearchBox = (props) => {
    const [text, SetText] = useState('')
    const display = text === '' ? 'none' : 'flex'

    return (
        <View style={styles.inputSearch}>
            <Image source={require('../../images/search_icon.png')} style={styles.imageSearch} />
            <View style={styles.searchBox}>
                <TextInput
                    maxLength={1000}
                    multiline={true}
                    onChangeText={newtext => {
                        SetText(newtext)

                    }}
                    style={styles.searchQuerry}
                    placeholder={'nhập tên truyện, tên tác giả'}
                />
                <TouchableOpacity style={styles.iconClose}>
                    <Image source={require('../../images/close.png')} style={[styles.iconClose, { display: display }]} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    inputSearch: {
        paddingVertical: 10,
        marginLeft: 10,
        alignItems: 'center',
        flexDirection: 'row',
    },
    imageSearch: {
        width: 16,
        height: 16
    },
    searchQuerry: {
        marginLeft: 10,
        fontSize: 16
    },
    searchBox: {
        alignItems: 'center',
        width: width - 36,
        borderBottomWidth: StyleSheet.hairlineWidth,
        flexDirection: 'row',
    },
    iconClose: {
        position: 'absolute',
        width: 16,
        height: 16,
        right: 5,
    }
})
export default SearchBox;