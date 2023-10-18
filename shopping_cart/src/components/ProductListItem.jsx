import React, { useContext } from 'react'
import { ShoppingContext } from './context/ShoppingContext'
import { useDispatch } from 'react-redux'
import { addToCart } from './features/cartSlice'

export default function ProductListItem({product}) {
    // // useContext
    // const {addToCart} = useContext(ShoppingContext)

    const dispatch = useDispatch()
    return (
        <div className='col-md-4 mb-2' >
            <div className="card" style={{width: '18rem'}}>
                <img src={product.image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <button 
                        className="btn btn-primary"
                        // onClick={() => addToCart(product)}
                        onClick={() => {
                            let item = null;
                            item = {...product, quantity: 1};
                            dispatch(addToCart(item));
                        }}
                    >
                        <i className="bi bi-cart-check"></i>add to cart
                    </button>
                </div>
            </div>
        </div>
    )
}
