import React,{useState} from 'react';
import {View, Text, Stylesheet} from 'react-native';

//components
import SearhBar from '../components/searchBar';

const SearchScreen = () => {

    const [term, setTerm] = useState('');

    return(
        <View>
            <SearhBar 
                term={term} 
                onTermChange={(newTerm) => {setTerm(newTerm)}} 
                onTermSubmit={() => {console.log('submitted term')}} />
            <Text>Search Screen</Text>
            <Text>{term}</Text>
        </View>
    )
}

export default SearchScreen;