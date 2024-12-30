const DetailsShimmer = ()=>{
    return (
        <div className="w-screen h-screen bg-slate-500 flex flex-col md:flex-row gap-4 justify-center items-center">
            <div className="md:w-[30%] sm:w-[300px] w-[60%] bg-slate-400 h-[400px]"></div>
            <div className=" md:w-[60%] sm:-[500px] w-[90%] h-[400px] bg-slate-400"></div>
        </div>
    )
}
export default DetailsShimmer;