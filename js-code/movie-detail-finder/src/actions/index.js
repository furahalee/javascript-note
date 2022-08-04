import axios from "axios";

export const fetchMovie = (title) => async (dispatch) => {
  const response = await axios.get(
    `http://www.omdbapi.com/?t=${title}&apikey=your-api-key`
  );
  dispatch({
    type: "FETCH_MOVIE",
    payload: response.data,
  });
};
