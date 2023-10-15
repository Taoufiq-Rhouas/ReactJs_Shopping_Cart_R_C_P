import React from 'react'

export default function ProductListItem({product}) {
    return (
        <div className='col-md-4 mb-2' >
            <div className="card" style={{width: '18rem'}}>
                <img src={product.image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">
                        <i className="bi bi-cart-check"></i>add to cart
                    </a>
                </div>
            </div>
        </div>
    )
}
