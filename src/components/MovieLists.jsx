import MovieCard from './MovieCard'
const MovieLists = ({title , movies})=>{
    
    return(
        <div className='flex flex-col gap-4 px-4 '>
            <h1 className='text-white font-bold sm:text-2xl px-2'>{title}</h1>
            <div className='flex overflow-x-hidden'>
                <div className='flex gap-4'>
                    {movies?.map((ele)=> <MovieCard key={ele.id} posterPath={ele.poster_path} title={ele.original_title} id ={ele.id}/>)}
                </div>
            </div>
        </div>
    )
}
export default MovieLists;