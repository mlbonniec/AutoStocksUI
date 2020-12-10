import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react';
import Historic, { IItem } from './Historic';
import Input from './Input';

export default function App() {
	const [barcode, setBarcode] = useState<string>('');
	const [historic, setHistoric] = useState<IItem[]>([]);
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<boolean>(false);
	
	useEffect(() => {
		if (error)
			setError(false);

		if (barcode?.length === 13) {
			(async () => {
				setLoading(true);
				try {
					const { data }: { data: IItem } = await axios.post(process.env.REACT_APP_API_URL + '/sku/' + barcode);

					setHistoric([{...data, key: historic.length}, ...historic]);
					setBarcode('');
				} catch (e) {
					if (e?.response?.status === 404)
						setError(true);
				}
				setLoading(false);
			})();
		}
	}, [barcode]); // eslint-disable-line react-hooks/exhaustive-deps

	function onChange(e: any) {
		const { value } = e.target;

		if (!value.length || /^[0-9]+$/.test(value))
			setBarcode(value)
		else if (!error)
			setError(true);
	}

	return (
		<Fragment>
			{process.env.NODE_ENV === 'development' && <p style={{opacity: .15, textAlign: 'center', paddingTop: '1rem'}}>4000177211328 - 8000500290408 - 3256540002494 - 3256540002500</p>}
			<Input value={barcode} onChange={onChange} loading={loading} error={error} />
			<Historic items={historic} />
		</Fragment>
	);
}
