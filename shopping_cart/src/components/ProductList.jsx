import React from 'react'
import ProductListItem from './ProductListItem'

export default function ProductList({products, addToCart}) {
    return (
        <div className='row my-4' >
            {
                products.map(product => <ProductListItem 
                    key={product.id} 
                    product={product} 
                    addToCart={addToCart}
                />)
            }
            
        </div>
    )
}