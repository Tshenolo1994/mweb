import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Radio, RadioGroup, Stack , Select} from '@chakra-ui/react'
import {MdArrowDropDown } from "react-icons/md"
const DataFetching = () => {
   const [value, setValue] = React.useState('null')
   const [selectedValue, setSelectedValue] = useState("");
  const [products, setProducts] = useState([])

  const handleChange = event => {
    setSelectedValue(event.target.value);
  };
const logValue = () =>{
  console.log(value);
}
    useEffect(() => {
      axios.get('https://apigw.mweb.co.za/prod/baas/proxy/marketing/campaigns/fibre?channels=120&visibility=public')
        .then(response => {
        const campaigns = response.data.campaigns;
        var promos_codes = [];
        
        campaigns.map((campaign => {
          return promos_codes.push(campaign.promocodes)
        }))

        console.log(promos_codes)

        // const prods = []

        promos_codes.map((promo_cde => {
          promo_cde.map((str) => {
            const obj = str.split("-")
            return console.log(obj);
          })
          
          return promo_cde
        }))
        setProducts(campaigns)
          console.log(campaigns)
        })
        .catch(error => {
          console.error(error);
        });
    }, []);
  
  return (
    <div>
      {/* <RadioGroup onChange={setValue} value={value} onClick={logValue}>
      <Stack direction='row'>
        <Radio value='Free Router'>Free Router</Radio>
        <Radio value='PrePaid'>Prepaid</Radio>
      </Stack>
    </RadioGroup> */}
    {/* <Select border={'1px solid red'} placeholder='Fibre Provider' p={1} variant='outlined' icon={<MdArrowDropDown /> }  w="200px"  value={value} onChange={handleChange}>
  <option value='LightStruck'>LightStruck</option>
  <option value='Vodacom'>Vodacom</option>
  <option value='Web Connect'>Web Connect</option>
  <option value='Frog Foot'>Frog Foot</option>
</Select> */}
    {/* <h2>{value}</h2>
    <h2>{selectedValue}</h2> */}
    </div>
  )
}

export default DataFetching