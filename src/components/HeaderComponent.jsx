import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/FireBase";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/useSlice";
import { toggleGptSearchView } from "../utils/gptSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const HeaderComponent = ()=>{
    
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const user = useSelector((store)=>store.user)
    const showGptSearch = useSelector(store=>store.gpt.showGptSearch);
    const userLogOut = ()=>{
        signOut(auth).then(() => {
            }).catch((error) => {
            // An error happened.
        });
    };

    useEffect(()=>{

        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              const {uid, email , displayName} = user;
              dispatch(addUser({uid : uid, email , displayName}))
              navigate("/browse")
            } else {
              dispatch(removeUser());
              navigate("/")
            }
          });
          return ()=> unsubscribe();
    },[])
    const toggleSearchBtn = ()=>{
        dispatch(toggleGptSearchView())
        
    }

    return(
        <div className="absolute top-0 left-0 px-8 py-2 bg-black bg-opacity-50 backdrop-blur-lg z-30  w-[100%] flex justify-between">
            <img className="sm:w-[150px] w-[100px]" src="../.././logoOfHeader.png" alt="" />
             {user && <div className="flex gap-4 justify-center items-center">
                <p className="cursor-pointer text-3xl flex items-center" onClick={toggleSearchBtn}>{!showGptSearch ? <FontAwesomeIcon  icon={faSearch}  style={{color:"white", fontSize:"20px"}}></FontAwesomeIcon> : <FontAwesomeIcon  icon={faXmark}  style={{color:"red", fontSize:"25px"}}></FontAwesomeIcon>}</p>
                <img className="w-[45px] h-[35px] rounded-[10px] hidden sm:flex" src="https://image.lexica.art/full_jpg/6d7832e4-07ed-47d1-b248-55f8c0c959a5" alt="" />
                <p className="bg-blue-600 px-3 hidden sm:flex py-1 rounded-lg text-white font-bold">{user.displayName || "Default Name"}</p>
                <button className="bg-red-600 px-3 py-1 rounded-lg cursor-pointer text-white font-bold" onClick={userLogOut}>Log-Out</button>
            </div>}
        </div>
    )
};
export default HeaderComponent;