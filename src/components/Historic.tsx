import React, { ReactElement } from 'react';
import cls from '../utils/multi-classes';
import style from '../styles/historic.module.scss';

export interface IItem {
	key: number;
	brands: string;
	image: string;
	ingredients: string;
	quantity: string;
	ean: string;
	name: string;
}

interface IHistoric {
	items: IItem[];
}

function Item({ ean, name, image, ingredients, quantity, brands }: IItem): ReactElement {
  return (
    <tr className={style.row}>
      <td className={style.cell} title={ean}>{ean}</td>
      <td className={style.cell} title={name}>{name}</td>
      <td className={style.cell} title={image}>
        <a href={image} target="_blank" rel="noreferrer">{image}</a>
      </td>
      <td className={style.cell} title={ingredients}>{ingredients}</td>
      <td className={style.cell} title={quantity}>{quantity}</td>
      <td className={style.cell} title={brands}>{brands}</td>
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
					</tr>
					{!items.length && (
						<tr className={cls(style.empty, style.row)}>
							<td className={cls(style.cell, style.empty)} colSpan={6}>L'historique est vide.</td>
						</tr>
					)}
					{items.map((e: IItem) => (
						<Item ean={e.ean} product={e.product} image={e.image} ingredients={e.ingredients} quantity={e.quantity} brands={e.brands} key={e.key} />
					))}
				</tbody>
			</table>
		</div>
	);
}
