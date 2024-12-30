import { useEffect } from "react"
import { API_OPTION } from "../utils/constant"
import { useDispatch, useSelector } from "react-redux"
import {   addUpCommingMovies} from '../utils/movieSlice'


const useUpComming = ()=>{
    const dispatch= useDispatch();

    const upCommings = useSelector(store => store.movies.upComming)
    const upComming = async ()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_OPTION)
        const res = await data.json();
        dispatch(addUpCommingMovies(res.results))
    }
    useEffect(()=>{
      !upCommings &&  upComming();
    },[])
}
export default useUpComming;