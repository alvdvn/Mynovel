import React, { useEffect, useState } from "react"
import { View, Text, StyleSheet } from "react-native"
import { Dialog } from "react-native-paper";
import AdvancedSearch from "../component/searchScreen/advancedSearch";
import SearchBox from "../component/searchScreen/searchBox";
import SimpleSearch from "../component/searchScreen/simpleSearch";
const SearchScreen = () => {
    const [display, setDisplay] = useState('true');
  


    const AlowAdvancedSearch = (display) => {
       setDisplay(display)
    }
    const AllowSimpleSearch = (display) =>{
        setDisplay(display)
    }

    return (
        <View style={styles.container}>
            <SearchBox />
            <SimpleSearch 
                AlowAdvancedSearch={AlowAdvancedSearch}
                display={display}/>
            <AdvancedSearch 
                display={display} 
                AllowSimpleSearch={AllowSimpleSearch} />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
export default SearchScreen;