import { connect } from 'react-redux';
import { listMovies, filterMovies,  } from '../../store/actions';
import { getFilteredMovies } from '../../services/moviesService';
import MovieList from './MovieList';

const mapStateToProps = (state) => ({
  movies: state.movies, 
  filter: state.movieFilter,
});

const mapDispatchToProps = (dispatch) => ({
  onFilterChange: async (filter) => {
    dispatch(filterMovies(filter));
    const filteredMovies = await getFilteredMovies(filter);
    dispatch(listMovies(filteredMovies));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
