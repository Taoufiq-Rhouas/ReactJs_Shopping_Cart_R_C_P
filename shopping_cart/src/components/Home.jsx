import React from 'react'
import ProductList from './ProductList'

export default function Home({products, addToCart}) {
    return (
            <ProductList products={products} addToCart={addToCart} />
    )
}
