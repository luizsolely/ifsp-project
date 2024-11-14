import React from 'react'

const CurrencyCard = ({props}) => {
  return (
    <div className='currency-card-container'>
        <p className='card-attribute'><span>ID:</span> {props.id}</p>
        <p className='card-attribute'><span>RANK:</span> {props.rank}</p>
        <p className='card-attribute'>{props.symbol}</p>
        <p className='card-attribute'>{props.name}</p>
    </div>
  )
}

export default CurrencyCard