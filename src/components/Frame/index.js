import { connect } from 'react-redux';
import { modifySession } from '../../store/actions';
import { getSession } from '../../services/sessionService';
import Frame from './Frame';

const mapStateToProps = (state) => ({
  session: state.session,
});

const mapDispatchToProps = (dispatch) => ({
  onAppLoad: () => {
    const session = getSession();
    dispatch(modifySession(session ? { ...session } : null));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Frame);
