import React, { useState } from 'react';
import { TextBox, BaseButton } from './Form';
import Cross from '../resources/Cross';

export default ({label, helper, tags, setTags}: {label: string, helper?: string, tags?: string[], setTags?(tags: string[]): any}) => {
	const [currentTag, setCurrentTag] = useState<string>('');
	
	console.log(tags);

	const submitNewTag = () => {
		if (currentTag.length == 0) return;
		setTags && setTags([...(tags || []).filter(t => t != currentTag), currentTag]);
		setCurrentTag('');
	};

	const onKeyUpHandler = (e : React.KeyboardEvent<HTMLInputElement>) => {
		if (e.keyCode == 13) {
			e.preventDefault();
			submitNewTag();
		}
	}

	return (
		<div>
			{setTags
				? <div className="flex mb-1">
					<TextBox rootClassName="flex-1" label={label} helper={helper} value={currentTag} onChange={({target:{value}}) => setCurrentTag(value)} onKeyDown={onKeyUpHandler} />
					<BaseButton className="font-bold py-2 px-4 text-gray-600" type="button" onClick={submitNewTag}>Ajouter</BaseButton>
				</div>
			: <label className={'block uppercase tracking-wide text-gray-700 text-xs font-bold'}>{label}</label>}

			<div className="flex flex-wrap">
				{tags?.map(tag => <div className="flex items-center shadow mt-2 mr-2 p-1 rounded bg-gray-500 text-white" key={tag}>
					<span className="px-1">{tag}</span>
					{setTags && <BaseButton className="ml-2 h-full w-4" onClick={() => setTags(tags?.slice().filter(t => t != tag))}>
						<Cross height="10" width="10" />
					</BaseButton>}
				</div>)}
			</div>
		</div>
	);
}