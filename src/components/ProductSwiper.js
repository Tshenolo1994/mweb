import React,{useState, useEffect} from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import axios from 'axios'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Card, CardHeader, CardBody, CardFooter, Button,Text,Image, Flex, Box,Stack, Heading, Badge, Select, Radio, RadioGroup, 
} from '@chakra-ui/react'

import { CheckCircleIcon} from '@chakra-ui/icons'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import "./styles.css";

import {MdArrowDropDown, MdNotificationsNone } from "react-icons/md"
import {
    List,
    ListItem,
    ListIcon,
    ButtonGroup
  } from '@chakra-ui/react'

  
const logos = [
  {
    id: 'image-id-1',
    url: "century.png",
    provider: "Century"
  },
  {
    id: 'image-id-2',
    url: "evotel.png",
    provider: "Evotel"
  },
  {
    id: 'image-id-33-frogfoot',
    url:"frogfoot.png",
    provider: "Frogfoot"
  },
  {
    id: 'image-id-3',
    url:"frogfoot.png",
    provider: "Frogfoot Air"
  },
  {
      id: 'image-id-4',
      url:"lightstruck.png",
      provider: "Lightstruck"
    },
    {
      id: 'image-id-5',
      url:"linkafrica.png",
      provider: "Link Africa"
    },
    {
      id: 'image-id-6',
      url:"linklayer.png",
      provider: "Link Layer"
    },
    {
      id: 'image-id-7',
      url:"metrofibre.png",
      provider: "MFN"
    },
    
    {
      id: 'image-id-7',
      url:"openserve.png",
      provider: "OpenServe"
    },
    {
      id: 'image-id-8-Vumatel',
      url:"vumatel.png",
      provider: "Vumatel"
    },
    {
      id: 'image-id-9-Vumatel',
      url:"vumatel.png",
      provider: "Vuma Reach"
    },
    {
      id:"image-id-10-Vodacom",
      url:"vodacom-logo.svg",
      provider: "Vodacom"
    },
    {
      id:"image-id-11-Octotel",
      url:"octotel-logo.png",
      provider: "Octotel"
    },
    
 
];

const style = {
width:"100%",
backgroundColor:"red",
}

