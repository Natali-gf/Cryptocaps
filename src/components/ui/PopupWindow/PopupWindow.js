import s from './style.module.scss';
import cn from 'classnames';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { showAuthorization } from '../../../core/store/slices/windowStateSlice';

export default function PopupWindow({className, children, showPopupWindow}) {
	const dispatch = useDispatch();

	useEffect(() => {
		return () => {
			dispatch(showAuthorization(false))
		}
	}, []);

	return (
		<>
			<div className={cn(s.window, className)}>
				<div className={s.window__container}>
					<button className={cn(s.window__close, 'icon_close')}
						onClick={() => dispatch(showAuthorization(false))}></button>
					<div className={s.window__form}>
						{children}
					</div>
				</div>
			</div>
		</>
	);
}
