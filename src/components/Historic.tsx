import React, { ReactElement, useState } from 'react';
import cls from '../utils/multi-classes';
import style from '../styles/historic.module.scss';

export interface IItem {
	key: number;
	brands: string;
	image: string;
	ingredients: string;
	quantity: string;
	ean: string;
	product: string;
}

interface IHistoric {
	items: IItem[];
}

function shortString(str: string, length: number): string {
	return str.split(/\s+/).slice(0, length).join(' ');
}

function Item({ ean, product, image, ingredients, quantity, brands }: IItem): ReactElement {
	const [shortIngredients, setShortIngredients] = useState<string>(shortString(ingredients, 20).concat('...'));
	
	function onClick() {
		if (ingredients !== shortIngredients)
			setShortIngredients(ingredients);
		else
			setShortIngredients(shortString(ingredients, 20).concat('...'));
	}

	return (
		<tr className={style.row}>
			<td className={style.cell} title={ean}>{ean}</td>
			<td className={style.cell} title={product}>{product}</td>
			<td className={style.cell} title={image}>
				<a href={image} target="_blank" rel="noreferrer">{image}</a>
			</td>
			<td className={style.cell} title={ingredients}>
				{shortIngredients}
				<span className={style.toggle} onClick={onClick}>
					Afficher {ingredients === shortIngredients ? 'moins' : 'plus'}
				</span>
			</td>
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
						<th className={style.cell}>EAN</th>
						<th className={style.cell}>Produit</th>
						<th className={style.cell}>Image</th>
						<th className={style.cell}>Ingrédients</th>
						<th className={style.cell}>Quantité</th>
						<th className={style.cell}>Marques</th>
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
