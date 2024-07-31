import { configureStore } from '@reduxjs/toolkit'
import productsReducer from './slices/productsSlice'
import cartReducer from './slices/cartSlice'
import filterSlice from './slices/filterSlice'
import { productsApi } from './productsApi'
// ...

export const store = configureStore({
    reducer: {
        products: productsReducer,
        cart: cartReducer,
        filter: filterSlice,
        [productsApi.reducerPath]: productsApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productsApi.middleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch