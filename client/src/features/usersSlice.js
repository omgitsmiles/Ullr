import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk("user/fetchUsers", () => {
    return fetch('/users')
    .then(r => r.json())
    .then(users => users)
})

const usersSlice = createSlice({
    name: "users",
    initialState: {
        users: [],
        isLoading: false,
    },

    extraReducers: {
        [fetchUsers.pending]: (state) => {
            state.isLoading = true
        },
        [fetchUsers.fulfilled]: (state, action) => {
            state.isLoading = false
            state.users = action.payload
        },
    }
})

export const selectAllUsers = (state) => state.users.users

export default usersSlice.reducer