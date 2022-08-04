import { combineReducers } from "redux";

const initialState = {
  movie: null,
  title: "",
};

const fetchMovieReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_MOVIE":
      return action.payload;
    default:
      return state;
  }
};

// const rootReducer = (state, action) => {
//   return {
//     movie: fetchMovieReducer(state, action),
//   };
// };
const rootReducer = combineReducers({
  movie: fetchMovieReducer,
});

export default rootReducer;
