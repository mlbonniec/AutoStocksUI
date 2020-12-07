import React, { ReactElement } from 'react';
import barcode from '../assets/barcode.svg';
import cls from '../utils/multi-classes';
import style from '../styles/input.module.scss';

interface IInput {
	loading?: boolean;
	error?: boolean;
	value?: string;
	onChange?(e: any): any;
}

export default function Input(props: IInput): ReactElement {
	const { error, loading, onChange, value } = props;
	
	return (
		<div id={style.container} className={cls(loading ? style.disabled : null, error ? style.error : null)}>
			<img src={barcode} className={style.icon} alt="barcode icon" />
			<input type="text" name="barcode" id="barcode" className={style.input} placeholder="Code-barre EAN" onChange={onChange} value={value} disabled={loading} />
			{loading && (
				<svg className={cls(style.icon, style.spinner)} viewBox="0 0 50 50">
					<circle className={style.path} cx="25" cy="25" r="20" fill="none" strokeWidth="5"></circle>
				</svg>
			)}
		</div>
	);
}

