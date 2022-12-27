import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export const fetchMatches = createAsyncThunk("matches/fetchMatches", () => {
    return fetch ("/matches")
    .then(r => r.json())
    .then(matchesArray => matchesArray)
})

const matchesSlice = createSlice({
    name: "matches",
    initialState: {
        matches: [],
        isLoading: false
    },

    reducers: {
        matchAdded(state, action) {
            state.matches.push(action.payload)
        },
    },

    extraReducers: (builder) => {
        builder.addCase(fetchMatches.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(fetchMatches.fulfilled, (state, action) => {
            state.isLoading = false
            state.matches = action.payload
        })
    }
})

export const { matchAdded } = matchesSlice.actions

export const selectAllMatches = (state) => state.match.matches

export default matchesSlice.reducer