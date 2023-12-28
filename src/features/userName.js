import { createSlice } from "@reduxjs/toolkit";

const initialState = {

    name : 'guest'
}

const userSlice = createSlice({
    name : 'username',
    initialState,
    reducers:{
      
        getUserName(state,action){
            state.name = action.payload.username
        }


    }
})

export const {getUserName} = userSlice.actions;
export default userSlice.reducer;