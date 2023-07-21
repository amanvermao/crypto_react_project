import { Box, Container, HStack, Radio, RadioGroup } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Loader from './Loader';
import { useParams} from 'react-router-dom'
import axios from 'axios';
import { server } from '.';
import ErrorComponent from './ErrorComponent';
const CoinDetails = () => {

  const [coin, setCoin] = useState({});
    const [loading, setLoading] = useState(true);
    const[error,setError]=useState(false);
    const[currency, setCurrency]=useState("inr");


     const params =useParams()

    useEffect(() => {
        const fetchCoin= async () => {
           try {
            const { data } = await axios.get(`${server}/coins/${params.id}`);

            setCoin(data)
            setLoading(false);
           console.log(data)
          
           
            
           } catch (error) {
            setError(true);
            setLoading(false); 
           }
        }

        fetchCoin();
    }, [params.id]);
   
    if(error) return <ErrorComponent/>
  return (
    <Container maxW={'xl'}> 

    {
      loading?<Loader/>:(
         <>
         <Box width={'full'} borderWidth={1}>
 addias
         </Box>


         <RadioGroup value={currency} onChange={setCurrency} p={"8"}>
                <HStack spacing={"4"}>
                    <Radio value={"inr"}>INR</Radio>
                    <Radio value={"usd"}>USD</Radio>
                    <Radio value={"eur"}>EUR</Radio>
                </HStack>
            </RadioGroup>
           

         </>



      )
    }
    </Container>
  )
}

export default CoinDetails
