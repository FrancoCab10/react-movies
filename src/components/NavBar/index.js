import { connect } from 'react-redux';
import { modifySession } from '../../store/actions';
import { doLogout } from '../../services/sessionService';
import NavBar from './NavBar';

const mapStateToProps = (state) => ({
  session: state.session,
});

const mapDispatchToProps = (dispatch) => ({
  onDoLogout: async () => {
    doLogout();
    dispatch(modifySession(null));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
