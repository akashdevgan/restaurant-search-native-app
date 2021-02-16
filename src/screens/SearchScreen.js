import React,{useState, useEffect} from 'react';
import {View, Text, Stylesheet} from 'react-native';

//util
import yelp from '../api/yelp';

//components
import SearhBar from '../components/searchBar';

const SearchScreen = () => {

    const [term, setTerm] = useState('');
    const [results, setResults] = useState([]);
    const [error, setError] = useState('');

    const searchAPI = async (searchTerm) => {

        try{
            const response = await yelp.get('/search',{
                params:{
                    term:searchTerm,
                    open_now:true,
                    location:'Toronto'
                }
            });
    
            setResults(response.data.businesses);
        }catch (err) {
            setError('Something went wrong. Please try in sometime.');
        }
    }

    useEffect(() => {
        searchAPI('Pasta');   
    },[]);

    return(
        <View>
            <SearhBar 
                term={term} 
                onTermChange={setTerm} 
                onTermSubmit={() => {searchAPI(term)}} />
            <Text>Search Screen</Text>
            {error.length == 0 ? <Text>{results.length} Results</Text>:<Text>{error}</Text>}
        </View>
    )
}

export default SearchScreen;