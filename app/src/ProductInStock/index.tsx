import React, { useRef, useEffect } from 'react';

// jeux de données
import { products } from '../data';
import Product, { getReadablePackaging } from '../model/Product';
import { RouteComponentProps } from 'react-router';
import ProductView from './ProductView';
import { NavLink } from 'react-router-dom';
import Page from '../components/Page';

export default ({match: {params: {id}}}: RouteComponentProps<{id?: string}>) => {
	const productFiltered = products.filter(p => p.locations.length > 0);

	// gérer un système de tri (par stockage, par catégorie, etc...)
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
		<Page title={id ? 'Fiche Produit' : 'En Stock'} back={id && '/in-stock'}>

			<div className="flex h-full relative">
				<ul className={'overflow-auto' + (id ? '' : ' flex-1' )}>
					{Object.entries(productByLocations).map(([name, items]) => <LocationView key={name} name={name} products={items} currentId={id} />)}
				</ul>
				{id && <ProductView id={id} />}
			</div>
			
		</Page>
	)
}

const LocationView = ({name, products, currentId}: {name: string, products: Product[], currentId?: string}) => 
	<li className="border-t border-gray-200">
		<div className="text-sm text-gray-600 font-medium py-1 px-4">
			{name}
		</div>
		<ul>
			{products.map(p => <Item key={p.id} currentLocation={name} currentId={currentId} {...p} />)}
		</ul>
	</li>

const Item = ({currentLocation, currentId, ...p}: {currentLocation: string, currentId?: string} & Product) => {
	const liNode = useRef<HTMLLIElement>(null);
	useEffect(() => {
		if (currentId == String(p.id))
			liNode.current?.scrollIntoView();
	}, []);

	const otherLocations = p.locations.filter(l => l.name != currentLocation);
	const current = p.locations.find(l => l.name == currentLocation)!;
	return (
		<li ref={liNode}>
			<NavLink to={'/in-stock/' + p.id} className="flex py-3 px-4 hover:bg-gray-100" activeClassName="bg-gray-300 hover:bg-gray-300">
				<div className="border border-gray-300 bg-gray-100 rounded w-16 h-16 mr-4">

				</div>
				<div>
					<div className="text-lg">{p.name} &ndash; {p.brand}</div>
					<div>
						{p.description}	
					</div>
					<div className="text-gray-600 text-sm">
						{getReadablePackaging(p.packaging)}
						{' '}&ndash; {current.name} : {current.quantity}
						{otherLocations.length > 0 && <>{' '}({otherLocations.reduce((q, l) => (q ? q + ', ' : '') + l.name + ' : ' + l.quantity, '')})</>}
						{' '}&ndash; Total : {p.locations.reduce((q, l) => q + l.quantity, 0)}
					</div>
				</div>
			</NavLink>
		</li>
	);
}