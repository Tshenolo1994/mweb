import React from 'react'
import { ChakraProvider , Box} from '@chakra-ui/react'
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import { Products } from './components/Products'
import Benefits from './components/Benefits'
import FAqs from './components/FAqs'
import ProductList from './components/ProductList'
import Testimonials from "./components/Testimonials"
import Footer from "./components/Footer"
const App = () => {
  return (
    <ChakraProvider>
<Box height={'100%'} bg='#faf9f9'>

<Navbar />
    <Hero />
    <Products />
   <Benefits />
   <FAqs/>
<Testimonials />
<Footer />
</Box>
  </ChakraProvider>
  )
}

export default App