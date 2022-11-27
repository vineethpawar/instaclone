/* eslint-disable prettier/prettier */
import {Input} from 'native-base';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
const SearchBar = () => {
  return (
    <Input
      _focus={{
        bg: 'warmGray.200',
        borderColor: 'warmGray.200'
      }}
      rounded={'lg'}

      borderColor={'warmGray.100'}
      InputLeftElement={
        <Ionicons
          style={{marginLeft: 10}}
          size={25}
          color={'grey'}
          name={'search'}
        />
      }
      bg={'warmGray.200'}
      fontSize="md"
      placeholder="Search"
      w="100%"
    />
  );
};

export default SearchBar;
