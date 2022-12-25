import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchMessages = createAsyncThunk("messages/fetchMessages", () => {
    return fetch("/messages")
    .then(r => r.json())
    .then(messagesArray => messagesArray)
})

const messageSlice = createSlice({
    name: "messages",
    initialState: {
        messages: [],
        isLoading: false
    },

    reducers: {
        messageAdded(state, action) {
            state.messages.push(action.payload)
        }
    }, 

    extraReducers: {
        [fetchMessages.pending]: (state) => {
            state.isLoading = true
        },

        [fetchMessages.fulfilled]: (state, action) => {
            state.isLoading = false
            state.messages = action.payload
        }
    }
})

export const selectMyMessages = (state) => state.message.messages

export default messageSlice.reducer