import Location from './Location';

export default interface Product {

	id: number
	name: string
	description: string
	category: string
	tags: string[]
	photos: string[]

	locations: Location[]

	barcode: string
	packaging: Packaging
	brand: string // panzani
}

export enum PackagingUnit {
	gramme = 'gramme',
	kilogramme = 'kilogramme',
	litre ='litre',
	rouleau = 'rouleau',
	pièce = 'pièce'
}

const UnitsRef: { [k in keyof typeof PackagingUnit]: (q: number) => string } = {
	gramme: (q) => q + 'g',
	kilogramme: (q) => q + 'kg',
	litre: (q) => q + 'L',
	rouleau: (q) => q + ' rouleau' + (q > 1 ? 'x' : ''),
	pièce: (q) => q + ' pièce' + (q > 1 ? 's' : '')
};

export enum PackagingType {
	paquet = 'paquet',
	sachet = 'sachet',
	boite = 'boite',
	brique = 'brique'
	// '...'
}

export interface Packaging {
	type: keyof typeof PackagingType
	unit: keyof typeof PackagingUnit
	quantity: number
	// X _packaging_ de _quantity_ d'_unit_ de _name_ (ex : [X] sachet de 3 kg de riz, [X] paquet de 6 rouleaux de PQ, etc.)
}

export const getReadablePackaging = (p: Packaging): string => {
	return p.type + ' de ' + UnitsRef[p.unit](p.quantity);
}