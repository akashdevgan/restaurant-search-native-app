import React from 'react';
import {View, Text, Stylesheet} from 'react-native';

//components
import SearhBar from '../components/searchBar';

const SearchScreen = () => {
    return(
        <View>
            <SearhBar />
            <Text>Search Screen</Text>
        </View>
    )
}

export default SearchScreen;