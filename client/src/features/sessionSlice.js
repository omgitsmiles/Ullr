import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// export const fetchUser = createAsyncThunk("user/login", async () => {
//     return fetch("/login")
//     .then(r => r.json)
//     .then(user => user)
// })

const userSlice = createSlice({
    name: "user",
    initialState: {
        user: null
    },

    reducers: {
        login(state, action) {
            state.user = action.payload
        },
        logout(state, action) {
            state.user = null
        },
    }
})

export const { login, logout } = userSlice.actions

export const selectUser = (state) => state.user.user

export default userSlice.reducer