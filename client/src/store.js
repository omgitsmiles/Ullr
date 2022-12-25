import { configureStore } from "@reduxjs/toolkit"
import sessionReducer from "./features/sessionSlice.js"
import activityReducer from "./features/activitiesSlice"
import gearReducer from "./features/gearsSlice"
import groupReducer from "./features/groupsSlice"
import usersSlice from "./features/usersSlice.js"
import matchesSlice from "./features/matchesSlice.js"

const store = configureStore({
    reducer: {
        session: sessionReducer,
        activity: activityReducer,
        gear: gearReducer,
        group: groupReducer,
        users: usersSlice,
        match: matchesSlice,
    },
})

export default store