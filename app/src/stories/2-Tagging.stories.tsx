import React, { useState } from 'react';
import TaggingField from '../components/TaggingField';
import { withKnobs, text, boolean, number, array } from '@storybook/addon-knobs';

import '../index.css';

export default {
	title: 'Tagging',
	component: TaggingField,
	decorators: [withKnobs]
}

export const Default = () => {
	const [tags, setTags] = useState<string[]>();

	return (
		<div className="m-4">
			<TaggingField label={text('Label', 'Tags')} helper={text('Helper', 'Press enter to add tag or click the Add button')} tags={tags} setTags={boolean('Read Only', false) ? undefined : setTags} />
			<pre>{JSON.stringify(tags)}</pre>
		</div>
	);
}