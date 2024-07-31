import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import { ICartItem } from '../../@types'
import { getCartFromLS } from '../../utils/getCartFromLs'

// Define a type for the slice state
export interface ICartState {
    cartItems: ICartItem[],
    totalPrice: number
}

const cartData = getCartFromLS();

// Define the initial state using that type
const initialState = {
    cartItems: cartData.items,
    totalPrice: cartData.totalPrice
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
        setTotalPrice: (state, action: PayloadAction<number>) => {
            state.totalPrice = action.payload;
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
        }
    },
})

export const { addItem, deleteItem, setTotalPrice, increaseQuantity, reduceQuantity } = cartSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCartItems = (state: RootState) => state.cart.cartItems;
export const selectTotalPrice = (state: RootState) => state.cart.totalPrice;

export default cartSlice.reducer