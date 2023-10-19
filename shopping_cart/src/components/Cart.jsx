import React, { useContext } from 'react'
import { ShoppingContext } from './context/ShoppingContext'
import { useDispatch, useSelector } from 'react-redux'
import { decrementQ, incrementQ, removeFromCart } from './features/cartSlice';

export default function Cart() {
    // // useContext
    // const {cartItems, incrementQ, decrementQ, removeFromCart} = useContext(ShoppingContext)

    // useSelector
    const { cartItems } = useSelector(state => state.cart);

    const dispaatch = useDispatch();

    return (
        <div className='row my-4' >
            <div className="col-md-12">
                <div className="card">
                    <div className="card-body">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                    <th>Subtotal</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    cartItems.map(item => (
                                        <tr key={item.id} >
                                            <td>{item.id}</td>
                                            <td>
                                                <img 
                                                    src={item.image} 
                                                    className='fluid rounded'
                                                    width={60}
                                                    height={60}
                                                    alt={item.name}
                                                />
                                            </td>
                                            <td>{item.name}</td>
                                            <td>
                                                <i 
                                                    className="bi bi-caret-up"
                                                    style={{cursor: 'pointer'}}
                                                    // // useContext
                                                    // onClick={() => incrementQ(item)}

                                                    onClick={() => dispaatch(incrementQ(item))}

                                                    // useSelector

                                                ></i>
                                                <span className="mx-2">
                                                    {item.quantity}
                                                </span>
                                                <i 
                                                    className="bi bi-caret-down"
                                                    style={{cursor: 'pointer'}}
                                                    // onClick={() => decrementQ(item)}

                                                    onClick={() => dispaatch(decrementQ(item))}
                                                    
                                                ></i>
                                            </td>
                                            <td>
                                                ${item.price}
                                            </td>
                                            <td>
                                                ${item.price * item.quantity}
                                            </td>
                                            <td>
                                                <i 
                                                    className="bi bi-cart-x text-danger"
                                                    style={{cursor: 'pointer'}}
                                                    // onClick={() => removeFromCart(item)}

                                                    onClick={() => dispaatch(removeFromCart(item))}
                                                ></i>
                                            </td>
                                        </tr>
                                    ))
                                }
                                <tr>
                                    <th colSpan={3} className='text-center'>
                                        Total
                                    </th>
                                    <td colSpan={3} className='text-center' >
                                        <span className="badge bg-danger rounded-pill">
                                            ${
                                                cartItems.reduce((acc,item) => acc += item.price * item.quantity,0)
                                            }
                                        </span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
