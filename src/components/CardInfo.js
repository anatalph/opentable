import React from 'react'
import Price from './Price'

const CardInfo = ({ restaurant }) => {

    const address = `${restaurant.address} ${restaurant.city}, ${restaurant.postal_code} ${restaurant.state}, ${restaurant.country}`;

    return (
        <div className='card-body'>
            <div className='card-title'>
                <a href={restaurant.reserve_url} className="card-link" target="_blank" rel="noopener noreferrer">
                    {restaurant.name}
                </a>
            </div>
            <p className='card-text address'>{address}</p>
            <Price price={restaurant.price} />
        </div>
    )
}

export default CardInfo