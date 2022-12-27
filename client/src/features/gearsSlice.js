import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchGears = createAsyncThunk("gears/fetchGears", () => {
    return fetch("/gears")
    .then(r => r.json())
    .then(gearsArray => gearsArray)
})

const gearsSlice = createSlice({
    name: "gears",
    initialState: {
        gears: [],
        isLoading: false
    },

    reducers: (builder) => {
        builder.addCase(fetchGears.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(fetchGears.fulfilled, (state, action) => {
            state.isLoading = false
            state.gears = action.payload
        })
    },

    extraReducers: (builder) =>{
            builder.addCase(fetchGears.pending, (state) => {
                state.isLoading = true
            })
            builder.addCase(fetchGears.fulfilled, (state, action) => {
                state.isLoading = false
                state.gears = action.payload
            })
        }
})

export const selectAllGears = (state) => state.gear.gears

export const { gearAdded, gearRemoved } = gearsSlice.actions

export default gearsSlice.reducer