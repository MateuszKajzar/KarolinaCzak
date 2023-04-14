import React from 'react'

const Card = (props) => {
    const { id, productName, price, productImage } = props.data;

    return (
        <div className='Card'>

            <img src={productImage} alt='' />
            <div className='description'>
                <h2>{productName}</h2>
                <p>${price}</p>
            </div>
            <button className='addToCartBtn'>Dodaj do koszyka</button>
        </div>
    )
}

export default Card