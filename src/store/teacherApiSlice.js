import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchTeachers = createAsyncThunk(
    'teacher/fetchTeachers',
    async () => {
        const response = await axios.get('https://localhost:7299/api/Teacher');
        return response.data;
    }
);

const initialState = [];

const teacherApiSlice = createSlice({
    name: 'teacherApi',
    initialState,
    reducers: {
        addTeacher: (state, action) => {
            state.push(action.payload);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTeachers.fulfilled, (state, action) => {
                state.push(...action.payload);
            })
            .addCase(fetchTeachers.rejected, (state, action) => {
                // handle error
            });
    },
});

export default teacherApiSlice.reducer;



// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// const initialState = {
//     data: []
// }

// const teacherApiSlice = createSlice(
//     {
//         name: "teacherApi",
//         initialState,
//         reducers: {
//             fetchTeachers: (state, action) => {
//                 state.data = action.payload;
//             }
//         },
//         extraReducers: (builder) => {
//             builder.addCase(getTeacher.fulfilled, (state, action) => {
//                 return action.payload;
//             })
//                 .addCase(getTeacher.pending, (state, action) => {
//                     return state;
//                 }
//                 )
//         }
//     }
// )

// export function getTeacher() {
//     return async function getTeacherThunk(dispatch, getState) {
//         const response = await axios.get('https://localhost:7299/api/Teacher');
//         dispatch(fetchTeachers(response.data));
//     }

// }

// export const { fetchTeachers } = teacherApiSlice.actions;

// export default teacherApiSlice.reducer;