import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export const fetchActivities = createAsyncThunk("activities/fetchActivities", () => {
    return fetch("/activities")
    .then(r => r.json())
    .then(activitiesArray => activitiesArray)
})


const activitiesSlice = createSlice({
    name: "activities",
    initialState: {
        activities: [],
        isLoading: false
    },

    reducers: {
        activityAdded(state, action) {
            state.activities.push(action.payload)
        },
        activityUpdated(state, action) {
            // use filter bc find might returned undefined if using find.
            const activity = state.activities.find(activity => activity.id === action.payload.id)
            state.activities[activity] = action.payload
        },
        activityRemoved(state, action) {
            state.activities.filter(activity => activity.id !== action.payload.id)
        }
    },

    extraReducers: {
            [fetchActivities.pending]: (state) => {
                state.isLoading = true
            },
            [fetchActivities.fulfilled]: (state, action) => {
                state.isLoading = false
                state.activities = action.payload
            },
    }   
})

export const selectAllActivities = (state) => state.activity.activities

export default activitiesSlice.reducer