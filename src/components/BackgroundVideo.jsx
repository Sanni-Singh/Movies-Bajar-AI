import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const BackgroundVideo = ({movieId})=>{
    const trailerVideo = useSelector((store)=>store.movies?.trailerVideo)
    useMovieTrailer(movieId);
    

    return(
        <div className="w-[100%] overflow-hidden">
            {/* <iframe className="w-screen h-screen  aspect-video object-cover"
                src={"https://www.youtube.com/embed/"+trailerVideo?.key +"?&autoplay=true&mute=1&controls=0&loop=true"} 
                title="YouTube video player" 
                frameBorder="0"
                allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" >
                
            </iframe> */}

                <iframe
                className=" top-0 left-0 w-[100%] h-screen aspect-video object-cover overflow-hidden z-0 scale-[4.0] sm:scale-[4.8] md:scale-[1.4] "
                src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&controls=0&loop=1&playlist=${trailerVideo?.key}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            ></iframe>
        </div>
    )
};
export default BackgroundVideo;