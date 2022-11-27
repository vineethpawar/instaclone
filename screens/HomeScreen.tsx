/* eslint-disable prettier/prettier */
import {
  Actionsheet,
  Avatar,
  Box,
  Button,
  Divider,
  HStack,
  Image,
  Input,
  Pressable,
  ScrollView,
  Skeleton,
  Text,
  useDisclose,
  VStack,
} from 'native-base';
import React from 'react';
import {useWindowDimensions} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SearchBar from '../components/SearchBar';

const Story = () => {
  return (
    <Box
      maxW={'77px'}
      alignItems={'center'}
      mr={'10px'}
      justifyContent="center">
      <Skeleton
        speed={2}
        isLoaded={false}
        rounded="full"
        size={'70px'}
        endColor={'warmGray.300'}>
        <Box bg={'red.500'} rounded="full" size={'70px'} />
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
      bg="white"
      showsHorizontalScrollIndicator={false}
      horizontal
      py={2}
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

const Post = () => {
  const width = useWindowDimensions()?.width;
  const height = useWindowDimensions()?.height;
  const {isOpen, onOpen, onClose} = useDisclose();
  return (
    <VStack bg="white">
      <HStack alignItems={'center'} p={3}>
        <Box mr={2} bg={'red.400'} size={'30px'} rounded="full" />
        <VStack flex={1}>
          <Text
            noOfLines={1}
            fontSize={'md'}
            fontWeight={'bold'}
            lineHeight={'18px'}>
            Ruffles
          </Text>
          <Text noOfLines={1} fontSize={'sm'} lineHeight={'15px'}>
            sponsored
          </Text>
        </VStack>
        <Ionicons size={20} color={'black'} name={'ellipsis-horizontal'} />
      </HStack>
      <Image
        source={{
          uri: 'https://images.unsplash.com/photo-1495476479092-6ece1898a101?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
        }}
        alt="Alternate Text"
        w={width}
        h={width}
        maxH={height}
        resizeMode="cover"
      />

      <HStack p={1}>
        <HStack space={2} flex={1}>
          <Pressable onPress={() => alert('hi')} p={1}>
            {false ?
              <Ionicons size={25} color={'red'} name={'heart'} />
              :
              <Ionicons size={25} color={'black'} name={'heart-outline'} />
        }  
          </Pressable>
          <Pressable p={1}>
            <Ionicons size={25} color={'black'} name={'chatbubble-outline'} />
          </Pressable>
          <Pressable onPress={onOpen} p={1}>
            <Ionicons size={25} color={'black'} name={'send-outline'} />
          </Pressable>
        </HStack>

        <Pressable onPress={() => alert('hi4')} p={1}>
          <Ionicons size={25} color={'black'} name={'bookmark-outline'} />
        </Pressable>
      </HStack>
      <VStack px={2} pb={2}>
        {false ? (
          <Text>100 Likes</Text>
        ) : (
          <HStack mx={3} space={2} alignItems={'center'}>
            <Avatar.Group
              _avatar={{
                size: 'sm',
              }}
              max={3}>
              <Avatar
                bg="green.500"
                source={{
                  uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
                }}>
                AJ
              </Avatar>
              <Avatar
                bg="cyan.500"
                source={{
                  uri: 'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
                }}>
                TE
              </Avatar>
              <Avatar
                bg="indigo.500"
                source={{
                  uri: 'https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
                }}>
                JB
              </Avatar>
            </Avatar.Group>
            <Text>Liked by person and 102 others</Text>
          </HStack>
        )}
        <Text mt={2} lineHeight={'16px'} noOfLines={2}>
          <Text fontWeight={'bold'}>dheeraj</Text> Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Cum, necessitatibus!
        </Text>
        <Pressable>
          <Text color={'warmGray.400'}>View 1 comment</Text>
        </Pressable>
      </VStack>

      <Actionsheet isOpen={isOpen} onClose={onClose}>
        <Actionsheet.Content>
         <SearchBar />
          <ScrollView mt={2} w={width} px={2}>
            <HStack p={2} alignItems={'center'}>
              <Avatar
                mr={2}
                bg="cyan.500"
                source={{
                  uri: 'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
                }}/>

              <VStack flex={1} space={1}>
                <Text noOfLines={1} fontSize={'md'} lineHeight={'16px'}>
                  vineeth
                </Text>
                <Text noOfLines={1} fontSize={'sm'}  lineHeight={'12px'} color={'warmGray.400'}>
                  vineeth
                </Text>
              </VStack>

              <Button ml={2} maxH={'38px'} px={'20px'} py={'5px'}>
                Send
              </Button>
            </HStack>
            <HStack p={2} alignItems={'center'}>
              <Avatar
                mr={2}
                bg="cyan.500"
                source={{
                  uri: 'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
                }}/>

              <VStack flex={1} space={1}>
                <Text noOfLines={1} fontSize={'md'} lineHeight={'16px'}>
                  vineeth
                </Text>
                <Text noOfLines={1} fontSize={'sm'}  lineHeight={'12px'} color={'warmGray.400'}>
                  vineeth
                </Text>
              </VStack>

              <Button ml={2} maxH={'38px'} px={'20px'} py={'5px'}>
                Send
              </Button>
            </HStack>
            <HStack p={2} alignItems={'center'}>
              <Avatar
                mr={2}
                bg="cyan.500"
                source={{
                  uri: 'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
                }}/>

              <VStack flex={1} space={1}>
                <Text noOfLines={1} fontSize={'md'} lineHeight={'16px'}>
                  vineeth
                </Text>
                <Text noOfLines={1} fontSize={'sm'}  lineHeight={'12px'} color={'warmGray.400'}>
                  vineeth
                </Text>
              </VStack>

              <Button ml={2} maxH={'38px'} px={'20px'} py={'5px'}>
                Send
              </Button>
            </HStack>
          

          </ScrollView>
        </Actionsheet.Content>
      </Actionsheet>
    </VStack>
  );
};

const HomeScreen = () => {
  return (
    <ScrollView flex={1} bg="#f7f5f5">
      <Stories />
      <Divider orientation="horizontal" />
      <Post />
      <Post />
      <Post />
    </ScrollView>
  );
};

export default HomeScreen;
