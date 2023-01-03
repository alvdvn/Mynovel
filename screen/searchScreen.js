import React from "react"
import { View, Text ,StyleSheet} from "react-native"
import AdvancedSearch from "../component/searchScreen/advancedSearch";
import SearchBox from "../component/searchScreen/searchBox";
import SimpleSearch from "../component/searchScreen/simpleSearch";
const SearchScreen = () => {
    return (
        <View style={styles.container}>
            <SearchBox/>
            {/* <SimpleSearch/> */}
            <AdvancedSearch/>
        </View>
    )
}
const styles =StyleSheet.create({
    container:{
        flex:1
    }
})
export default SearchScreen;