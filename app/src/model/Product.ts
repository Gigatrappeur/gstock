import Location from './Location';

export default interface Product {

	id: number
	name: string
	description: string
	categories: string[]
	tags: []
	photos: string[]

	locations: Location[]

	barcode: string
	packaging: Packaging
	brand: string // panzani
}

type Units = 'gramme' | 'kilogramme' | 'litre' | 'rouleau' | 'pièce';
type UnitsRefProps = {
	[k in Units]: (q: number) => string;
};
const UnitsRef: UnitsRefProps = {
	gramme: (q) => q + 'g',
	kilogramme: (q) => q + 'kg',
	litre: (q) => q + 'L',
	rouleau: (q) => q + ' rouleau' + (q > 1 ? 'x' : ''),
	pièce: (q) => q + ' pièce' + (q > 1 ? 's' : '')
};

export interface Packaging {
	type: 'paquet' | 'sachet' | 'boite' | 'brique' // | '...'
	unit: Units
	quantity: number
	// X _packaging_ de _quantity_ d'_unit_ de _name_ (ex : [X] sachet de 3 kg de riz, [X] paquet de 6 rouleaux de PQ, etc.)
}

export const getReadablePackaging = (p: Packaging): string => {
	return p.type + ' de ' + UnitsRef[p.unit](p.quantity);
}