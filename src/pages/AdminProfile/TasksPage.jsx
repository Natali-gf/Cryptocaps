import React from 'react';
import cn from 'classnames';
import s from './style.module.scss';
import AdminHeader from '../../components/adminPanel/ProfileHeader/AdminHeader';
import FormTask from '../../components/forms/FormTask/FormTask';

function TasksPage() {
	// const [openedMenu, setOpenedMenu] = React.useState<boolean>(false);
	// const [errorNotification, showErrorNotification] = React.useState<boolean>(false);

	React.useEffect(() => {

	}, [])

	return (
		<main className={s.content}>
			<AdminHeader title={'Add Task'} />
			<FormTask />
		</main>
	);
}

export default TasksPage;
