import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react';
import Historic, { IItem } from './Historic';
import Input from './Input';
// import style from '../styles/app.module.scss';

export default function App() {
  const [barcode, setBarcode] = useState<string | null>(null);
  const [historic, setHistoric] = useState<IItem[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  
  useEffect(() => {
    if (barcode?.length === 13) {
      (async () => {
        setLoading(true);
        try {
          const sku = await axios.post(process.env.REACT_APP_API_URL + '/sku/' + barcode);

          setHistoric([sku.data, ...historic]);
        } catch (e) {
          if (e?.response?.status === 404)
            console.log('404 Status');
        }
        setLoading(false);
      })();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [barcode]);
  
  return (
    <Fragment>
      <Input value={barcode} onChange={onChange} loading={loading} />
      <Historic items={historic} />
    </Fragment>
  );
}
