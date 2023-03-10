import React,{useEffect} from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { motion, useAnimation } from "framer-motion"
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';

import { EffectFade } from 'swiper';
import 'swiper/css/effect-fade';
import {BsCheck2Circle} from "react-icons/bs"
import LogoMarquee from './LogoMarquee';
import "./styles.css";
import {
  InputRightElement,
  Input,
  InputGroup,
    Button,
    Flex,
    Heading,
    Image,
    Stack,
    Box,
    Text,
    useBreakpointValue,
  } from '@chakra-ui/react';
  import bgImage from "../assets/friends.png"


const HeroSwiper = () => {
  const controls = useAnimation()

  useEffect(() => {
    controls.start({
      opacity: 1,
      x: 0,
      transition: { duration: 0.3 }
    })
  }, [controls])

  useEffect(() => {
    controls.start({
      scale: 1,
      transition: { duration: 1 },
    })
  }, [controls])


  const [show, setShow] = React.useState(false)
  
  const handleClick = () => setShow(!show)

  return (
    <Box bg="#FAF9F9" position={'relative'} 
    >
    <Swiper
    modules={[A11y, EffectFade]}
    spaceBetween={50}
    slidesPerView={1}
    navigation
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
    onSlideChange={() => console.log('slide change')}
    onSwiper={(swiper) => console.log(swiper)}
    effect="fade"
  >
    <SwiperSlide  className='swiper-hero'>
    <Stack minH={'90vh'} direction={{ base: 'row', md: 'row' }} spacing={0} p={{base:'0', md:'0 2rem', lg:'0 2rem'}} border={'none'} >
      <Flex pl={{base:5, md:10, lg:20}} flex={{base:0, md:.8,lg:.8} }align={'center'} justify={'left'} bg="#2c1ce4" border={'none'}>
        <Stack spacing={8} w={'full'} maxW={'lg'} border={'none'}>
        <Stack direction={['column', 'row']} w='100%' fontSize={'.93rem'} spacing={{base:2,md:5, lg:'5'}}  >
  <Flex justifyContent={'start'} alignItems={'center'} gap={2} color="#faf9f9" letterSpacing={1}>
    <BsCheck2Circle
    color='#95FB08'
    /> <span>Low Cost</span>
  </Flex>
  <Flex justifyContent={'start'} alignItems={'center'}  gap={2} color="#faf9f9" letterSpacing={1}>
    <BsCheck2Circle
    color='#95FB08'
    /> <span>Available nationwide</span>
  </Flex>
  <Flex justifyContent={'start'} alignItems={'center'}  gap={2} color="#faf9f9" letterSpacing={1}>
    <BsCheck2Circle
    color='#95FB08'
    /> <span>Unlimited connectivity</span>
  </Flex>
</Stack>
<motion.div 
      className="hero-page"
      initial={{ opacity: 0, x: -200, duration:5 }}
      animate={controls}
    >
          <Heading fontSize={{ base: '55px', md: '4xl', lg: '90px' }} fontFamily={'Mada'}  fontWeight={400} letterSpacing={2}>
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: useBreakpointValue({ base: '20%', md: '30%' }),
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'blue.400',
                zIndex: -1,
              }}
              color={"#fefefe"}
              whiteSpace={{base:'nowrap',md:'normal',lg:'nowrap'}}
              >
           Seamless <br /> Connections
            </Text>
            <br />{' '} 
            <Text color={'#95FB08'} as={'span'}>
            Unmatched Provider
            </Text>{' '}
               <Text fontSize={{ base: 'md', lg: 'md' }} color={'#fefefe'} whiteSpace={{base:'normal',md:'normal',lg:'normal'}} display={{base:'none',md:'block',lg:'block'}}>
               We do Fibre, Fixed Wireless LTE, ADSL, Mobile Voice, Mobile Data, Web Hosting, Cloud Services and More!
          </Text>
          </Heading>
          </motion.div>
          <InputGroup size='lg'>
      <Input
        pr='4.5rem'
        type={show ? 'text' : 'password'}
        placeholder='Enter your address'
      />
      <InputRightElement width={{base:'full', md:'10rem', lg:'10rem'}}>
        <Button h='1.75rem' size='sm' onClick={handleClick} 
        display={{base:'none', md:'block', lg:'block'}}
        bg="radial-gradient(circle at center, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 70%), #2196f3"
        >
         check availability
        </Button>
      </InputRightElement>
    </InputGroup>
         
         
        </Stack>
      </Flex>
      <Flex flex={{base:2, md:.8,lg:.8} }
border={'none'}
      backgroundImage={{base:` linear-gradient(to right, rgba(44, 28, 228, 1), rgba(3, 4, 94, 0.3) 100%, transparent 100%), url(${bgImage})`, md:` linear-gradient(to right, rgba(44, 28, 228, 1), rgba(3, 4, 94, 0) 50%, transparent 100%), url(${bgImage})`, lg:` linear-gradient(to right, rgba(44, 28, 228, 1), rgba(3, 4, 94, 0) 70%, transparent 100%), url(${bgImage})`}} 
      backgroundSize={'cover'}
      backgroundPosition={'center'}

      >

    
      
      </Flex>
    </Stack>    
    </SwiperSlide>
  </Swiper>
{/* <LogoMarquee 
className="marquee"
/> */}
</Box>

  )
}

export default HeroSwiper