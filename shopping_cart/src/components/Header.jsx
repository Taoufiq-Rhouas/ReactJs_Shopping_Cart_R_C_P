import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingContext } from './context/ShoppingContext'
import { useSelector } from 'react-redux'

export default function Header() {
    // // useContext
    // const {cartItems} = useContext(ShoppingContext)

    // useSelector
    // state.cart is a state in reducer 'store/index.js'
    const { cartItems } = useSelector(state => state.cart)

    
    return (
         <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">React Shopping Cart</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/cart"><i className="bi bi-cart-check"></i>({cartItems.length})</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
