import { createSlice } from "@reduxjs/toolkit";

const CostsSlice = createSlice({
    name: 'costs',
    initialState: [],
    reducers: {
        add(state, action){
            state.unshift(action.payload)
        },
        remove(state, action){
            state = state.filter(cost => cost.id !== action.payload)
        },
    }
})

export const costsActions = CostsSlice.actions

export default CostsSlice.reducer