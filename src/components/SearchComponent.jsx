import InputBox from "./InputBox";
import {SearchFieldBackgroundImg} from '../utils/constant'
import SearchMovieComponent from "./SearchMovieComponent";

const SearchComponent = ()=>{
    return(
        <div className="w-[100%] realtive flex flex-col justify-center items-center   ">
            <div className="w-[100%]  ">
            <div className="fixed top-0 left-0 -z-10">
                <img className="w-screen  h-screen" src={SearchFieldBackgroundImg} alt="" />
            </div>
            <div className="flex flex-col w-[100%] h-[100%] gap-8 ">
                <InputBox />
                <SearchMovieComponent />
            </div>
            </div>
        </div>
    )
}
export default SearchComponent;