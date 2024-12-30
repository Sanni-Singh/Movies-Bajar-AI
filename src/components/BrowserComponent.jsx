import HeaderComponent from "./HeaderComponent"
import useNowPlayingMovies from '../hooks/useNowplayingMovies'
import MainComponent from "./MainComponent";
import MovieContainer from "./MovieContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpComming from "../hooks/useUpComming";
import { useSelector } from "react-redux";
import SearchComponent from "./SearchComponent";
import FooterComponent from "./FooterComponent";
// import HomeScreenShimmer from "./HomeScreenShimmer";

const BrowserComponent = ()=>{
    const showGptSearch = useSelector(store=>store.gpt.showGptSearch);

    useNowPlayingMovies();
    usePopularMovies();
    useTopRatedMovies();
    useUpComming();
    // const movies = useSelector((store)=> store.movies?.nowPlayingMovie);
    // if(!movies) return <HomeScreenShimmer />
    
    return (
        <div>
            <HeaderComponent />
            {
                showGptSearch ? <SearchComponent /> : 
                <>
                    <MainComponent />
                    <MovieContainer />
                </>
            }
            <FooterComponent />
            
        </div>
    )
}
export default BrowserComponent