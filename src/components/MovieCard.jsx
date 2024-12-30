import { IMG_CDN } from "../utils/constant";
import { Link, useNavigate } from "react-router-dom";

const MovieCard = ({posterPath ,title , id})=>{
    const navigate = useNavigate();
    const showCardDetails=(titles)=>{
        navigate(`/browse/${id}`)
        
    }
    
    if(!posterPath) return;
    return(
        <div onClick={()=>showCardDetails(title)} className="sm:w-[180px] w-[100px] relative rounded-lg transition-all duration-500 ease-in hover:transform hover:scale-[0.9] cursor-pointer">
            <img className="w-[100%] rounded-lg" src={IMG_CDN + posterPath} alt="posterpath" />
            <p className="text-center text-white absolute left-[0] bottom-0 bg-black opacity-80 py-1 w-full">{title}</p>
        </div>
    )
}
export default MovieCard;