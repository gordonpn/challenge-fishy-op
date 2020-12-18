import axios from "axios";

const findMovieByName = async (searchTerm) => {
  const apiKey = process.env.NEXT_PUBLIC_OMDB_KEY;
  const { data } = await axios.get(
    `http://omdbapi.com/?apikey=${apiKey}&s=${searchTerm}&type=movie`
  );
  return data;
};

export default findMovieByName;
