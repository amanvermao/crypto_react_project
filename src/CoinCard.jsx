import React from 'react'
import { Link } from 'react-router-dom'

const CoinCard = (props) => {
  return (
    <Link to={`/coin/${props.id}`} target={"blank"}> 
    <div className="exchangebody">
       <img src={props.img} alt="" />
       <h3>{props.symbol} </h3>
       <p>{props.name} </p>
       <p>{props.price?`${props.currencySymbol}${props.price}` : "NA"} </p>

       

    </div>

</Link>
  )
}

export default CoinCard
