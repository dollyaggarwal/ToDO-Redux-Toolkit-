import { createSlice } from "@reduxjs/toolkit"

const initialState={
    todos:[]
}

//creating reducer using Redux Toolkit
    const todoSlice = createSlice({
        name:'todo',
        initialState:initialState,     
        reducers:{
            setInitialState:(state,action)=>{
                state.todos = action.payload;
            },
            //this is add action
           add:(state,action)=>{
                state.todos.push({
                    text:action.payload,
                    completed:false
                })
           },
           toggle:(state,action)=>{
            state.todos.map((todo, i)=>{
                if(i === action.payload){
                    todo.completed =!todo.completed;
                }
                return todo;
            })
           } 

        }
    });

    export const todoReducer = todoSlice.reducer;
    export const todoActions = todoSlice.actions;

    //selector 
    export const todoSelector = (state)=> state.todoReducer.todos;

// using React-Redux
// export function todoReducer(state=initialState, action){

//     switch(action.type){
//         case ADD_TODO:
//             return {
//                 ...state,
//                 todos:[
//                     ...state.todos,
//                     {
//                         text:action.text,
//                         completed: false
//                     }
//                 ]
//             }
//         case TOGGLE_TODO:
//             return{
//                 ...state,
//                 todos: state.todos.map((todo, i)=>{
//                     if(i==action.index){
//                         todo.completed=!todo.completed
//                     }
//                     return todo;
//                 })
//             }
//         default:
//             return state;
//     }
// }
