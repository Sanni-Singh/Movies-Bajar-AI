import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTION } from "../utils/constant";
import { addMovieDetails } from "../utils/movieSlice";

const useMovieDetails = (id) => {
  const dispatch = useDispatch();

  useEffect(() => {
    getMovieDetails();
  }, []);

  const getMovieDetails = async () => {
    const movieData = await fetch(
      `https://api.themoviedb.org/3/movie/${id}`,
      API_OPTION
    );
    const res = await movieData.json();

    dispatch(addMovieDetails(res));
  };
};

export default useMovieDetails;