import { configureStore } from "@reduxjs/toolkit"
import activityReducer from "./features/activitySlice"


const store = configureStore({
    reducer: {
        activities: activityReducer,
    },
})

export default store