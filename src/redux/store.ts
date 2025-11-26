import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './slices/cartSlice'
import filterSlice from './slices/filterSlice'
import { productsApi } from './productsApi'

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        filter: filterSlice,
        [productsApi.reducerPath]: productsApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productsApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch