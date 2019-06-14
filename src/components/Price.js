import React from 'react'

const Price = ({ price }) => {

    const max = 4;
    let icon = '';
    let iconBlank = '';

    for (let x = 0; x < price; x++) {
        icon = icon.concat('$')
    }

    for (let x = 0; x < (max - price); x++) {
        iconBlank = iconBlank.concat('')
    }

    return (
        <div className='price'>
            <p>Price:
                <span aria-hidden="true"> {icon}</span>
                <span aria-hidden="true"> {iconBlank}</span>
            </p>
        </div>
    )
}

export default Price