import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../components/features/cartSlice';

    const store = configureStore({
        reducer: {
            cart: cartReducer
        },
    })

export default store;