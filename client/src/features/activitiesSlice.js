import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export const fetchActivities = createAsyncThunk("activities/fetchActivities", async () => {
    return fetch("/activities")
    .then(r => r.json())
    .then(activitiesArray => activitiesArray)
})

const activitiesSlice = createSlice({
    name: "activities",
    initialState:  {
        entities: [],
        status: "idle",
    },
    reducers: {
        activityAdded(state, action) {
            state.activities.push(action.payload)
        },
        activityUpdated(state, action) {
            const activity = state.activities.find(activity => activity.id === action.payload.id)
            state.activities[activity] = action.payload
        },
        activityRemoved(state, action) {
            state.activities.filter(activity => activity !== action.payload)
        }
    },
    extraReducers: {
            [fetchActivities.pending](state) {
                state.status = "loading"
            },
            [fetchActivities.fulfilled](state, action) {
                state.entities = action.payload
                state.status = "idle"
            },
            [fetchActivities.rejected](state, action) {
                state.entities = action.payload
                state.status = "idle"
            }
    }   
})

export const allActivities = state => state.activities

export default activitiesSlice.reducer