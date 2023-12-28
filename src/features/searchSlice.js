import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    searchContent : ''
}

const searchSlice = createSlice({
    name:'search',
    initialState,
    reducers:{
        getSearchItem(state,action){
             state.searchContent = action.payload.searchContent;
        }
    }

})

export default searchSlice.reducer;
export const {getSearchItem} = searchSlice.actions;