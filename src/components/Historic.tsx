import React, { Fragment, ReactElement } from 'react';
import style from '../styles/historic.module.scss';

export interface IItem {
  GR_CD: string;
  GR_LB: string;
  RETAILER_PRODUCT_ID: string;
  EAN: number;
}

interface IHistoric {
  items: IItem[];
}

function Item({ GR_CD, GR_LB, RETAILER_PRODUCT_ID, EAN }: IItem): ReactElement {
  return (
    <div className={style.row}>
      <div className={style.cell} title={GR_CD}>{GR_CD}</div>
      <div className={style.cell} title={GR_LB}>{GR_LB}</div>
      <div className={style.cell} title={RETAILER_PRODUCT_ID}>{RETAILER_PRODUCT_ID}</div>
      <div className={style.cell} title={EAN.toString()}>{EAN}</div>
    </div>
  )
}

export default function Historic({ items }: IHistoric): ReactElement {
  return (
    <Fragment>
            <div className={style.cell}>GR_CD</div>
            <div className={style.cell}>GR_CD</div>
            <div className={style.cell}>RETAILER_PRODUCT_ID</div>
            <div className={style.cell}>EAN</div>
          </div>
          {items.map((e: IItem, i: number) => (
            <Item GR_CD={e.GR_CD} GR_LB={e.GR_LB} RETAILER_PRODUCT_ID={e.RETAILER_PRODUCT_ID} EAN={e.EAN} key={i} />
          ))}
    </Fragment>
  );
}
