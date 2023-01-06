import React from "react"
import { View,Text,StyleSheet } from "react-native"
import TopBookShelf from "../component/BookshelfScreen/tabView"
const BookShelfScreen = () => {
    return(
        <View style={styles.container}>
            <TopBookShelf/>
        </View>
    )

}
const styles = StyleSheet.create({
    container:{
        flex:1
    }
})
export default BookShelfScreen;