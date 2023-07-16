import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        nameEnglish: 'Subir Saha',
        nameBengali: 'সুবীর সাহা',
        department: 'Comuputer Science and Engineering',
        rank: 'Assistant Professor',
    },
    {
        nameEnglish: 'Nitun Poddar',
        nameBengali: 'নিতুন পোদ্দার',
        department: 'Electronice and Electrical Engineering',
        rank: 'Lecturer',
    },
    {
        nameEnglish: 'Rafiqul Islam',
        nameBengali: 'রফিকুল ইসলাম',
        department: 'Mathematics',
        rank: 'Associate Professor',
    },
    {
        nameEnglish: 'Arif Ahmed',
        nameBengali: 'আরিফ আহমেদ',
        department: 'Comuputer Science and Engineering',
        rank: 'Assistant Professor',
    },
];

const teacherSlice = createSlice(
    {
        name: "teacher",
        initialState,
        reducers: {
            addTeacher: (state, action) => {
                state.push(action.payload);
            }
        }
    }
)

export const { addTeacher } = teacherSlice.actions;

export default teacherSlice.reducer;