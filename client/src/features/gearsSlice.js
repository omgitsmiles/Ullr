import { createAsyncThunk ,createSlice } from "@reduxjs/toolkit";

export const fetchGears = createAsyncThunk("gears/fetchGears", async () => {
    return fetch("/gears")
    .then(r => r.json())
    .then(gearsArray => console.log(gearsArray))
})

const gearsSlice = createSlice({
    name: "gears",
    initialState: {
        entities: [],
    },
    reducers: {
        gearAdded(state, action) {
            state.entities.push(action.payload)
        },
        gearsRemoved(state, action) {
            state.entities.filter(gear => gear.id !== action.payload.id)
        }, 
        extraReducers: {
            [fetchGears.pending](state) {
                state.status = "loading"
            },
            [fetchGears.fulfilled](state, action) {
                state.entities = action.payload
                state.status = "idle"
            },
            [fetchGears.rejected](state, action) {
                state.entities = action.payload
                state.status = "idle"
            }
        }
    }
})

export const allGears = (state) => state.gears

export const { gearAdded } = gearsSlice.actions

export default gearsSlice.reducer