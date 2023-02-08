import React from 'react'
import { Grid, GridItem, Heading , Box, Button, Text} from '@chakra-ui/react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
  } from '@chakra-ui/react'
import bgImage from "../assets/mother-son.jpeg"

const Benefits = () => {
  return (
<Grid templateColumns={{base:'100%',md:'40% 60%', lg:'45% 55%'}} gap={0} p={{base:5 ,md:10, lg:20}} pb={0} pt={0}  bg="#faf9f9">
  <GridItem w='100%' h={{base:'100%',md:'100vh', lg:'100vh'}} bg="#2c1ce4" 
  
  backgroundImage={` linear-gradient(to left, rgba(44, 28, 228, 1), rgba(3, 4, 94, 0) 70%, transparent 50%), url(${bgImage})`}
  backgroundSize={'cover'}
  backgroundPosition={'50%'}>


  </GridItem>
  <GridItem w='100%' h={{base:'100%',md:'100vh', lg:'100vh'}} bg="#2c1ce4"  color={'#f9f9f9'}
   >
<Heading textAlign={'center'}  fontSize={{ base: '3xl', md: '4xl', lg: '50px' }} fontFamily={'Mada'}  fontWeight={400} letterSpacing={2} mb={5} mt={20}>Why fibre is <Text as="span" >perfect</Text> for you</Heading>
<Accordion defaultIndex={[0]} allowMultiple display={'flex'} flexDirection={'column'} justifyContent="space-around" h={'50%'} p={10} w="80%" >
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
      <Heading fontSize={{ base: '3xl', md: '4xl', lg: '3xl' }} fontFamily={'Mada'}  fontWeight={400} letterSpacing={2} >
     Consistent Connection
      </Heading>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    Talk to your family, friends and colleagues, near and far for as long as you want to without calls dropping or losing visual. Stay connected!.
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
        <Heading fontSize={{ base: '3xl', md: '4xl', lg: '3xl' }} fontFamily={'Mada'}  fontWeight={400} letterSpacing={2} >
      Fast and Reliable
      </Heading>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    Stream, work and study with no interruptions. Whether you're gaming and live streaming on Twitch, downloading work files, Facetiming with family members overseas or catching up on your favourite podcasts you can do it with no interruption or buffering.
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
        <Heading fontSize={{ base: '3xl', md: '4xl', lg: '3xl' }} fontFamily={'Mada'}  fontWeight={400} letterSpacing={2} >
     Multiple devices
      </Heading>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    With a home Fibre connection everyone can use their devices worry free. Now the household can Watch TV, game with the Xbox, and use the laptop all at the same time.
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
        <Heading fontSize={{ base: '3xl', md: '4xl', lg: '3xl' }} fontFamily={'Mada'}  fontWeight={400} letterSpacing={2}>
      Unlimited streams
      </Heading>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    Whether it’s Netflix, Showmax, Apple Music, Spotify or YouTube Watch your favourite influencer go live on Instagram or catch up on Facebook TV or join the conversation on Twitter Spaces. No matter the platform with Fibre you can enjoy it all.
    </AccordionPanel>
  </AccordionItem>
</Accordion>
<Button ml={10} mt={4} color={'#2b2b2b'}  borderRadius={10}
             bg="#95FB08" >Get started</Button>
  </GridItem>

</Grid>
  )
}

export default Benefits