import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./features/sessionSlice.js"
import activityReducer from "./features/activitiesSlice"
import gearReducer from "./features/gearsSlice"

const store = configureStore({
    reducer: {
        user: userReducer,
        activity: activityReducer,
        gear: gearReducer,
    },
})

export default store