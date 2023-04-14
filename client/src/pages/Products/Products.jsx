import React from 'react'
import { PRODUCTS } from '../../Products'
import Card from '../../components/Card/Card'
import './Products.css'

const Products = () => {
    return (
        <div className='Products'>
            {""}
            {PRODUCTS.map((card) => (
                <Card data={card} />
            ))}
        </div>
    )
}

export default Products