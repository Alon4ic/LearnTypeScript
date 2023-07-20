import React, { Suspense } from 'react';
import Counter from './components/Counter';
import './index.scss';
import { Route, Routes, Link } from 'react-router-dom';
import AboutPage from './pages/AboutPage/AboutPage';
import MainPage from './pages/MainPage/MainPage';
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async';
import { MainPageAsync } from './pages/MainPage/MainPage.async';

const App = () => {
	return (
		<div className="app">
			<Link to={'/'}>Home</Link>
			<Link to={'/about'}>About us</Link>
			<Suspense fallback = {<div>loading...</div>}>
				<Routes>
					<Route path={'/about'} element={<AboutPageAsync />} />
					<Route path={'/'} element={<MainPageAsync />} />
				</Routes>
			</Suspense>
		</div>
	);
};

export default App;