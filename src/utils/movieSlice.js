import { createSlice } from "@reduxjs/toolkit";


const movieSlice = createSlice({
    name:"movie",
    initialState:{
        nowPlayingMovie:null,
        trailerVideo:null,
        popularMovie:null,
        topRated:null,
        upComming:null,
        movieDetails:null,

    },
    reducers:{
        addNowPlayingMovies:(state , action)=>{
            state.nowPlayingMovie = action.payload;
        },
        addPopularMovies:(state , action)=>{
            state.popularMovie = action.payload;
        },
        addTopRatedMovies:(state , action)=>{
            state.topRated = action.payload;
        },
        addUpCommingMovies:(state , action)=>{
            state.upComming = action.payload;
        },
        addTrailerVideo:(state ,action)=>{
            state.trailerVideo = action.payload
        },
        addMovieDetails:(state ,action)=>{
            state.movieDetails = action.payload
        }
    },
});

export const {addMovieDetails, addNowPlayingMovies , addTrailerVideo, addPopularMovies,addTopRatedMovies,addUpCommingMovies} = movieSlice.actions;
export default movieSlice.reducer;