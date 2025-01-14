import { useSelector } from "react-redux";
import MovieLists from './MovieLists'
import LoaderUi from "./LoaderUi";
const MovieContainer =()=>{
    const movies = useSelector((store)=>store.movies)
    // movies.nowPlayingMovie=null;
    if (!movies.nowPlayingMovie || movies.nowPlayingMovie.length === 0) {
        return <LoaderUi/>;
      }
    
    return(
        movies.nowPlayingMovie &&
        <div className="bg-black">
            <div className="relative z-20 mt-[-50px] flex flex-col sm:gap-8 gap-4 mt-[-110px] ">
            <MovieLists title={"Now Playing"} movies={movies.nowPlayingMovie}/>
            <MovieLists title={"Top Rated"} movies={movies.topRated}/>
            <MovieLists title={"Popular Movies"} movies={movies.popularMovie}/>
            <MovieLists title={"Up-Comming Movie"} movies={movies.upComming}/>
            </div>
        </div>
    )
}
export default MovieContainer;