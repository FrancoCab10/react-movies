import {
  MODIFY_SESSION, 
  LIST_MOVIES, 
  FILTER_MOVIES, 
  SELECT_MOVIE
} from './actions';

const initialState = {
  session: null,
  movies: [],
  movieFilter: '',
  selectedMovie: null,
}

const session = ({ session }, action) => {
  switch (action.type) {
    case MODIFY_SESSION:
      return action.session;
    default:
      return session;
  }
};

const movies = (state, action) => {
  switch (action.type) {
    case LIST_MOVIES:
      return {
        ...state,
        movies: action.movies
      };
    case FILTER_MOVIES:
      return {
        ...state,
        movieFilter: action.movieFilter
      };
    case SELECT_MOVIE:
      return {
        ...state,
        selectedMovie: action.selectedMovie
      };
    default:
      return state;
  }
};

const reducers = (state = initialState, action) => ({
  ...movies(state, action),
  session: session(state, action)
});

export default reducers;