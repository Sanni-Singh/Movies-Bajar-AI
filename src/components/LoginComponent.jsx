import { useState, useRef } from "react";
import HeaderComponent from "./HeaderComponent";
import { Validation } from "../utils/Validation";
import {  createUserWithEmailAndPassword , signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth} from '../utils/FireBase'
import { useDispatch } from "react-redux";
import { addUser } from "../utils/useSlice";

const LoginComponent = ()=>{

    const dispatch = useDispatch()
    const name = useRef(null)
    const email = useRef(null)
    const passward = useRef(null)

    const [isLogin , setIsLoginIn] = useState(true);
    const [validLogin ,setValidLogin] = useState(null);
    const [activeBtn ,setActiveBtn] = useState(false);

    const setLoginBtn = ()=> setActiveBtn(true);
    const signLogin =()=>{
        setIsLoginIn(!isLogin);
    }

    const submitBtn = ()=>{
        const message = Validation(email.current.value , passward.current.value)
        // if(message !== null) return;
        setValidLogin(message)
        if(message) return;
        
        
        if(!isLogin){
            createUserWithEmailAndPassword(auth, email?.current?.value, passward?.current?.value)
            .then((userCredential) => {
              const user = userCredential.user;
              updateProfile(auth.currentUser, {
                displayName:name.current.value, photoURL: "https://example.com/jane-q-user/profile.jpg"
              }).then(() => {
                 const {uid, email , displayName} = auth.currentUser;
                dispatch(addUser({uid : uid, email , displayName}))
              }).catch((error) => {
                setValidLogin(error)
              });
              
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              setValidLogin(errorMessage)
              
            });
        }
        else {
            signInWithEmailAndPassword(auth, email.current.value , passward.current.value)
            .then((userCredential) => {
              const user = userCredential.user;
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              setValidLogin("Passward Is Incorrect......!")
              
            });
        }
    }


    return(
        <div className="w-screen h-screen realtive flex justify-center items-center">
            <div className="w-[100%] h-[100%] absolute z-0 ">
                <img className="w-[100%] h-[100%] "  src="https://images.pexels.com/photos/18515130/pexels-photo-18515130/free-photo-of-cinema-audience-hand-catching-popcorn-from-a-box.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            </div>
            <HeaderComponent />

            <section className="bg-gray-50 dark:bg-gray-900 rounded-lg  w-[400px] relative z-10">
                <div className="flex flex-col gap-4 px-12 py-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">{isLogin ? "Login Here": "Create an account"}</h1>
                <form  onSubmit={(e)=> e.preventDefault()} className="space-y-4 md:space-y-6">

                    {!isLogin && <div>
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your name</label>
                        <input ref={name} type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-0" placeholder="name@mail.com" required="" />
                    </div>}
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input ref={email} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-0" placeholder="name@mail.com" required="" />
                    </div>

                    <div>
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                        <input ref={passward} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-0 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onClick={setLoginBtn} required=""/>
                    </div>

                    { validLogin && <p className="text-red-600">{validLogin}</p>}

                    <div className="flex items-start">
                        <div className="flex items-center h-5">
                            <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 " required=""/>
                        </div>
                        <div className="ml-3 text-sm">
                            <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">I accept the <a className="font-medium hover:underline " href="#">Terms and Conditions</a></label>
                        </div>
                    </div>

                    {activeBtn && <button onClick={submitBtn} className="w-full text-white bg-[#2563EB] hover:bg-[#2563EB] focus:ring-4 focus:outline-none focus:ring-[#2563EB] font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-[
                    #2563EB] dark:hover:bg-[#2563EB] dark:focus:ring-[#2563EB]">{isLogin ? "Login" : "Create an account"}</button>}
                    <div className="flex justify-center items-center  ">
                        {!isLogin && <p className="text-sm flex gap-3 font-light cursor-pointer text-gray-500 dark:text-gray-400" onClick={signLogin}>Already have an account? </p>}
                        {isLogin && <p className="text-sm flex gap-3 cursor-pointer font-light text-gray-500 dark:text-gray-400"  onClick={signLogin}>Create an account</p>}
                    </div>
                </form>
            </div>

        </section>
    </div>
    )
}
export default LoginComponent;