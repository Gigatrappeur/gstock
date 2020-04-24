import Product from '../model/Product';
import Category from '../model/Category';
import Storage from '../model/Storage';

export const categories: Category[] = [
	{id:1, name:'épicerie'},
	// {id:2, name:'fruits secs'},
	{id:3, name:'crémerie'}
];

export const storages: Storage[] = [
	{id: 1, name: 'Cuisine'},
	{id: 2, name: 'Garage'}
];

export const products:Product[] = [
	{
		id: 1,
		name: 'Cerneaux de noix',
		brand: 'Sainte Lucis',
		categories: [{id:1, name:'épicerie'}/*, {id:2, name:'fruits secs'}*/],
		tags: [],
		description: '',
		barcode: '123',
		packaging: {
			type: 'sachet',
			unit: 'gramme',
			quantity: 50
		},
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
		categories: [{id:1, name:'épicerie'}],
		tags: [],
		description: '',
		barcode: '456',
		packaging: {
			type: 'boite',
			unit: 'gramme',
			quantity: 6
		},
		locations: [],
		photos: []
	},
	{
		id: 3,
		name: 'Noix de coco râpée',
		brand: 'Marque repère',
		categories: [{id:1, name:'épicerie'}],
		tags: [],
		description: '',
		barcode: '789',
		packaging: {
			type: 'sachet',
			unit: 'gramme',
			quantity: 125
		},
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
		categories: [{id:3, name:'crémerie'}],
		tags: [],
		description: '',
		barcode: '134',
		packaging: {
			type: 'boite',
			unit: 'pièce',
			quantity: 12
		},
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
		categories: [{id:3, name:'crémerie'}],
		tags: [],
		description: '',
		barcode: '145',
		packaging: {
			type: 'boite',
			unit: 'gramme',
			quantity: 250
		},
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
		categories: [{id:3, name:'crémerie'}],
		tags: [],
		description: '',
		barcode: '852',
		packaging: {
			type: 'brique',
			unit: 'litre',
			quantity: 1
		},
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

