import React from 'react';

// jeux de données
import { products } from '../data';
import Product from '../model/Product';

export default () => {
	
	const productFiltered = products.filter(p => p.locations.length > 0);

	let productByLocations: {[k: string]: Product[]} = {};
	for (let i = 0; i < productFiltered.length; i++) {
		for (let j = 0; j < productFiltered[i].locations.length; j++) {
			const nameLocation = productFiltered[i].locations[j].name;
			if (!(nameLocation in productByLocations)) {
				productByLocations[nameLocation] = [];
			}
			productByLocations[nameLocation].push(productFiltered[i]);
		}
	}
	
	return (
		<div>
			<ul>
				{Object.entries(productByLocations).map(([name, items]) => <LocationView key={name} name={name} products={items} />)}
			</ul>
		</div>
	)
}

const LocationView = ({name, products}: {name: string, products: Product[]}) => 
	<li className="border-t border-gray-200">
		<div className="text-sm text-gray-600 font-medium py-1 px-4">
			{name}
		</div>
		<ul>
			{products.map(p => <Item key={p.id} currentLocation={name} {...p} />)}
		</ul>
	</li>

const Item = ({currentLocation, ...p}: {currentLocation: string} & Product) => {
	const otherLocations = p.locations.filter(l => l.name != currentLocation);
	const current = p.locations.find(l => l.name == currentLocation)!;
	return (
		<li className="flex py-3 px-4 hover:bg-gray-100">
			<div className="border border-gray-300 rounded w-16 h-16 mr-4">

			</div>
			<div>
				<div className="text-lg">{p.name} &ndash; {p.brand}</div>
				<div>
					{p.description}	
				</div>
				<div className="text-gray-600 text-sm">
					{p.packaging} de {p.quantity} {p.unit}
					{' '}&ndash; {current.name} : {current.quantity}
					{otherLocations.length > 0 && <>{' '}({otherLocations.reduce((q, l) => (q ? q + ', ' : '') + l.name + ' : ' + l.quantity, '')})</>}
					{' '}&ndash; Total : {p.locations.reduce((q, l) => q + l.quantity, 0)}
				</div>
			</div>
		</li>
	);
}