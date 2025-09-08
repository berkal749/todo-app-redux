import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    tasks: [
        { description: "go code", id: 1, isDone: FileSystemHandle, modifiy: false },
        { description: "go sleep", id: 2, isDone: false, modifiy: false },
        { description: "go sleep", id: 3, isDone: false, modifiy: false },
    ],
};
const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {
        addTask: (state, action) => {

       const task ={ description: action.payload, id: state.tasks.length+1 , isDone: true, modifiy: false }

            state.tasks.push(task);
        },

        removeTask: (state, action) => {

            state.tasks = state.tasks.filter(task => task.id != action.payload.id);
            console.log("hey");
        },

        modifiyTask: (state, action) => {

           const task2 = {description: action.payload.description, id:action.payload.id, isDone: false, modifiy: false}
            state.tasks = state.tasks.filter(t => t.id != task2.id);
            state.tasks.push(task2)
            
        },
    
        closeModifiy: (state, action) => {

            state.tasks.find(task => task.id == action.payload.id).modifiy = false;
            
        },
         openModifiy: (state, action) => {

            state.tasks.find(task => task.id == action.payload.id).modifiy = true;
            
        },
        doneUnDone: (state, action) => {
            const task2 = {description: action.payload.description, id:action.payload.id, isDone:!action.payload.isDone, modifiy: false}
            state.tasks = state.tasks.filter(t => t.id != task2.id);
            state.tasks.push(task2)   
        },
    },

});

export const { addTask, removeTask, modifiyTask , closeModifiy , openModifiy ,doneUnDone} = taskSlice.actions;
export default taskSlice.reducer;