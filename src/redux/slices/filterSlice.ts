import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

// Define a type for the slice state
export interface IFilterState {
    category: string,
    designers: string,
    price: string,
    searchValue: string
}

// Define the initial state using that type
const initialState = {
    category: '',
    designers: '',
    price: '',
    searchValue: ''

} satisfies IFilterState as IFilterState

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setCategory(state, action: PayloadAction<string>) {
            state.category = action.payload ? `&category=${action.payload}` : '';
        },
        setDesigners(state, action: PayloadAction<string[]>) {
            const parsedDesigners = action.payload.map(designer => `designer=${encodeURIComponent(designer)}`).join('&');
            state.designers = action.payload.length > 0 ? parsedDesigners : '';
        },
        setPrice(state, action: PayloadAction<number[]>) {
            const price = action.payload[0] === 0 || action.payload[1] === 0 ? '' : `&price[from]=${action.payload[0]}&price[to]=${action.payload[1]}`;
            state.price = price;
        },
        setSearchValue(state, action: PayloadAction<string>) {
            state.searchValue = action.payload ? `${action.payload}` : '';
        }
    },
})

export const { setPrice, setDesigners, setCategory, setSearchValue } = filterSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectFilter = (state: RootState) => state.filter;

export default filterSlice.reducer