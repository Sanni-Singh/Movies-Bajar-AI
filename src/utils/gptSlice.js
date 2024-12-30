import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name:'gpt',
    initialState:{
        showGptSearch:false,
        gptMovies : null,
        movieResults:null,
        movieNames:null,
        showSearch:true,
    },
    reducers:{
        toggleGptSearchView:(state)=>{
            state.showGptSearch = !state.showGptSearch;
        },
        toggleSearchSuggestion:(state)=>{
            state.showSearch = !state.showGptSearch;
        },
        addGptResults:(state , action)=>{
            const {movieNames , movieResults} = action.payload;
            state.movieNames = movieNames;
            state.movieResults = movieResults;
        },
    }
})
export const { toggleGptSearchView , addGptResults, toggleSearchSuggestion} = gptSlice.actions;
export default gptSlice.reducer;