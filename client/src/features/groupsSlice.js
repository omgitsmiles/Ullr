import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchGroups = createAsyncThunk("groups/fetchGroups", () => {
    return fetch("/groups")
    .then(r => r.json())
    .then(groupsArray => groupsArray)
})

const groupsSlice = createSlice({
    name: "groups",
    initialState: {
        groups: [],
        isLoading: false
    },

    reducers: {
        groupAdded(state, action) {
            state.groups.push(action.payload)
        },
    },

    extraReducers: {
        [fetchGroups.pending]: (state) => {
            state.isLoading = true
        },
        [fetchGroups.fulfilled]: (state, action) => {
            state.isLoading = false
            state.groups = action.payload
        },
    }
})

export const { groupAdded } = groupsSlice.actions

export const selectAllGroups = (state) => state.group.groups

export default groupsSlice.reducer