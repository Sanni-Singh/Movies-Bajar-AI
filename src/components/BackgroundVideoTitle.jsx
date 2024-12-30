const BackgroundVideoTitle = ({title , overview})=>{
    
    return (
        // <div className="bg-gradient-to-r from-black w-screen aspect-video absolute">
        <div className="flex pt-[15%] gap-8 text-white  items-center md:items-start  absolute  p-4  bg-gradient-to-r from-black w-[100%] aspect-video h-screen z-10">
            <div className="flex flex-col gap-8 lg:px-12 px-0 ">
                <h1 className="lg:text-6xl text-2xl sm:text-4xl font-bold ">{title}</h1>
                <p className="md:text-lg lg:w-[700px] w-[90%]     text-xl hidden md:flex">{overview}</p>
                <div className="flex gap-4  ">
                    <button className="px-2 sm:px-8 text-md sm:text-xl rounded-lg bg-white text-black font-bold py-2">▶️ Play</button>
                    <button className="px-2 sm:px-8 ext-md sm:text-xl rounded-lg bg-black py-2">More Info</button>
                </div>
            </div>
        </div>
        // </div>
    )
}
export default BackgroundVideoTitle;