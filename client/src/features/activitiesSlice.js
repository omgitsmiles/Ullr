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
            const index = state.activities.findIndex(activity => activity.id === action.payload.id)
            state.activities[index] = action.payload 
        },
        activityRemoved(state, action) {
            state.activities = state.activities.filter(activity => activity.id !== action.payload)
        },
        activityUpvoted(state, action) {
            state.activities.map(activity => {
            if (activity.id === action.payload.id) {
                activity.upvotes = action.payload.upvotes
            } else {
                return activity
            }
            })   
        },
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

export const { activityAdded, activityUpdated, activityRemoved, activityUpvoted } = activitiesSlice.actions

export const selectAllActivities = (state) => state.activity.activities

export default activitiesSlice.reducer