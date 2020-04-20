import Product from '../model/Product';

// export const locations: Storage[] = [
// 	{
// 		id: 
// 	}
// ];

export const products:Product[] = [
	{
		id: 1,
		name: 'Cerneaux de noix',
		brand: 'Sainte Lucis',
		categories: ['épicerie', 'fruits secs'],
		tags: [],
		description: '',
		barcode: '123',
		packaging: 'sachet',
		unit: 'g',
		quantity: 50,
		locations: [{
			id: 1,
			name: 'Cuisine',
			quantity: 1
		}],
		photos: []
	},
	{
		id: 2,
		name: 'Bouchée feuilletées',
		brand: 'Maison Maribel',
		categories: ['épicerie'],
		tags: [],
		description: '',
		barcode: '456',
		packaging: 'boite',
		unit: 'g',
		quantity: 6,
		locations: [],
		photos: []
	},
	{
		id: 3,
		name: 'Noix de coco râpée',
		brand: 'Marque repère',
		categories: ['épicerie'],
		tags: [],
		description: '',
		barcode: '789',
		packaging: 'sachet',
		unit: 'g',
		quantity: 125,
		locations: [{
			id: 1,
			name: 'Cuisine',
			quantity: 1
		}],
		photos: []
	},

	{
		id: 9,
		name: 'Oeuf',
		brand: 'Plein air',
		categories: ['crémerie'],
		tags: [],
		description: '',
		barcode: '134',
		packaging: 'boite',
		unit: 'pièce',
		quantity: 12,
		locations: [{
			id: 1,
			name: 'Cuisine',
			quantity: 2
		}],
		photos: []
	},
	{
		id: 11,
		name: 'Beurre gastronomique demi-sel',
		brand: 'Marque repère',
		categories: ['crémerie'],
		tags: [],
		description: '',
		barcode: '145',
		packaging: 'boite',
		unit: 'g',
		quantity: 250,
		locations: [{
			id: 1,
			name: 'Cuisine',
			quantity: 1
		}],
		photos: []
	},
	{
		id: 12,
		name: 'Lait demi-écrémé',
		brand: 'Marque repère',
		categories: ['crémerie'],
		tags: [],
		description: '',
		barcode: '852',
		packaging: 'brique',
		unit: 'l',
		quantity: 1,
		locations: [{
				id: 1,
				name: 'Cuisine',
				quantity: 3
			},
			{
				id: 2,
				name: 'Garage',
				quantity: 6
		}],
		photos: []
	}
];

