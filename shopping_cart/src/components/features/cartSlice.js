import { createSlice } from '@reduxjs/toolkit';
import Swal from 'sweetalert2';

const initialState = {
    cartItems: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        // Action
        // and action is a parameter

        // const addToCart = (item) => { 
        addToCart(state, action){
            console.log('action : ====================================');
            console.log(action);
            console.log('====================================');

            // let productItem = cartItems.find(product => product.id === item.id);

            const item = action.payload;
            let productItem = state.cartItems.find(product => product.id === item.id);
            if(productItem){
              productItem.quantity += 1;
            //   setCartItems([...cartItems]);
        
              // Alert
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your item has been updated',
                showConfirmButton: false,
                timer: 1500
              })
            }else{
                // item.quantity = 1;
                // setCartItems([item,...cartItems]);
                state.cartItems = [item,...state.cartItems];
        
              // Alert
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your item has been saved',
                showConfirmButton: false,
                timer: 1500
              })
            }
          }
    }

});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;