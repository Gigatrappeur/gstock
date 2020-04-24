import React, { useRef, useEffect } from 'react';
import { products } from '../data';
import { getReadablePackaging } from '../model/Product';

export default ({id}: {id: string}) => {
	const divNode = useRef<HTMLDivElement>(null);
	useEffect(() => {
		divNode.current?.scrollTo(0, 0);
	}, [id]);

	const numId = Number(id);

	return (
		<div ref={divNode} className="border-l border-gray-200 overflow-auto absolute inset-0 p-4 bg-white md:relative flex-1">
			{numId
				? <ProductViewData id={numId} />
				: 'Erreur : ID produit incorrecte'}
		</div>
	);
}


const ProductViewData = ({id}: {id: number}): JSX.Element => {

	const p = products.find(p => p.id == id);
	if (!p) {
		return <div>Erreur : produit {id} introuvable</div>;
	}

	return (
		<>
			<div className="text-lg">{p.name}</div>
			<div className="text-gray-600">{p.brand}</div>
			<div>{getReadablePackaging(p.packaging)}</div>
			<div>{p.description}</div>
			<div>Catégories : {p.categories.map(c => <span key={c.id}>{c.name}</span>)}</div>
			{/* {p.photos} */}
			<div>{p.tags.map(t => <span key={t}>{t}</span>)}</div>

			<hr />
			<ul>
				{p.locations.map(l => <li key={l.id}>
					{l.name}
					{l.quantity}
				</li>)}
			</ul>
		</>
	)
}