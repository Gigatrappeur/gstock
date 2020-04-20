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
	packaging: 'paquet' | 'sachet' | 'boite' | 'brique' // | '...'
	unit: 'g' | 'kg' | 'l' | 'rouleau' | 'pièce' // | '...'
	quantity: number // X _packaging_ de _quantity_ d'_unit_ de _name_ (ex : [X] sachet de 3 kg de riz, [X] paquet de 6 rouleaux de PQ, etc.)
	brand: string // panzani
}