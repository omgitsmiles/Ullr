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

    reducers: {
        gearAdded(state, action) {
            state.gears.push(action.payload)
        },
        gearRemoved(state, action) {
            state.gears = state.gears.filter(gear => gear.id !== action.payload)
        },
    },

        extraReducers: (builder) => {
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