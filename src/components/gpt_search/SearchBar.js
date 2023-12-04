import React from "react";
import lang from "../../utils/languageConstant";
import { useSelector, useDispatch } from "react-redux";
import { useRef } from "react";
import { setShowDeveloperJobStatus } from "../../redux/slices/configSlice";

const SearchBar = () => {
  const langKey = useSelector((state) => state.config.language);
  const dispatch = useDispatch();
  const searchTerm = useRef(null);

  /*
  const searchMovieByName = async (movieName) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${movieName}&include_adult=false&language=en-US&page=1`,
        API_OPTIONS
      );

      const jsonRes = await response.json();

      return jsonRes.results;
    } catch (error) {
      console.error("Something went wrong while fetching movies by their name");
    }
  };
*/
  const searchGPTHandler = async () => {
    dispatch(setShowDeveloperJobStatus(true));
    /*console.log("search clicked" + searchTerm.current.value);

    const gptQuery =
      "Act as a Movie Recommendation System and suggest some movies for the query : " +
      searchTerm.current.value +
      "only give name of 5 movies, comma seprated like the example result given ahead. Exaple Result: Animal, Pathan, Jawan, Tiger, KGF";

    try {
      gptResult = await openai.chat.completions.create({
        messages: [{ role: "user", content: gptQuery }],
        model: "gpt-3.5-turbo",
      });
      console.log(gptResult);
    } catch (error) {
      console.error(
        "something went wrong while getting result form open ai server"
      );
    }

    if (gptResult !== null) {
      const recommendedMoviesByAI =
        gptResult.choices[0]?.message?.content.split(",");

      const promiseArray = recommendedMoviesByAI.map((movieName) =>
        searchMovieByName(movieName)
      );

      const movieResults = await Promise.all(promiseArray);
      // console.log(movieResults);
      dispatch(addGptMovies(movieResults));
    }*/
  };

  return (
    <div className="mt-36">
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          ref={searchTerm}
          className="border border-white p-2 w-[500px] text-black"
          type="text"
          placeholder={lang[langKey].gptSearchPlaceHolder}
        />
        <button
          className="border border-white p-2 ml-2"
          onClick={searchGPTHandler}
        >
          {lang[langKey].searchBtnText}
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
