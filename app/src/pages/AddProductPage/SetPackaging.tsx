import React, { useState, useEffect } from 'react';
import { Select, TextBox } from '../../components/Form';
import { Packaging, PackagingUnit, PackagingType } from '../../model/Product';

interface SetPackagingProps {
	packaging: Partial<Packaging>
	onChange(p: Packaging): any
}

export default (props: SetPackagingProps) => {
	const [packaging, setPackaging] = useState<Partial<Packaging>>(props.packaging);


	useEffect(() => {
		if (packaging.type && packaging.unit && packaging.quantity)
			props.onChange({type: packaging.type, unit: packaging.unit, quantity: packaging.quantity});
	}, [packaging]);

	return (
		<div>
			<label className={'block uppercase tracking-wide text-gray-700 text-xs font-bold m-2 mb-1'/* + labelClassName*/}>
				Packaging
			</label>
			<div className="flex">
				<Select helper="Type" rootClassName="m-2 mt-0 flex-1" value={packaging.type || ''} onChange={({target: {value}}) => setPackaging(p => ({...p, type: value as PackagingType}))}>
					<option disabled></option>
					{Object.entries(PackagingType).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
				</Select>

				<Select helper="Unité" rootClassName="m-2 mt-0 flex-1" value={packaging.unit || ''} onChange={({target: {value}}) => setPackaging(p => ({...p, unit: value as PackagingUnit}))}>
					<option disabled></option>
					{Object.entries(PackagingUnit).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
				</Select>

				<TextBox type="number" rootClassName="m-2 mt-0 flex-1" helper="Quantité" value={packaging.quantity || ''} onChange={({target: {value}}) => setPackaging(p => ({...p, quantity: parseInt(value)}))} />
			</div>
		</div>
	);
}