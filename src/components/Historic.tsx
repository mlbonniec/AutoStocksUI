import React, { ReactElement } from 'react';
import cls from '../utils/multi-classes';
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
    <tr className={style.row}>
      <td className={style.cell} title={GR_CD}>{GR_CD}</td>
      <td className={style.cell} title={GR_LB}>{GR_LB}</td>
      <td className={style.cell} title={RETAILER_PRODUCT_ID}>{RETAILER_PRODUCT_ID}</td>
      <td className={style.cell} title={EAN.toString()}>{EAN}</td>
    </tr>
  )
}

export default function Historic({ items }: IHistoric): ReactElement {
  return (
    <div id={style.container}>
      <h1 className={style.title}>Historique des ajouts</h1>
      <table className={style.content}>
      <tbody>
        <tr className={cls(style.header, style.row)}>
          <th className={style.cell}>GR_CD</th>
          <th className={style.cell}>GR_LB</th>
          <th className={style.cell}>RETAILER_PRODUCT_ID</th>
          <th className={style.cell}>EAN</th>
        </tr>
        {!items.length && (
          <tr className={style.row}>
            <td className={cls(style.cell, style.empty)} colSpan={4}>L'historique est vide.</td>
          </tr>
        )}
        {items.map((e: IItem, i: number) => (
          <Item GR_CD={e.GR_CD} GR_LB={e.GR_LB} RETAILER_PRODUCT_ID={e.RETAILER_PRODUCT_ID} EAN={e.EAN} key={i} />
        ))}
      </tbody>
      </table>
    </div>
  );
}
