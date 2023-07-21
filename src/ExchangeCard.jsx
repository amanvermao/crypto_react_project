import React from 'react'
import ExchangeCards from './ExchangeCards.css'

const ExchangeCard = (props) => {
  return (
    <a href={props.url} target={"blank"}> 
     <div className="exchangebody">
        <img src={props.img} alt="" />
        <h3>{props.rank} </h3>
        <p>{props.name} </p>
     </div>
 
 </a>
    
  )
}

 export default ExchangeCard

// const ExchangeCard = (name, img, rank, url) => (

// <a href={url} target={"blank"}> 
//   <VStack>
//     <Image 
//     src={img}
//      w={"10"}
//      h={'10'}
//      objectFit={"contain"}
//      alt={"exchange"}
//      />
//     <Heading size={"md"} noOfLine={1}>{rank}</Heading>
//     <Text noOfLine={1}>{name}</Text>
//   </VStack>
 
//  </a>
// )

