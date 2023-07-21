import { Box,Image,Text } from '@chakra-ui/react'
import React from 'react'
import btc from '../src/assets/btc.png'
import home from './Home.css'
import {motion} from 'framer-motion'

const Home = () => {
  return (
 <Box bgColor={ "blackAlpha.900" } w={'full'} h={'85vh'}>
      <motion.div 
        animate={{
          translateY:"20px",
        }} 
        
        
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType:"reverse"
        }}
        >

     
        <div className="img">
          <img  src={btc} alt="btc_img" />
        </div>
        </motion.div>
        <Text fontSize={'6xl'} textAlign={'center'} fontWeight={'thin'} color={'whiteAlpha.700'} marginTop={-20}>xcripto</Text>


 </Box>
  )
}

export default Home
