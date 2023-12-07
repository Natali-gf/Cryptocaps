import React from 'react';
import s from './style.module.scss';
import AdminHeader from '../../components/adminPanel/ProfileHeader/AdminHeader';
import FormTask from '../../components/forms/FormTask/FormTask';

function TasksPage() {

	return (
		<main className={s.content}>
			<AdminHeader title={'Add Task'} />
			<FormTask />
		</main>
	);
}

export default TasksPage;
