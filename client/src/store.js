import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./features/sessionSlice.js"
import activityReducer from "./features/activitiesSlice"
import gearReducer from "./features/gearsSlice"
import groupReducer from "./features/groupsSlice"

const store = configureStore({
    reducer: {
        user: userReducer,
        activity: activityReducer,
        gear: gearReducer,
        group: groupReducer,
    },
})

export default store