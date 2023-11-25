import LayoutAdmin from '../components/layouts/LayoutAdmin/LayoutAdmin';
import LayoutMain from '../components/layouts/LayoutMain/LayoutMain';
import LayoutProfile from '../components/layouts/LayoutProfile/LayoutProfile';
import GeneralPage from '../pages/AdminProfile/GeneralPage';
import TasksPage from '../pages/AdminProfile/TasksPage';
import HomePage from '../pages/mainPages/HomePage/HomePage';
import QuestsDetailPage from '../pages/mainPages/QuestDetailPage/QuestsDetailPage';
import QuestsPage from '../pages/mainPages/QuestsPage/QuestsPage';
import ConnectPage from '../pages/UserProfile/ConnectPage';
import LeaderboardPage from '../pages/UserProfile/LeaderboardPage';
import ProfilePage from '../pages/UserProfile/ProfilePage';
import ProfileQuestsPage from '../pages/UserProfile/QuestsPage';
import {generateData} from '../temporaryData/generateData';
import './style.scss';
import {Routes, Route} from 'react-router-dom';

function App() {
	// generateData()

	return (
		<Routes>
			<Route path='/' element={<LayoutMain />}>
				<Route index element={<HomePage />} />
				<Route path='quests' element={<QuestsPage />} />
				<Route path='quests/detail/*' element={<QuestsDetailPage />} />
				<Route path='/space' element={<HomePage />} />
				<Route path='/web3' element={<HomePage />} />
				<Route path='/swap' element={<HomePage />} />
				<Route path='/bridge' element={<HomePage />} />
			</Route>
			<Route path='/account' element={<LayoutProfile />}>
				<Route path='user/profile' element={<ProfilePage />} />
				<Route path='user/connect' element={<ConnectPage />} />
				<Route path='leaderboard' element={<LeaderboardPage />} />
				<Route path='quests' element={<ProfileQuestsPage />} />
			</Route>
			<Route path='/admin' element={<LayoutAdmin />}>
				<Route path='general' element={<GeneralPage />} />
				<Route path='tasks' element={<TasksPage />} />
				<Route path='plan' element={<LeaderboardPage />} />
				<Route path='quests' element={<ProfileQuestsPage />} />
			</Route>
		</Routes>
	);
}

export default App;
