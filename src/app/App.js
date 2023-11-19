import HomePage from '../pages/HomePage/HomePage';
import './App.scss';
import { Routes, Route } from 'react-router-dom';

function App() {

	return (
    <Routes>

      <Route path='/' element={<HomePage/>} />
    </Routes>
	);
}

export default App;