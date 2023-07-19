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
        department: 'Electrical and Electronics Engineering',
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
            },
            removeTeacher: (state, action) => {
                state.splice(action.payload, 1);
            }
        }
    }
)

export const { addTeacher, removeTeacher } = teacherSlice.actions;

export default teacherSlice.reducer;