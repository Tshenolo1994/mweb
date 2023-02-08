import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { Grid, GridItem } from '@chakra-ui/react'
import {
  Box,
  Heading
  } from '@chakra-ui/react';
  import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
  } from '@chakra-ui/react'
const FAqs = () => {
  return (
   <Box h="95vh" m={20} bg="linear-gradient(180deg, hsla(0, 0%, 98%, 1) 40%, hsla(85, 97%, 51%, 1) 79%, hsla(85, 97%, 51%, 1) 100%)" display={'flex'} justifyContent="center" alignItems={'center'} flexDirection="column" pt={20} >

    <Heading textAlign={'center'}  fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }} fontFamily={'Mada'}  fontWeight={400} letterSpacing={2} >Have any Questions?</Heading>
    <Tabs variant='unstyled' colorScheme='green' h="100%">
  <TabList  display={'flex'} justifyContent="center" alignItems={'center'} gap={20} pt={100} mb={10} >
    <Tab _selected={{ color: '#03045e', bg: '#95FB08'}} color={'#fafafa'}  borderRadius={10}
             bg="#2c1ce4">General</Tab>
    <Tab _selected={{ color: '#03045e', bg: '#95FB08'}}  color={'#fafafa'}  borderRadius={10}
             bg="#2c1ce4">Costs</Tab>
    <Tab _selected={{ color: '#03045e', bg: '#95FB08'}}  color={'#fafafa'}  borderRadius={10}
             bg="#2c1ce4">Product</Tab>
    <Tab _selected={{ color: '#03045e', bg: '#95FB08'}}  color={'#fafafa'}  borderRadius={10}
             bg="#2c1ce4">Customer service</Tab>
    
  </TabList>
  <TabPanels pt={50}>
    <TabPanel>
    <Grid templateColumns='repeat(2, 1fr)' gap={20}>
  <GridItem w='100%' h='10' bg='transparent'>
  <Accordion defaultIndex={[0]} allowMultiple>
  <AccordionItem mb={10} border='none'>
    <h2 bg="transparent" >
      <AccordionButton bg='transparent' fontSize={{ base: '3xl', md: '4xl', lg: 'xl' }}fontFamily={'Mada'} border='none'>
      <Box as="span" flex='1' textAlign='left' pb={10} bg='transparent' border='none' >
          What is Fibre
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} pt={8} lineHeight="2rem">
    Fibre (also known as Fibre to the home or FTTH) links your home to the Internet via Fibre optic cables that use light impulses to carry data. These impulses bounce along thin glass Fibre tubes at the speed of light, which makes Fibre very fast and stable resulting in a more reliable, buffer free, experience.
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton fontSize={{ base: '3xl', md: '4xl', lg: 'xl' }} fontFamily={'Mada'} bg='transparent' border='none'>
        <Box as="span" flex='1' textAlign='left' pb={10} bg='transparent' border='none'>
        How Mweb connects you to the internet
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} pt={8} lineHeight="2rem">
    Mweb, is an Internet service provider (ISP) which connects you to the internet and manages your connection after physical installation has been completed by the Fibre Infrastructure Provider.
    </AccordionPanel>
  </AccordionItem>
</Accordion>
  </GridItem>
  <GridItem w='100%' h='10' bg='transparent'>

  <Accordion defaultIndex={[0]} allowMultiple>
  <AccordionItem>
    <h2 bg='transparent'>
      <AccordionButton fontSize={{ base: '3xl', md: '4xl', lg: 'xl' }}fontFamily={'Mada'} bg='transparent' border='none' >
      <Box as="span" flex='1' textAlign='left' pb={10} bg='transparent' border='none'>
        How Fibre installation takes place
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} lineHeight="2rem">
    The Fibre infrastructure provider installs the Fibre cable from the road into your home. Once you have placed your order with Mweb, the Fibre infrastructure provider will call you to set up an installation date. We’d recommend being at home at the time of installation to ensure you agree with the installer on the placement of the ONT device.
    </AccordionPanel>
  </AccordionItem>

 
</Accordion>
  </GridItem>
