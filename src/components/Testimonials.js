import React from 'react'
import Marquee from "react-fast-marquee";
import { Card, CardHeader, CardBody, CardFooter, Button,Heading, Text, Box, Avatar } from '@chakra-ui/react'
import "./styles.css";
const testimonials = [
  {
    id: 1,
    name: "Ntombi",
    surname: "Nkosi",
    location: "Johannesburg, Gauteng",
    avatar: "https://i.pravatar.cc/200",
    testimonial: "I recently switched to Mweb Fibre and I am blown away by the fast and reliable internet speeds. I no longer have to worry about buffering while streaming my favorite shows or slow load times when working from home. Thank you, Mweb Fibre!"
  },
  {
    id: 2,
    name: "Lebo",
    surname: "Mokoena",
    location: "Pretoria, Gauteng",
    avatar: "https://i.pravatar.cc/201",
    testimonial: "Mweb Fibre has revolutionized the way I use the internet. The speeds are amazing and I can finally enjoy seamless online gaming, video calls, and browsing. I highly recommend Mweb Fibre to anyone looking for a top-notch internet experience."
  },
  {
    id: 3,
    name: "Thando",
    surname: "Mkhize",
    location: "Durban, KwaZulu-Natal",
    avatar: "https://i.pravatar.cc/202",
    testimonial: "I was hesitant to switch to Mweb Fibre at first, but I am so glad I did! The installation was easy and the internet speeds are fantastic. I love that I can now work from home without any lag or slowdowns. Mweb Fibre is the best decision I've made in a long time."
  },
  {
    id: 4,
    name: "Johan",
    surname: "Van der Walt",
    location: "Bloemfontein, Free State",
    avatar: "https://i.pravatar.cc/203",
    testimonial: "Mweb Fibre is die beste keuse vir internet in Suid-Afrika. Ek is baie beïndruk met die vinnige en betroubare spoed. Dit maak dit moontlik om sonder onderbrekings aanlyn te werk en te speel. Ek beveel Mweb Fibre ten sterkste aan."
  },
  {
    id: 5,
    name: "Riana",
    surname: "Du Plessis",
    location: "Cape Town, Western Cape",
    avatar: "https://i.pravatar.cc/204",
    testimonial: "Ek was skepties oor die oorskakeling na Mweb Fibre, maar ek is so bly ek het dit gedoen! Die installasie was maklik en die internet spoed is fantasties. Ek kan nou maklik aanlyn speel en werk sonder enige vertragings. Mweb Fibre is 'n uitstekende keuse."
  },
  {
    id: 6,
    name: "Tshepo",
    surname: "Mashaba",
    location: "Polokwane, Limpopo",
    avatar: "https://i.pravatar.cc/205",
    testimonial: "I was hesitant to switch to Mweb Fibre at first, but I am so glad I did! The installation was easy and the internet speeds are fantastic. I love that I can now work from home without any lag or slowdowns. Mweb Fibre is the best decision I've made in a long time."
   
  },
]


const testimonialsTwo = [
  {
    id: 1,
    name: "Chloe",
    surname: "Smith",
    location: "Johannesburg, Gauteng",
    avatar: "https://i.pravatar.cc/200",
    testimonial: "Mweb Fibre has changed the way I use the internet. The fast and reliable speeds have made my online experience so much better. I can now work from home, stream my favorite shows, and play games without any delays. Thank you, Mweb Fibre!"
  },
  {
    id: 2,
    name: "Michael",
    surname: "Brown",
    location: "Pretoria, Gauteng",
    avatar: "https://i.pravatar.cc/201",
    testimonial: "I am so glad I switched to Mweb Fibre. The installation was quick and easy, and the internet speeds are fantastic. I no longer have to deal with slow load times or buffering while streaming. Mweb Fibre has exceeded my expectations."
  },
  {
    id: 3,
    name: "Emily",
    surname: "Johnson",
    location: "Durban, KwaZulu-Natal",
    avatar: "https://i.pravatar.cc/202",
    testimonial: "Mweb Fibre has made a huge difference in my online experience. The fast and stable speeds allow me to work and play without any interruptions. I highly recommend Mweb Fibre to anyone looking for a top-notch internet service."
  },
  {
    id: 4,
    name: "David",
    surname: "Wilson",
    location: "Bloemfontein, Free State",
    avatar: "https://i.pravatar.cc/203",
    testimonial: "Mweb Fibre has been a game-changer for me. The fast and reliable internet speeds make it possible to work and play online without any delays. I am extremely happy with my decision to switch to Mweb Fibre."
  },
  {
    id: 5,
    name: "Sophie",
    surname: "Martin",
    location: "Cape Town, Western Cape",
    avatar: "https://i.pravatar.cc/204",
    testimonial: "I was skeptical about switching to Mweb Fibre, but I am so glad I did! The installation was simple and the internet speeds are amazing. I can now work, play, and stream without any lag or slowdowns. Mweb Fibre is a great choice."
  },
  {
    id: 6,
    name: "Alexander",
    surname: "Davis",
    location: "Polokwane, Limpopo",
    avatar: "https://i.pravatar.cc/205",
    testimonial: "Mweb Fibre has exceeded my expectations. The fast and stable internet speeds allow me to work and play online without any interruptions. I am very impressed with the quality of service provided by Mweb Fibre."
  },
]

const Testimonials = () => {
  return (
    <Box h="100%" display={'flex'} justifyContent="space-around" alignItems={'center'} flexDirection="column" p={20} bg="#faf9f9'">
       <Heading textAlign={'center'}  fontSize={{ base: '3xl', md: '4xl', lg: '50px' }} fontFamily={'Mada'}  fontWeight={400} letterSpacing={2} pb={10}>What are our customers are saying</Heading>
        <Marquee gradientColor={[250,249,249]}  gradientWidth={2} pauseOnHover="true">
   <Box display={'flex'} w="100%" gap={20} >
 
    {testimonialsTwo.map((person, index) => (
      <Card  w={'580px'} h="320px"  display="flex" flexDirection={'column'} justifyContent="space-between"  className='card'>
<CardHeader>
<Text size='m' pt={10} fontFamily={'Gilmer Regular'} lineHeight={'2rem'}> {person.testimonial}</Text>
</CardHeader>
<CardBody display={'flex'} gap={4} pt={5}>
<Avatar size='md' name='customer avatar' src={person.avatar} />
<Box display={'flex'}flexDirection="column" gap={1}>
<Text>{person.name} {person.surname}</Text>
<Text>{person.location}</Text>
</Box>
</CardBody>
</Card>
 ))}
 
   </Box>
   </Marquee>
   <Marquee gradientColor={[250,249,249]} direction='right' gradientWidth={2}>
   <Box display={'flex'} w="100%" gap={20} pt={25}>
 
 {testimonials.map(person => (
    <Card  w={'580px'} h="320px"  display="flex" flexDirection={'column'} justifyContent="space-between" className='card'>
    <CardHeader>
    <Text size='m' pt={10} fontFamily={'Gilmer Regular'} lineHeight={'2rem'}> {person.testimonial}</Text>
    </CardHeader>
    <CardBody display={'flex'} gap={4} pt={5}>
    <Avatar size='md' name='customer avatar' src={person.avatar} />
    <Box display={'flex'}flexDirection="column" gap={1}>
    <Text>{person.name} {person.surname}</Text>
    <Text>{person.location}</Text>
    </Box>
    </CardBody>
    </Card>
))}

</Box>
   </Marquee>
    </Box>

  )
}

export default Testimonials