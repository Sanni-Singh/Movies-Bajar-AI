import { useSelector } from "react-redux";
import MovieLists from "./MovieLists";
import MovieghimmerUi from "./MovieShimmerUi";

const SearchMovieComponent = ()=>{
    const  {movieResults , movieNames} = useSelector((store)=>store.gpt);
    const showSearch = useSelector(store=>store.gpt.showSearch);
    if(!movieResults && !showSearch) return <MovieghimmerUi />;
    return (
        <div className="w-[100%]  h-[100%] ">
            
            <div className="flex flex-col gap-8 overflow-hidden">
            {
                movieNames?.map((movieName , idx)=> <MovieLists key={movieName} title={movieName} movies={movieResults[idx]} />
                )
            }
            </div>
        </div>
    )
}
export default SearchMovieComponent;