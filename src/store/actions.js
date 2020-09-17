export const MODIFY_SESSION = 'MODIFY_SESSION';
export const LIST_MOVIES = 'LIST_MOVIES';
export const FILTER_MOVIES = 'FILTER_MOVIES';
export const SELECT_MOVIE = 'SELECT_MOVIE';

export const modifySession = (session) => ({
  type: MODIFY_SESSION,
  session
});

export const listMovies = (movies) => ({
  type: LIST_MOVIES,
  movies
});

export const filterMovies = (movieFilter) => ({
  type: FILTER_MOVIES,
  movieFilter
});

export const selectMovie = (selectedMovie) => ({
  type: SELECT_MOVIE,
  selectedMovie
});