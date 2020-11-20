import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react';
import Historic, { IItem } from './Historic';
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

          setHistoric([{
            skuId: sku.data['MPX'],
            barcode: sku.data['Code-barre'],
            assetFill: sku.data['Asset Fill'],
            description: sku.data['Designation'],
            receivableZones: sku.data['Zones'],
          }, ...historic]);
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
      {loading ? <h1>Chargement...</h1> : <h1>En attente</h1>}
      <input type="text" name="barcode" id="barcode" onChange={e => setBarcode(e.target.value)} />
      <Historic items={historic} />
    </Fragment>
  );
}
