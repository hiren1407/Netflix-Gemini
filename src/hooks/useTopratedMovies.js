import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTopratedMovies } from "../utils/moviesSlice";

const useTopratedMovies = () => {
  // Fetch Data from TMDB API and update store
  const dispatch = useDispatch();

  const topRatedMovies = useSelector((store) => store.movies.topRatedMovies);

  const getTopratedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addTopratedMovies(json.results));
  };

  useEffect(() => {
    !topRatedMovies && getTopratedMovies();
  }, []);
};

export default useTopratedMovies;