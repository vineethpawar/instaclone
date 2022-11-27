/* eslint-disable prettier/prettier */
import {Box, ScrollView, Skeleton, Text} from 'native-base';
import React from 'react';

const Story = () => {
  return (
    <Box
      maxW={'77px'}
      alignItems={'center'}
      mr={'10px'}
      justifyContent="center">
      <Skeleton speed={2} isLoaded={false} rounded='full' size={'70px'} endColor={'warmGray.300'}>
        <Box bg={'red.500'} borderRadius={100} size={'70px'}/>
      </Skeleton>
      <Text textAlign={'center'} noOfLines={1}>
        vineeth_pawar
      </Text>
    </Box>
  );
};
const Stories = () => {
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      maxHeight={'100px'}
      horizontal
      mt={2}
      px={3}>
      <Story />
      <Story />
      <Story />
      <Story />
      <Story />
      <Story />
      <Story />
      <Story />
    </ScrollView>
  );
};

const HomeScreen = () => {
  return (
    <Box flex={1} bg="#f7f5f5">
      <Stories />
      <Box flex={1} bg={'blue.200'}></Box>
    </Box>
  );
};

export default HomeScreen;
