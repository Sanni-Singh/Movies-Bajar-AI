import { useEffect } from "react"
import { API_OPTION } from "../utils/constant"
import { useDispatch, useSelector } from "react-redux"
import {  addPopularMovies} from '../utils/movieSlice'


const usePopularMovies = ()=>{
    const dispatch= useDispatch();
    
    const popularMovie = useSelector(store => store.movies.popularMovie)

    const getPopularMovies = async ()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTION)
        const res = await data.json();
        dispatch(addPopularMovies(res.results))
    }
    useEffect(()=>{
       !popularMovie &&  getPopularMovies();
    },[])
}
export default usePopularMovies;