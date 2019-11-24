import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/layouts/Header';
import Home from './components/pages/Home';
import Profile from './components/pages/Profile';

function App() {
	return (
		<BrowserRouter>
			<Header />
			<Route exact path="/" component={Home} />
			<Route path="/profile" component={Profile} />
		</BrowserRouter>
	);
}

export default App;
