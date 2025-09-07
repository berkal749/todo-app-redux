import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    tasks: [
        { description: "go code", id: 1, isDone: true },
        { description: "go sleep", id: 2, isDone: false },
    ],
};
const taskSlice = createSlice({

    name: "task",
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.tasks.push(action.payload);
        },

         removeTask: (state, action) => {
            state.tasks.filter(task=>task.id==action.payload.id);
        }


    },


});
export const {addTask, removeTask} = taskSlice.actions;
export default taskSlice.reducer;