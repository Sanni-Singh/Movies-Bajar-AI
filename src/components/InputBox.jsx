import { useRef } from "react"
import { GoogleGenerativeAI } from "@google/generative-ai";
import { API_OPTION, GeminiApi } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addGptResults, toggleSearchSuggestion} from '../utils/gptSlice'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointRight } from "@fortawesome/free-solid-svg-icons";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
const InputBox = ()=>{
    const dispatch = useDispatch();
    const searchText = useRef(null);
    const showSearch = useSelector(store=>store.gpt.showSearch);
    
    const serachMovieTmdb = async (movie)=>{
        const data =await fetch('https://api.themoviedb.org/3/search/movie?query='+movie +'&include_adult=false&language=en-US&page=1', API_OPTION);

        const res = await data.json();
        return res.results;
    }

    const searchMovieByText = async ()=>{
        dispatch(toggleSearchSuggestion())
        const querry= "Act as a Movie Recommendation system and suggest some movies for the querry :" + searchText.current.value + ". only give me name of 5 movies, comma seperated like the exampple given ahead. example results : Gaddar, dhoom, kgf ,phuspa , sholay"
        // const gptResults = await client.chat.completions.create({
        //     messages: [{ role: 'user', content: querry }],
        //     model: 'gpt-3.5-turbo',
        //   });
        //   console.log(gptResults.choices);
          
        const genAI = new GoogleGenerativeAI(GeminiApi);
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        const prompt = querry;

        const result = await model.generateContent(prompt);
        const geminiMovies = result.response.text().split(',');
        const promiseArray = geminiMovies.map((movie)=> serachMovieTmdb(movie))
        const tmdbResults =await  Promise.all(promiseArray);
        dispatch(addGptResults({ movieNames :geminiMovies, movieResults : tmdbResults}))
        
    }



    return (
        <div className=" flex flex-col gap-4 w-[100%]  sm:pt-[11%] pt-[20%] h-[100%]">
            <p className="text-white sm:text-2xl text-center">Get Your Favorite Movie Suggestions From Ai</p>
            <div className="flex justify-center gap-4">
                <input ref={searchText} className="sm:px-8  px-2 py-2 rounded-lg md:w-[500px] sm:w-[300px] w-[200px] outline-none sm:text-xl" type="text" placeholder="Enter your text here" />
                <button onClick={searchMovieByText} className="bg-blue-700 sm:py-4 sm:px-8  px-2 rounded-lg font-bold text-white py-2 sm:text-xl">Search</button>
            </div>
            {showSearch &&  <div className="text-white w-[100%]  justify-start  px-12 py-2 flex flex-col gap-4">
                <p className="text-2xl flex gap-4 items-center font-bold "><FontAwesomeIcon icon={faHandPointRight} style={{color:"red", fontSize:"30px"}}></FontAwesomeIcon>  Search Movies By Their Name</p>
                <ol className="flex flex-col gap-8 font-bold text-xl px-8">
                <li className="flex gap-4 items-center"> <FontAwesomeIcon icon={faCircle} style={{color:"blue", fontSize:"15px"}}></FontAwesomeIcon>KGF</li>
                <li className="flex gap-4 items-center"> <FontAwesomeIcon icon={faCircle} style={{color:"blue", fontSize:"15px"}}></FontAwesomeIcon>FUNNY MOVIES</li>
                <li className="flex gap-4 items-center"> <FontAwesomeIcon icon={faCircle} style={{color:"blue", fontSize:"15px"}}></FontAwesomeIcon>BAJPURI MOVIES</li>
                <li className="flex gap-4 items-center"> <FontAwesomeIcon icon={faCircle} style={{color:"blue", fontSize:"15px"}}></FontAwesomeIcon>IRON MAN</li>
                <li className="flex gap-4 items-center"> <FontAwesomeIcon icon={faCircle} style={{color:"blue", fontSize:"15px"}}></FontAwesomeIcon>AVENGERS END GAME</li>
                </ol>
            </div>}
        </div>
    )
}
export default InputBox