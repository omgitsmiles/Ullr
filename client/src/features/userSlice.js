// import { createAsyncThunk ,createSlice } from "@reduxjs/toolkit";

// export const fetchUser = createAsyncThunk("user/fetchUser", () => {
//     return fetch("/login")
//     .then(r => r.json)
//     .then(user => user)
// })

// const userSlice = createSlice({
//     name: "user",
//     initialState: {
//         entity: {}
//     },
//     extraReducers: {
//         [fetchUser.pending](state) {
//             state.status = "loading"
//         },
//         [fetchUser.fulfilled](state, action) {
//             state.entity = action.payload
//             state.status = "idle"
//         },
//     }
// })

// export default userSlice.extraReducers