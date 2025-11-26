import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import { ICartItem } from '../../@types'
import { getCartFromLS } from '../../utils/getCartFromLs'

export interface ICartState {
    cartItems: ICartItem[],
}

const cartData = getCartFromLS();

const initialState = {
    cartItems: cartData.items,
} satisfies ICartState as ICartState

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<ICartItem>) => {
            state.cartItems.push(action.payload)
        },
        deleteItem: (state, action: PayloadAction<number>) => {
            state.cartItems = state.cartItems.filter(cartItem => cartItem.id !== action.payload)
        },
        increaseQuantity: (state, action: PayloadAction<number>) => {
            const findedItem = state.cartItems.find(cartItem => cartItem.id === action.payload);
            if (findedItem) {
                findedItem.count += 1;
            }
        },
        reduceQuantity: (state, action: PayloadAction<number>) => {
            const findedItem = state.cartItems.find(cartItem => cartItem.id === action.payload);
            if (findedItem) {
                findedItem.count -= 1;
            }
        },
        clearCart: (state) => {
            state.cartItems = []
        },
    },
})

export const { addItem, deleteItem, increaseQuantity, reduceQuantity, clearCart } = cartSlice.actions

export const selectCartItems = (state: RootState) => state.cart.cartItems;

export default cartSlice.reducer