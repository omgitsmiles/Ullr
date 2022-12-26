import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// export const fetchUser = createAsyncThunk("user/login", async () => {
//     return fetch("/login")
//     .then(r => r.json)
//     .then(user => user)
// })

export const autoLogin = createAsyncThunk("user/autoLogin", () => {
    return fetch("/me")
    .then(r => r.json())
    .then(user => user)
})

const sessionSlice = createSlice({
    name: "user",
    initialState: {
        user: null,
        isLoading: false
    },

    reducers: {
        login(state, action) {
            state.user = action.payload
        },
        logout(state) {
            state.user = null
        },
        userUpdated(state, action) {
            state.user = action.payload
        },

    extraReducers: (builder) => {
        builder.addCase(autoLogin.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(autoLogin.fulfilled, (state, action) => {
            state.isLoading = false
            state.user = action.payload
        })
        }
    }
})

export const { login, logout, userUpdated } = sessionSlice.actions

export const selectUser = (state) => state.session.user

export default sessionSlice.reducer