const ProductSwiper = () => {
  const [selectCampaign, setSelectedCampaign]= React.useState('Free Router')
const [selectPriceRange, setSelectedPriceRange] = useState(null)
  const [selectProvider, setSelectedProvider] = useState(null)
  const [displayData, setDisplayData] = useState([])
  const [products, setProductData] = useState([])
  const [isDisabledSelect, setDisableSelect] = useState(false)

 
  const filterData = (e) => {
    var lSelectedCamp = selectCampaign;
    var lSelectedPriceRange = selectPriceRange;
    var lSelectedProvider = selectProvider;
    if (typeof(e) === "object") {
      var updatedValue = e.target.value;
      if(updatedValue.length === 0) {

      } else {
        if(updatedValue.substr(0,1) === "R") {
          lSelectedPriceRange = updatedValue;
        } else {
          lSelectedProvider = updatedValue;
        }  
      }
    } else {
      lSelectedCamp = e;
      if (lSelectedCamp == "Free Router") {
        setSelectedProvider("Vumatel")
        lSelectedProvider = "Vumatel"
        setDisableSelect(false)
      }
    }
    if (lSelectedCamp != "Free Router") {
      setSelectedProvider("Vuma Reach")
      lSelectedProvider = "Vuma Reach"
      setDisableSelect(true)
    } else {
      setDisableSelect(false)
    }

    // console.log(lSelectedCamp, lSelectedPriceRange, lSelectedProvider)
    setFilteredProductData(lSelectedCamp, lSelectedPriceRange, lSelectedProvider)
   
  }

  const setFilteredProductData = (selectedCampaign, selectedPriceRange, selectedProvider) => {
    var filteredData = []

    products.map((prod) => {

      if(selectedCampaign === "Free Router") {
        filteredData = products.filter((item) => { 
          const array = item.productCode.split("-")
          if (!array[1].includes(`VUMAREACH`)) {
            if (selectedPriceRange === null && selectedProvider === null) {
              return true
            }
            if (selectedPriceRange !== null && selectedProvider !== null) {
              return  item.provider.includes(selectedProvider) && item.priceRange.includes(selectedPriceRange)
            }
            if (selectedPriceRange === null || selectedProvider === null) {
              return  item.priceRange.includes(selectedPriceRange) ?  item.priceRange.includes(selectedPriceRange) : item.provider.includes(selectedProvider)
            }
          } else {
            return false
          }

          })
      } else {
        filteredData = products.filter((item) => { 
          const array = item.productCode.split("-")
          if (array[1].includes(`VUMAREACH`)) {
            if (selectedPriceRange === null && selectedProvider === null) {
              return true
            }
            if (selectedPriceRange !== null && selectedProvider !== null) {
              return  item.provider.includes(selectedProvider) && item.priceRange.includes(selectedPriceRange)
            }
            if (selectedPriceRange === null || selectedProvider === null) {
              return  item.priceRange.includes(selectedPriceRange) ?  item.priceRange.includes(selectedPriceRange) : item.provider.includes(selectedProvider)
            }
          } else {
            return false
          }
        })
      }
      
    })

    setDisplayData(filteredData.slice(0, 10).sort((a, b) => { 
      if (a.productRate < b.productRate) {
        return -1
      }

      if (a.productRate > b.productRate) {
        return 1
      }
      
      return 0
    }))

  }

  const setDefaultProds = (data) => {

    // console.log(data[0]) /// Remove this
    var filteredData = []

    data.map((prod) => {
      const array = prod.productCode.split("-")
      if(selectCampaign === "Free Router" && !array[1].includes(`VUMAREACH`)) {
        filteredData.push(prod);
      }
    })

    setDisplayData(filteredData.slice(0, 10).sort((a, b) => { 
      if (a.productRate < b.productRate) {
        return -1
      }

      if (a.productRate > b.productRate) {
        return 1
      }
      
      return 0
    }))

    console.log(filteredData[0])

  }

  const setDefaultPromoCodes = (data) => {
    var getPromoCodes = []

   data.map((camp_data => {
      camp_data.map((str) => {
        return getPromoCodes.push(str);
      })
      return camp_data
    }));
    getPromoCodesUrl(getPromoCodes)
  }


  const getSummarizedProduct = ({productCode, productName, productRate, subcategory}) => {
    const provider = subcategory.replace('Uncapped', '').replace('Capped', '').trim()
    return {productCode, productName, productRate, provider}
  }
  

  const getProductsFromPromo = (pc) => {
    const promoCode = pc.promoCode
    return pc.products.reduce((prods, p) => [...prods, getSummarizedProduct(p)], [])
  }
  const getPromoCodesUrl = (codes) => {

    const promcodeProductsURL = `https://apigw.mweb.co.za/prod/baas/proxy/marketing/products/promos/${codes.join(',')}?sellable_online=true`
 
    axios.get(promcodeProductsURL)
      .then(response => {
        let productData = []
        const promoData = response.data;

        const summarizedProducts = promoData.reduce((prods, pc) => [...prods, ...getProductsFromPromo(pc)], [])

        productData = summarizedProducts.map((prod) => {
          let obj = Object.assign({}, prod);
          
          const idx = logos.findIndex((logo) => prod.provider === logo.provider)
          
          if (idx > -1 ) {
         obj.providerLogo = logos[idx].url;
       }
          if (obj.productRate > 0 && obj.productRate <= 699) {
            obj.priceRange = "R0 - R699"
          } 
          
          if (obj.productRate >= 700 && obj.productRate <= 999) {
            obj.priceRange = "R700 - R999"
          }

          if (obj.productRate >= 1000) {
            obj.priceRange = "R1000+"
          }
          return obj;
        });        

        
        setProductData(productData)
        setDefaultProds(productData)

        // console.log(productData[0])
     
      })
      .catch(error => {
        console.error(error);
      });
  }
 
  
  useEffect(() => {
    axios.get('https://apigw.mweb.co.za/prod/baas/proxy/marketing/campaigns/fibre?channels=120&visibility=public')
      .then(response => {
        const campaigns = response.data.campaigns;
        var promos_codes = [];
        
        campaigns.map((campaign => {
          return promos_codes.push(campaign.promocodes)
        }))

        setDefaultPromoCodes(promos_codes)
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
   <Box h="80vh">
    <Flex justifyContent={'space-between'} alignItems="center" w={'full'} mt={10}>
    <Select placeholder='Price' variant='outlined' border={'1px solid #dae3e5'} bg='transparent' p={1} icon={<MdArrowDropDown />} w="50px%"  
    value={selectPriceRange} onChange={(e) => { setSelectedPriceRange(e.target.value); return filterData(e)}}>
  <option value='R0 - R699'>R0 - R699</option>
  <option value='R700 - R999'>R700 - R999</option>
  <option value='R1000+'>R1000+</option>
</Select>

<RadioGroup onChange={(e) => { setSelectedCampaign(e) ; return filterData(e)}} value={selectCampaign}>
      <Stack direction='row'>
        <Radio value='Free Router'>Free Router</Radio>
        <Radio value='PrePaid'>Prepaid</Radio>
      </Stack>
    </RadioGroup>
<Select border={'1px solid #dae3e5'} disabled={isDisabledSelect} placeholder='Fibre Provider' bg={'transparent'} p={1} variant='outlined' icon={<MdArrowDropDown /> }  w="200px"   
value={selectProvider} onChange={(e) => { setSelectedProvider(e.target.value); return filterData(e)}}>
   <option value='Lightstruck'>Lightstruck</option>
  <option value='Vodacom'>Vodacom</option>
  <option value='Web Connect'>Web Connect</option>
  <option value='Thinkspeed'>Thinkspeed</option>
  <option value='Vumatel'>Vumatel</option>
  <option value='Vuma Reach' hidden={!isDisabledSelect}>Vuma Reach</option>
  <option value='ZoomFibre'>Zoom Fibre</option>
  <option value='Evotel'>Evotel</option>
  <option value='MFN'>MFN</option>
  <option value='Frogfoot'>Frog Foot</option>
  <option value='Frogfoot Air'>Frog Foot Air</option>
  <option value='Link Layer'>Link Layer</option>
  <option value='Link Africa'>Link Africa</option>
  <option value='TT Connect'>TT Connect</option>
  <option value='OpenServe'>Open Serve</option>
  <option value='Octotel'>Octotel</option>
  <option value='ClearAcess'>ClearAccess</option>

</Select>
    </Flex>
     <Flex justifyContent={'center'} alignItems={'center'} mt={10}>
         <Swiper  className='swiperProduct'
      // install Swiper modules
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={10}
      slidesPerView={1}
      navigation
      pagination={{
        type: "fraction",
        clickable: true ,
      }}
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      }}
      scrollbar={{ draggable: true }}
    >
    {displayData.map(item => (
      <SwiperSlide className='swiper-slide-product'> 
<Card maxW='sm' w="100%" h="100%" boxShadow="none" border={'1px solid #dae3e5'} p={2}  bg="radial-gradient(circle at center, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 70%), #f5f5f5" className='product-card'>
<CardHeader borderBottom={'1px solid #edede9'}>

<Flex alignItems="center" justifyContent={'space-between'}>
        <Image src={require(`../assets/logos/${item.providerLogo === undefined ? `evotel.png` : item.providerLogo}`)}  alt={`${item.provider} logo`}   w={'120px'} filter="grayscale(100%)"/>
     
      
      {  selectCampaign === "Free Router" ?
        <Badge variant='solid' bg='#1c1cfb' h={'20px'}>
 Free Router
</Badge> : null
}
      
</Flex>
  <Flex spacing='4' alignItems={'center'} justifyContent={'center'}>
    <Flex flex='' gap='4' alignItems='center' flexWrap='wrap' flexDirection={'column'}>
   <h6>{item.productName}</h6>
   {/* <ArcProgress 
   /> */}
  <Heading fontFamily={'mada'} fontWeight={400}  fontSize="5xl">{`R${item.productRate.toFixed(2)}`} <Text as='sub' fontSize={'sm'}>/ per month</Text> </Heading>
    </Flex>
  </Flex>
</CardHeader>
<CardBody >
<Box>

<List spacing={3}>
<ListItem>
  <ListIcon as={ CheckCircleIcon} color='#1c1cfb' />
  Plug and play
</ListItem>
<ListItem>
  <ListIcon as={ CheckCircleIcon} color='#1c1cfb' />
No installion required
</ListItem>
<ListItem>
  <ListIcon as={ CheckCircleIcon} color='#1c1cfb' />
No contract
</ListItem>
<ListItem>
  <ListIcon as={ CheckCircleIcon} color='#1c1cfb' />
Suitable for 2 - 5 devices at a time
</ListItem>
</List>
</Box>
</CardBody>

<CardFooter
>
 <Stack w="full">
 <Button w={'full'}  color={'#03045e'}
              bg={'#95FB08'}>Get Started</Button>
 <Button w={'full'} bg="transparent" color={'#2b2b2b'} border="1px solid #2b2b2b">Check availability</Button>
 </Stack>
</CardFooter>
</Card>
    
      </SwiperSlide>
        ))}
    </Swiper>
    </Flex>
   
   </Box>
  )
}

export default ProductSwiper
