import { connect } from 'react-redux';
import { selectMovie } from '../../store/actions';
import { setMovieRating, addMovieComment, getMovieById } from '../../services/moviesService';
import MovieDetails from './MovieDetails';

const mapStateToProps = (state) => ({
  session: state.session,
  movie: state.selectedMovie,
});

const mapDispatchToProps = (dispatch) => ({
  onMovieSelect: async (id) => {
    const movie = await getMovieById(id);
    dispatch(selectMovie({ ...movie } || false));
  },
  onRatingChange: async (id, rating) => {
    await setMovieRating(id, rating);
    const movie = await getMovieById(id);
    dispatch(selectMovie({ ...movie }));
  },
  onCommentAdd: async (id, comment) => {
    await addMovieComment(id, comment);
    const movie = await getMovieById(id);
    dispatch(selectMovie({ ...movie }));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails);
