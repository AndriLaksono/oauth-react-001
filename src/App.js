import React, { useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/layouts/Header';
import Home from './components/pages/Home';
import Profile from './components/pages/Profile';
import { connect } from 'react-redux';
import * as action from './actions/indexActions';

function App(props) {

	useEffect(() => {
		props.fetchUser();
	})

	return (
		<BrowserRouter>
			<Header />
			<Route exact path="/" component={Home} />
			<Route path="/profile" component={Profile} />
		</BrowserRouter>
	);
}
const mapDispatchToProps = (dispatch) => {
	return {
		fetchUser: () => dispatch(action.fetchUserAction())
	}
}

export default connect(null, mapDispatchToProps)(App);
