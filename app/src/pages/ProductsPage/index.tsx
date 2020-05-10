import React, { useRef, useEffect, useState } from 'react';

// jeux de données
import { products, storages } from '../../data';
import Product, { getReadablePackaging } from '../../model/Product';
import { RouteComponentProps } from 'react-router';
import ProductView from './ProductView';
import { NavLink } from 'react-router-dom';
import Page from '../../components/Page';
import Filter from '../../resources/Filter';

type ProductGroup = 'locations';// | 'categories';

export default ({match: {params: {produit, filter}}}: RouteComponentProps<{produit?: string, filter?: ProductGroup}>) => {
	const [showFilter, setShowFilter] = useState(false);

	const productFiltered = products.filter(p => p.locations.length > 0);

	let productByFilter: {[k: number]: Product[]} = {};
	if (filter) {
		// système de tri (par stockage, par catégorie, etc...)
		for (let i = 0; i < productFiltered.length; i++) {
			for (let j = 0; j < productFiltered[i][filter].length; j++) {
				const idFilter = productFiltered[i][filter][j].id;
				if (!(idFilter in productByFilter)) {
					productByFilter[idFilter] = [];
				}
				productByFilter[idFilter].push(productFiltered[i]);
			}
		}
	}
	
	const subHeader = showFilter ? <div>
			Grouper par 
			<NavLink className="ml-2 px-2 border border-gray-200 rounded" to="/products-locations" activeClassName="bg-gray-200 text-gray-700">Lieu</NavLink>
			<NavLink className="ml-2 px-2 border border-gray-200 rounded" to="/products-categories" activeClassName="bg-gray-200 text-gray-700">Catégorie</NavLink>
			<NavLink className="ml-2 px-2 border border-gray-200 rounded" to="/products" activeClassName="bg-gray-200 text-gray-700">Aucun</NavLink>
		</div> : undefined;
	
	return (
		<Page title={produit ? 'Fiche Produit' : 'Stock'} back={produit && '/products'} actions={<Filter height="20" className="mx-2 cursor-pointer" onClick={() => setShowFilter(b => !b)} />} subHeader={subHeader}>
			

			<div className="flex h-full relative">
				<ul className={'overflow-auto' + (produit ? '' : ' flex-1' )}>
					{filter && Object.entries(productByFilter).map(([id, items]) => <FilterView key={id} id={parseInt(id)} group={filter} products={items} currentId={produit} />)}
					{!filter && productFiltered.map(p => <Item key={p.id} currentId={produit} {...p} />)}
				</ul>
				{produit && <ProductView id={produit} />}
			</div>
			
		</Page>
	)
}

interface Filter {
	id: number,
	name: string
}


const FilterView = ({id, group, products, currentId}: {id: number, group: ProductGroup, products: Product[], currentId?: string}) => {
	const currentFilter: Filter = /*(group == 'locations' ? */storages/* : categories)*/.find(s => s.id == id)!;
	return (
		<li className="border-t border-gray-200">
			<div className="text-sm text-gray-600 font-medium py-1 px-4">
				{currentFilter.name}
			</div>
			<ul>
				{products.map(p => <Item key={p.id} filter={currentFilter} group={group} currentId={currentId} {...p} />)}
			</ul>
		</li>
	);
};

const Item = ({filter, group, currentId, ...p}: {filter?: Filter, group?: ProductGroup, currentId?: string} & Product) => {
	const liNode = useRef<HTMLLIElement>(null);
	useEffect(() => {
		if (currentId == String(p.id))
			liNode.current?.scrollIntoView();
	}, []);

	// const otherLocations = p.locations.filter(l => l.name != currentLocation);
	// const current = p.locations.find(l => l.name == currentLocation)!;
	return (
		<li ref={liNode}>
			<NavLink to={'/products' + (group ? '-' + group : '') + '/' + p.id + (filter ? '/' + filter.id : '')} className="flex py-3 px-4 hover:bg-gray-100" activeClassName="bg-gray-300 hover:bg-gray-300">
				<div className="border border-gray-300 bg-gray-100 rounded w-16 h-16 mr-4">

				</div>
				<div>
					<div className="text-lg">{p.name} &ndash; {p.brand}</div>
					<div>
						{p.description}	
					</div>
					<div className="text-gray-600 text-sm">
						{getReadablePackaging(p.packaging)}
						{' '}&ndash; Total : {p.locations.reduce((q, l) => q + l.quantity, 0)}
						{' '}<i className="text-gray-500">({p.locations.reduce((q, l) => (q ? q + ', ' : '') + l.name + ' : ' + l.quantity, '')})</i>
					</div>
				</div>
			</NavLink>
		</li>
	);
}