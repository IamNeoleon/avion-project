import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import { ICard } from '../../@types'

// Define a type for the slice state
export interface IProductsState {
    items: ICard[],
    isLoading: boolean
}

// Define the initial state using that type
const initialState = {
    items: [],
    isLoading: false
} satisfies IProductsState as IProductsState

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setItems: (state, action: PayloadAction<ICard[]>) => {
            state.items = action.payload
        },
        addItems(state, action: PayloadAction<ICard[]>) {
            const newItems = action.payload.filter(
                newItem => !state.items.some(existingItem => existingItem.id === newItem.id)
            );
            state.items = [...state.items, ...newItems];
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        },
    },
})

export const { setItems, setLoading, addItems } = productsSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectItems = (state: RootState) => state.products.items;
export const selectLoading = (state: RootState) => state.products.isLoading;

export default productsSlice.reducer