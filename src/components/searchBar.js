import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {Feather} from '@expo/vector-icons'

const SearchBar = ({term,onTermChange,onTermSubmit}) => {
    return (
        <View style={styles.backgroundStyle}>
            <Feather style={styles.iconStyle} name='search' size={30}/>
            <TextInput 
                autoCapitalize='none'
                autoCorrect={false}
                value={term} 
                style={styles.inputStyle} 
                placeholder='Search' 
                onChangeText={onTermChange}
                onEndEditing={onTermSubmit}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    backgroundStyle:{
        backgroundColor:'#C8C8C8',
        height:50,
        borderRadius:5,
        marginHorizontal:15,
        flexDirection:'row',
        marginTop:15
    },
    inputStyle:{
        flex:1,
        fontSize:18
    },
    iconStyle:{
        fontSize:35,
        alignSelf:'center',
        marginHorizontal:15
    }
});

export default SearchBar;