</Grid>
    </TabPanel>
    <TabPanel>
    <Grid templateColumns='repeat(2, 1fr)' gap={6}>
  <GridItem w='100%' h='10'bg='transparent'>
  <Accordion defaultIndex={[0]} allowMultiple>
  <AccordionItem>
    <h2 bg='transparent'>
      <AccordionButton fontSize={{ base: '3xl', md: '4xl', lg: 'xl' }} fontFamily={'Mada'} >
      <Box as="span" flex='1' textAlign='left' pb={10} bg='transparent' border='none'>
        Upfront costs
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} lineHeight="2rem">
    Fibre Installation and connection (or activation) costs are charged by the Fibre infrastructure provider to install Fibre to your home, but Mweb has a range of deals that include FREE installation and connection. See the product details and tillslip for the discounts that you get.
    </AccordionPanel>
  </AccordionItem>
</Accordion>
  </GridItem>

</Grid>
    </TabPanel>
    <TabPanel>
    <Grid templateColumns='repeat(2, 1fr)' gap={6}>
  <GridItem w='100%' h='10' bg='transparent'>
  <Accordion defaultIndex={[0]} allowMultiple>
  <AccordionItem>
    <h2 bg='transparent'>
      <AccordionButton fontSize={{ base: '3xl', md: '4xl', lg: 'xl' }}fontFamily={'Mada'} >
      <Box as="span" flex='1' textAlign='left' pb={10} bg='transparent' border='none'>
        Installation period for Fibre
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    If your order is indicated as ready for installation, the average time for installation from order is 14 working days, but this does depend on your availability and the date and time you book with the installer. If they cannot get hold of you, then this process will take longer. Look out for calls from them.
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2 bg='transparent'>
      <AccordionButton fontSize={{ base: '3xl', md: '4xl', lg: 'xl' }} fontFamily={'Mada'} >
      <Box as="span" flex='1' textAlign='left' pb={10} bg='transparent' border='none'>
        Fibre has been installed – now what
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} lineHeight="2rem">
    After Fibre installation in your home has been completed it can take 2 days for your product to become active while installers check that your line is working You only start getting billed from when the product is active. Track your order online and look out for Emails and SMS’s that tells you your product is active.
    </AccordionPanel>
  </AccordionItem>
</Accordion>
  </GridItem>
  <GridItem w='100%' h='10' bg='transparent'>

  <Accordion defaultIndex={[0]} allowMultiple>
  <AccordionItem>
    <h2 bg='transparent'>
      <AccordionButton fontSize={{ base: '3xl', md: '4xl', lg: 'xl' }} fontFamily={'Mada'} >
      <Box as="span" flex='1' textAlign='left' pb={10} bg='transparent' border='none'>
        How to keep a voice line active
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} lineHeight="2rem">
    With Fibre, you can add a VoIP product which enables you to make calls over the Internet using your Fibre Internet connection. Products include local minutes and you can buy International calling credit and top ups if you run out of local minutes. Make sure to add a VoIP product when you check out.
    </AccordionPanel>
  </AccordionItem>

 
</Accordion>
  </GridItem>
</Grid>
    </TabPanel>
    <TabPanel>
    <Grid templateColumns='repeat(2, 1fr)' gap={6}>
  <GridItem w='100%' h='10' bg='transparent'>
  <Accordion defaultIndex={[0]} allowMultiple>
  <AccordionItem>
    <h2 bg='transparent'>
      <AccordionButton fontSize={{ base: '3xl', md: '4xl', lg: 'xl' }}fontFamily={'Mada'} >
      <Box as="span" flex='1' textAlign='left' pb={10} bg='transparent' border='none'>
        How existing Mweb customers can change to Fibre
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} lineHeight="2rem">
    It's simple and easy to change your existing product to a Fibre product. Log in to your online Mweb account, check your coverage and sign up for the product of your choice. We’ll make sure everything in the background is sorted.
    </AccordionPanel>
  </AccordionItem>
</Accordion>
  </GridItem>
  <GridItem w='100%' h='10' bg='transparent'>

  <Accordion defaultIndex={[0]} allowMultiple>
  <AccordionItem>
    <h2 bg='transparent'>
      <AccordionButton fontSize={{ base: '3xl', md: '4xl', lg: 'xl' }}fontFamily={'Mada'} >
      <Box as="span" flex='1' textAlign='left' pb={10} bg='transparent' border='none'>
        Logging in to your Mweb online account
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} lineHeight="2rem">
    Log in to the Mweb website, using your Mweb master account username or email address. Details were SMS'd to you when you signed up.
    </AccordionPanel>
  </AccordionItem>
</Accordion>
  </GridItem>
</Grid>
    </TabPanel>
  </TabPanels>
</Tabs>
   </Box>
  )
}

export default FAqs