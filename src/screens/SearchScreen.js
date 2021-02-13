import React,{useState} from 'react';
import {View, Text, Stylesheet} from 'react-native';

//util
import yelp from '../api/yelp';

//components
import SearhBar from '../components/searchBar';

const SearchScreen = () => {

    const [term, setTerm] = useState('');
    const [results, setResults] = useState([]);

    const searchAPI = async () => {

        const response = await yelp.get('/search',{
            params:{
                term:term,
                open_now:true,
                location:'Toronto'
            }
        });

        setResults(response.data.businesses);
    }

    return(
        <View>
            <SearhBar 
                term={term} 
                onTermChange={setTerm} 
                onTermSubmit={searchAPI} />
            <Text>Search Screen</Text>
            <Text>{results.length} Results</Text>
        </View>
    )
}

export default SearchScreen;