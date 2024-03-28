import { createSlice } from "@reduxjs/toolkit"
import { noteActions } from "./noteReducer";
import { todoActions } from "./todoReducer";

const initialState={
    message:"",
}

const notificationSlice = createSlice({
    name:'notification',
    initialState:initialState,
    reducers:{
       reset:(state,action)=>{
        state.message = ""
       }
    },
    //hard coded name -option 1
    // extraReducers:{
    //     "todo/add":(state,action)=>{
    //         state.message = "Todo is created";
    //     },
    //     "note/add":(state,action)=>{
    //         state.message = "Note is created";
    //     }
    // }

    // option 2
    // extraReducers:(builder)=>{
    //     builder.addCase(todoActions.add, (state,action)=>{
    //         state.message = "Todo is created";
    //     }),
    //     builder.addCase(noteActions.add, (state,action)=>{
    //         state.message = "Note is created";
    //     })
    //   }
       
    //option 3
    extraReducers:{
        //map object: [key]: value
        [todoActions.add]: (state,action)=>{
            state.message = "Todo is created";
        },
        [noteActions.add]: (state,action)=>{
            state.message = "Note is created";
        }
   
    }
});
export const notificationReducer = notificationSlice.reducer;
export const resetNotification = notificationSlice.actions.reset;
export const notificationSelector =(state)=> state.notificationReducer.message;