import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import { routeConfig } from './utils/config/routeConfig';

function App() {
	return (
		<div className='page'>
			<Header />
			<Routes>
				{Object.values(routeConfig).map(route => {
					return (
						<Route key={route.path} path={route.path} element={route.element} />
					);
				})}
			</Routes>
		</div>
	);
}

export default App;
