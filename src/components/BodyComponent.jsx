import LoginComponent from "./LoginComponent";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import BrowserComponent from "./BrowserComponent";
import MovieDetailsComponent from './MovieDetailsComponent'



const BodyComponent = ()=>{

    const appRouter = createBrowserRouter([
        {
            path:"/",
            element:<LoginComponent />
        },
        {
            path:"/browse",
            element : <BrowserComponent />
        },
        {
            path:"/browse/:id",
            element : <MovieDetailsComponent />
        }
    ])
    
    return(
        <div>
            {/* <LoginComponent /> */}
            <RouterProvider router={appRouter} />
        </div>
    )
}
export default BodyComponent;