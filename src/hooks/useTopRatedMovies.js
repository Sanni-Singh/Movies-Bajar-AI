import { useEffect } from "react"
import { API_OPTION } from "../utils/constant"
import { useDispatch, useSelector } from "react-redux"
import {  addTopRatedMovies} from '../utils/movieSlice'


const useTopRatedMovies = ()=>{
    const dispatch= useDispatch();

    const topRateded = useSelector(store => store.movies.topRated)
    const topRated = async ()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_OPTION)
        const res = await data.json();
        dispatch(addTopRatedMovies(res.results))
    }
    useEffect(()=>{
      !topRateded &&   topRated();
    },[])
}
export default useTopRatedMovies;