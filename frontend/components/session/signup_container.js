import { connect } from 'react-redux';
import { createNewUser } from '../../actions/session';
import Signup from './signup';

const mapDispatchToProps = dispatch => ({
    createNewUser: formUser => dispatch(createNewUser(formUser)),
    // create new user function exists in props now
});

export default connect(null, mapDispatchToProps)(Signup);