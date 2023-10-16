import React from 'react'

export default function ProductListItem({product, addToCart}) {
    return (
        <div className='col-md-4 mb-2' >
            <div className="card" style={{width: '18rem'}}>
                <img src={product.image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <button 
                        className="btn btn-primary"
                        onClick={() => addToCart(product)}
                    >
                        <i className="bi bi-cart-check"></i>add to cart
                    </button>
                </div>
            </div>
        </div>
    )
}
