import React, { Fragment, ReactElement } from 'react';
import style from '../styles/historic.module.scss';

export interface IItem {
  assetFill: string;
  barcode: string;
  description: string;
  receivableZones: string;
  skuId: string;
}

interface IHistoric {
  items: IItem[];
}

function Item({ assetFill, barcode, description, receivableZones, skuId }: IItem): ReactElement {
  return (
    <div className={style.row}>
      <div className={style.cell} title={skuId}>{skuId}</div>
      <div className={style.cell} title={barcode}>{barcode}</div>
      <div className={style.cell} title={assetFill}>{assetFill}</div>
      <div className={style.cell} title={description}>{description}</div>
      <div className={style.cell} title={receivableZones}>{receivableZones}</div>
    </div>
  )
}

export default function Historic({ items }: IHistoric): ReactElement {
  return (
    <Fragment>
      <h1>Historique temporaire d'insertion</h1>
      <div id={style.historic}>
        <div className={style.header}>
          <div className={style.cell}>MPX</div>
          <div className={style.cell}>Code-barre</div>
          <div className={style.cell}>Asset Fill</div>
          <div className={style.cell}>Designation</div>
          <div className={style.cell}>Zones</div>
        </div>
        {items.map((e: IItem, i: number) => (
          <Item assetFill={e.assetFill} barcode={e.barcode} description={e.description} receivableZones={e.receivableZones} skuId={e.skuId} key={i} />
        ))}
      </div>
    </Fragment>
  );
}
