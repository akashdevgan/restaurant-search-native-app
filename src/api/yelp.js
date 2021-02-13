import axios from 'axios';

//api keys
import keys from '../../config';

export default axios.create({
    baseURL:'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization: `Bearer ${keys.api_key}`
    }
});