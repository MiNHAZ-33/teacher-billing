import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    theory: 2000,
    classTest: 300,
    questionModeration: 2500,
    examPaperEvalSemesterThree: 120,
    examPaperEvalSemesterFour: 150,
    classTestEval: 50,
    viva: 60,
    vivaOfficer: 400,
    vivaOfficeAssistant: 350,
    labAttendant: 250,
    labQuestion: 600,
    labReport: 40,
    survey: 12000,
    examineerLabHour: 300,
    tabulationFirst: 70,
    tabulationSecond: 75,
    tabulationThird: 80,
    tabulationFourth: 90,
    gradeSheetEval: 350,
    theoryQuestCompose: 400,
    administerPaper: 200,
    theoryQuestPhotocopy: 25,
    labHeadExamineer: 600,
    invigilator: 500,
    administer: 200,
    examController: 2700,
    subExamController: 2200,
    assistantController: 1600,
    officer: 150,
    labAssistant: 100,
    labAttendantLab: 90,
    labCommitteePresident: 2000,
    supervisor: 5000,
    thesisExaminee: 1500,
    thesisViva: 150,
    examCommitteeMember: 2500,
    examCommitteePresident: 4000,
    dean: 6000,
    deptChairman: 5500
}

const billlistSlice = createSlice(
    {
        name: "billlist",
        initialState,
        reducers: {
            
        }
    }
)

// export const { addTeacher } = teacherSlice.actions;

export default billlistSlice.reducer;