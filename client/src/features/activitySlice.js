import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export const fetchActivities = createAsyncThunk("activities/fetchActivites", () => {
    return fetch("/activities")
    .then(r => r.json())
    .then(data => data)
})

const activitiesSlice = createSlice({
    name: "activities",
    initialState:  {
        entities: [],
        status: "idle",
    },
    extraReducers: {
            [fetchActivities.pending](state) {
                state.status = "loading"
            },
            [fetchActivities.fulfilled](state, action) {
                state.entities = action.payload
                state.status = "idle"
            },
    }   
})


export default activitiesSlice.extraReducers