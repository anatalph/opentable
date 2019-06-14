import React from 'react'
import RestaurantCard from './RestaurantCard'

const RestaurantList = ({ results }) => {
    return (
        <div className='card-columns'>
            {
                results.map((restaurant) => (
                    <RestaurantCard restaurant={restaurant} key={restaurant.id} />
                ))
            }
        </div>
    )
}

export default RestaurantList