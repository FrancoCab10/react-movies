import { connect } from 'react-redux';
import { modifySession } from '../../store/actions';
import { doLogin } from '../../services/sessionService';
import Login from './Login';

const mapStateToProps = (state) => ({
  session: state.session,
});

const mapDispatchToProps = (dispatch) => ({
  onDoLogin: async (user, password) => {
    const session = await doLogin(user, password);
    dispatch(modifySession((!session || session.error) ? false : {...session}));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
