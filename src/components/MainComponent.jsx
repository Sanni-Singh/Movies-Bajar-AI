import { useSelector } from "react-redux";
import BackgroundVideoTitle from './BackgroundVideoTitle'
import BackgroundVideo from './BackgroundVideo'
import LoaderUi from "./LoaderUi";
// import HomeScreenShimmer from "./HomeScreenShimmer";
const MainComponent = ()=>{

    const movies = useSelector((store)=> store.movies?.nowPlayingMovie)
    if(!movies) return <LoaderUi/>;
    const idx = Math.ceil(Math.random() * movies.length - 1)
    
    const mainMovie = movies[idx];

    const {original_title , overview,id} = mainMovie;

    // if(movies === null) return <HomeScreenShimmer/>
    
    return(
        <div>
            <BackgroundVideoTitle title = {original_title} overview={overview}/>
            <BackgroundVideo movieId={id}/>
        </div>
    )
}
export default MainComponent;