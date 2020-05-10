import React, { useState } from 'react';

import Product from '../../model/Product';

import Page from '../../components/Page';
import { TextBox, Button } from '../../components/Form';
import TaggingField from '../../components/TaggingField';
import SetPackaging from './SetPackaging';


export default () => {
	const [product, setProduct] = useState<Partial<Product>>({});

	const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		console.log('submit product form');
	}

	return (
		<Page title="Ajout Produit">
			
			<form className="m-4" onSubmit={onSubmitHandler}>
				<TextBox label="Nom" helper="Nom générique" rootClassName="p-2" value={product.name || ''} onChange={({target: {value: name}}) => setProduct(p => ({...p, name}))} />
				<TextBox label="Marque" helper="Marque repère, Panzani..." rootClassName="p-2" value={product.brand || ''} onChange={({target: {value: brand}}) => setProduct(p => ({...p, brand}))} />
				<TextBox label="Catégorie" helper="Epicerie, crémerie..." rootClassName="p-2" value={product.brand || ''} onChange={({target: {value: category}}) => setProduct(p => ({...p, category}))} />

				<TextBox label="Codebars" rootClassName="p-2" value={product.barcode || ''} onChange={({target: {value: barcode}}) => setProduct(p => ({...p, barcode}))} />

				<TextBox label="Description" rootClassName="p-2" value={product.description || ''} onChange={({target: {value: description}}) => setProduct(p => ({...p, description}))} multiline />
				<TaggingField className="p-2" label="Tags" helper="Appuyez sur ENTREE pour ajouter un tag ou cliquez sur le bouton Ajouter" tags={product.tags || []} setTags={tags => setProduct(p => ({...p, tags}))} />
				
				<SetPackaging packaging={product.packaging || {}} onChange={packaging => setProduct(p => ({...p, packaging}))} />

				<div>
					photos
				</div>

				<Button type="submit" color="blue" className="m-2">Ajouter</Button>
				<Button type="button" color="gray" className="m-2">Annuler</Button>
			</form>

			<pre>{JSON.stringify(product, null, 2)}</pre>
		</Page>
	)
}