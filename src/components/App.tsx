import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react';
import Historic, { IItem } from './Historic';
import Input from './Input';

export default function App() {
  const [barcode, setBarcode] = useState<string>('');
  const [historic, setHistoric] = useState<IItem[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  
  useEffect(() => {
    if (barcode?.length === 13) {
      (async () => {
        setLoading(true);
        try {
          const sku = await axios.post(process.env.REACT_APP_API_URL + '/sku/' + barcode);

          setHistoric([sku.data, ...historic]);
          setBarcode('');
        } catch (e) {
          if (e?.response?.status === 404)
            console.log('404 Status');
        }
        setLoading(false);
      })();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [barcode]);

  function onChange(e: any) {
    const { value } = e.target;

    if (!value.length || /^[0-9]+$/.test(value))
      setBarcode(value)
  }

  return (
    <Fragment>
      <p style={{opacity: .15, textAlign: 'center', padding: '1rem 0'}}>4000177211328 - 8000500290408 - 3256540002494 - 3256540002500</p>
      <Input value={barcode} onChange={onChange} loading={loading} />
      <Historic items={historic} />
    </Fragment>
  );
}
