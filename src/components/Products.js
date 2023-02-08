import React from 'react'
import {
   Box,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    useBreakpointValue,
  } from '@chakra-ui/react';
  import ProductSwiper from './ProductSwiper';
export const Products = () => {
  return (
   <Box  p={{base:4 ,md:10, lg:20}} pt={{base:5 ,md:10, lg:20}}  pb={0} bg="#f9f9f9" h={'100%'}>
    <Heading  textAlign={'center'}  fontSize={{ base: '3xl', md: '4xl', lg: '65px' }} fontFamily={'Mada'}  fontWeight={400} letterSpacing={1} mt={5}>It's <Text as={'span'} color="#2c1ce4">easy</Text> to get started</Heading>
    <Text textAlign={'center'} pt={5} fontSize={'lg'}>Choose the best Fibre package for you</Text>
    <ProductSwiper />
   </Box>
   
  )
}
