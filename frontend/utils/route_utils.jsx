// automate process of allowing people to see certain components depending on logged in or logged out
import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, withRouter } from 'react-router-dom';

const mapStateToProps = state => ({
    loggedIn: Boolean(state.session.currentUser)
});

// auth route: protect log in/sign up, redirect users if already logged in/signed in
// how to call: <AuthRoute path="" component={} />

const Auth = ({ loggedIn, path, component: Component }) => (
    <Route path={path} render={props => (
        loggedIn ? <Redirect to="/" /> : <Component {...props} />
    )} />
);

const Protected = ({ loggedIn, path, component: Component}) => (
    <Route path={path} render={props => (
        loggedIn ? <Component {...propts} /> : <Redirect to='/signup/' />
    )} />
);

//could make a const Bool

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));