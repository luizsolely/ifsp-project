import React from 'react'

const CurrencyCard = ({props}) => {
  return (
    <div className='currency-card-container'>
        <p className='card-attribute'><span>ID:</span> {props.id}</p>
        <p className='card-attribute'><span>{props.symbol}</span></p>
        <p className='card-attribute'>{props.name}</p>
        <p className='card-attribute'><span>PRICE:</span> ${props.price.toFixed(2)}</p>
        <p className='card-attribute'><span>MARKET CAP:</span> ${Number(props.market_cap.toFixed(2)).toLocaleString()}</p>
        <p className={`card-attribute ${props.percent_change < 0 ? 'negative' : 'positive'}`}><span>24h:</span> {props.percent_change.toFixed(2)}
        %</p>
    </div>
  )
}

export default CurrencyCard