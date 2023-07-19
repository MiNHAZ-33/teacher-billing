import { configureStore } from "@reduxjs/toolkit";
import teacherSlice from "./teacherSlice";
import teacherApiSlice from "./teacherApiSlice";
import billlistSlice from "./billlistSlice";

const store = configureStore({
    reducer: {
        teacher: teacherSlice,
        teacherApi: teacherApiSlice,
        billlist: billlistSlice

        //reducers are declared here
    }
})

export default store;