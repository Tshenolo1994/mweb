import React from 'react'
import Marquee from "react-fast-marquee";
import { Card, CardHeader, CardBody, CardFooter, Button,Heading, Text, Box, Avatar } from '@chakra-ui/react'
import "./styles.css";
const profiles = [
  {
    id: 1,
    name: 'Thandeka Zulu',
    surname: 'Mthembu',
    location: 'Durban, KwaZulu-Natal',
    avatarSrc: 'https://i.pravatar.cc/300?1',
    testimonial: 'Mweb fibre has amazing speed and reliability in Durban, making it a game-changer for my home office setup.'
  },
  {
    id: 2,
    name: 'Pieter van der Westhuizen',
    surname: 'Jacobs',
    location: 'Cape Town, Western Cape',
    avatarSrc: 'https://i.pravatar.cc/300?2',
    testimonial: 'Mweb fibre is a lifesaver for remote work. It provides fast, stable connections in Cape Town.'
  },
  {
    id: 3,
    name: 'Nthabiseng Motaung',
    surname: 'Maake',
    location: 'Johannesburg, Gauteng',
    avatarSrc: 'https://i.pravatar.cc/300?3',
    testimonial: 'Mweb fibre is the perfect solution for video calls and online meetings. No more lagging or frozen screens!'
  },
  {
    id: 4,
    name: 'Kgaugelo Mosia',
    surname: 'Rampedi',
    location: 'Pretoria, Gauteng',
    avatarSrc: 'https://i.pravatar.cc/300?4',
    testimonial: 'Mweb fibre has revolutionized my gaming experience in Pretoria. Fast and reliable connections, no lag!'
  },
  {
    id: 5,
    name: 'Annelize Fourie',
    surname: 'Smit',
    location: 'Port Elizabeth, Eastern Cape',
    avatarSrc: 'https://i.pravatar.cc/300?5',
    testimonial: 'Mweb fibre has made online shopping so much smoother in Port Elizabeth. Fast loading times and no more buffering!'
  },
  {
    id: 6,
    name: 'Monde Maphumulo',
    surname: 'Nzimande',
    location: 'Pietermaritzburg, KwaZulu-Natal',
    avatarSrc: 'https://i.pravatar.cc/300?6',
    testimonial: 'Mweb fibre has made online learning so much more efficient in Pietermaritzburg. Downloading and uploading large files is a breeze.'
  },
  {
    id: 7,
    name: 'Lize du Toit',
    surname: 'Van der Merwe',
    location: 'Bloemfontein, Free State',
    avatarSrc: 'https://i.pravatar.cc/300?7',
    testimonial: 'Mweb fibre has changed the game for streaming in Bloemfontein. No more buffering or long wait times!'
  }
];

const profilesTwo = [
  {
    id: 10,
    name: "Jaco van der Merwe",
    surname: "Johannesburg",
    location: "Gauteng",
    avatarSrc: "https://i.pravatar.cc/300?img=10",
    testimonial: "Mweb fibre is reliable and super fast, I never experience any downtime."
  },
  {
    id: 11,
    name: "Nomsa Maseko",
    surname: "Cape Town",
    location: "Western Cape",
    avatarSrc: "https://i.pravatar.cc/300?img=11",
    testimonial: "Mweb fibre has transformed the way I work from home, it's super fast and efficient."
  },
  {
    id: 12,
    name: "Ntokozo Mthembu",
    surname: "Durban",
    location: "KwaZulu-Natal",
    avatarSrc: "https://i.pravatar.cc/300?img=12",
    testimonial: "I am impressed with the speed and quality of Mweb fibre, it has changed my online experience for the better."
  },
  {
    id: 13,
    name: "Sipho Nkosi",
    surname: "Johannesburg",
    location: "Gauteng",
    avatarSrc: "https://i.pravatar.cc/150?img=7",
    testimonial: "Mweb fibre is a game changer, I can now work and play online seamlessly."
  },
  {
    id: 14,
    name: "Lize-Marie Fourie",
    surname: "Pretoria",
    location: "Gauteng",
    avatarSrc: "https://i.pravatar.cc/300?img=14",
    testimonial: "Mweb fibre is fast, dependable and affordable, I am very satisfied with the service."
  },
  {
    id: 15,
    name: "Tebogo Motaung",
    surname: "Johannesburg",
    location: "Gauteng",
    avatarSrc: "https://i.pravatar.cc/300?img=15",
    testimonial: "Mweb fibre has made a huge difference to my online experience, it's always fast and reliable."
  },
  {
    id: 16,
    name: "Andile Khumalo",
    surname: "Durban",
    location: "KwaZulu-Natal",
    avatarSrc: "https://i.pravatar.cc/300?img=16",
    testimonial: "Mweb fibre has revolutionized my online experience, I love the speed and reliability."
  }
];

const Testimonials = () => {
  return (
    <Box h="100%" display={'flex'} justifyContent="space-around" alignItems={'center'} flexDirection="column" p={{base:0,md:20,lg:20}} bg="#faf9f9" pb={{base:10}}>
       <Heading textAlign={'center'}  fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }} fontFamily={'Mada'}  fontWeight={400} letterSpacing={2} w="100%" p={{base:0,mb:10,lg:10}} mt={{base:10}}>What are our customers are saying</Heading>
        <Marquee gradientColor={[250,249,249]}  gradientWidth={2} pauseOnHover="true" speed={100} >
   <Box display={'flex'} w="100%" gap={20} >
 
    {profilesTwo.map((person, index) => (
      <Card  w={{base:'340px', md:'350px', lg:"580px"}} h="320px"  display="flex" flexDirection={'column'} justifyContent="space-between"  className='card'>
<CardHeader>
<Text size='m' pt={{base:2,md:8,lg:10}} fontFamily={'Gilmer Regular'} lineHeight={'2rem'}> {person.testimonial}</Text>
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
   <Marquee gradientColor={[250,249,249]} direction='right' gradientWidth={2} speed={100} pauseOnHover="true">
   <Box display={{base:'flex',md:'flex',lg:'flex'}} w="100%" gap={20} pt={25}>
 
 {profiles.map(person => (
    <Card   w={{base:'340px', md:'350px', lg:"580px"}} h="320px" display="flex" flexDirection={'column'} justifyContent="space-between" className='card'>
    <CardHeader>
    <Text size='m' pt={{base:2,md:8,lg:10}} fontFamily={'Gilmer Regular'} lineHeight={'2rem'}> {person.testimonial}</Text>
    </CardHeader>
    <CardBody display={'flex'} gap={4} pt={5}>
    <Avatar size='md' name='customer avatar' src={person.avatarSrc} />
    <Box display={'flex'}flexDirection="column" gap={1}>
    <Text>{person.name}</Text>
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