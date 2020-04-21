import React from 'react';

// jeux de données
import { products } from '../data';
import Product, { getReadablePackaging } from '../model/Product';

export default ({searchValue}: {searchValue?: string}) => {
	
	const productFiltered = products.filter(p => !searchValue || ~p.name.indexOf(searchValue));
	return (
		<div className="p-4">
			{productFiltered.length} produit{productFiltered.length > 1 && 's'} {searchValue && 'trouvé' + (productFiltered.length > 1 ? 's' : '')}

			<ul>
				{productFiltered.map(p => <Item key={p.id} {...p} />)}
			</ul>
		</div>
	)
}

const Item = (p: Product) => {
	return (
		<li className="flex p-2">
			<div className="border border-gray-400 rounded w-16 h-16 mr-2">

			</div>
			<div>
				<div className="text-lg">{p.name} &ndash; {p.brand}</div>
				<div>
					{p.description}	
				</div>
				<div className="text-gray-600 text-sm">{getReadablePackaging(p.packaging)}</div>
			</div>
		</li>
	);
}