import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import useTopratedMovies from "../hooks/useTopratedMovies";
import GeminiSearch from "./GeminiSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  const showGeminiSearch = useSelector((store) => store.gemini.showGeminiSearch);


  useNowPlayingMovies();
  usePopularMovies();
  useUpcomingMovies();
  useTopratedMovies();
  return (
    <div>
      <Header />
      {showGeminiSearch ? (
        <GeminiSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};
export default Browse;
