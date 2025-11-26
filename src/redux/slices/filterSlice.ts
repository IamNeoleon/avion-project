import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

export interface IFilterState {
    category: string,
    designers: string[],
    price: number[],
    searchValue: string,
    page: number
}

const initialState = {
    category: '',
    designers: [],
    price: [0, 0],
    searchValue: '',
    page: 1
} satisfies IFilterState as IFilterState

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setCategory(state, action: PayloadAction<string>) {
            state.category = action.payload;
        },
        setDesigners(state, action: PayloadAction<string[]>) {
            state.designers = action.payload;
        },
        setPrice(state, action: PayloadAction<number[]>) {
            state.price = action.payload;
        },
        setSearchValue(state, action: PayloadAction<string>) {
            state.searchValue = action.payload ? `${action.payload}` : '';
        },
        setPage(state, action: PayloadAction<number>) {
            state.page = action.payload;
        },
    },
})

export const { setPrice, setDesigners, setCategory, setSearchValue, setPage } = filterSlice.actions

export const selectFilter = (state: RootState) => state.filter;

export default filterSlice.reducer