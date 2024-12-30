import { configureStore } from "@reduxjs/toolkit";
import userReucer from './useSlice'
import moviesReducer from './movieSlice'
import gptReducer from './gptSlice'
const AppStore = configureStore({
    reducer :{
        user:userReucer,
        movies:moviesReducer,
        gpt:gptReducer,
    },
})
export default AppStore;