import axios from './api';

export const getFilteredMovies = async (filter) => {
  try {
    const { data: movies } = await axios.get('/movies', {
      params: { title: filter }
    });
    return movies;
  } catch (e) {
    return [];
  }
}

export const getMovieById = async (id) => {
  try {
    const { data: movie } = await axios.get(`/movies/${id}`);
    return movie;
  } catch (e) {
    return null;
  }
}

export const setMovieRating = async (id, rating) => {
  try {
    const { data } = await axios.post(`/movies/${id}/rating`, { rating });
    return data;
  } catch (e) {
    return null;
  }
};

export const addMovieComment = async (id, comment) => {
  try {
    const { data } = await axios.post(`/movies/${id}/comments`, { comment });
    return data;
  } catch (e) {
    return null;
  }
};
