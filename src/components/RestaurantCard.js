import React from 'react'
import CardInfo from './CardInfo'

const RestaurantCard = ({ restaurant }) => {

    const { name, image_url } = restaurant
    
    return (
        <div className='card'>
            <a href={restaurant.reserve_url} target="_blank" rel="noopener noreferrer">
                <img className="card-img-top" alt={"photo of " + name.toLowerCase()} src={image_url} />
            </a>
            <div className="card-body">
                <CardInfo restaurant={restaurant} />
            </div>
        </div>
    )
}

export default RestaurantCard