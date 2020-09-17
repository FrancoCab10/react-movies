import { connect } from 'react-redux';
import Home from './Home';

const mapStateToProps = (state) => ({
  session: state.session,
});

export default connect(mapStateToProps)(Home);
