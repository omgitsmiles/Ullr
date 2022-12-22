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
            state.gears.filter(gear => gear.id !== action.payload)
        },
    },

    extraReducers: {
            [fetchGears.pending](state) {
                state.status = true
            },
            [fetchGears.fulfilled](state, action) {
                state.gears = action.payload
                state.status = false
            },
            [fetchGears.rejected](state, action) {
                state.gears = action.payload
                state.status = false
            }
        }
})

export const allGears = (state) => state.gear.gears

export const { gearAdded, gearRemoved } = gearsSlice.actions

export default gearsSlice.reducer