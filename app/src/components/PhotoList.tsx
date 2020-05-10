import React, { useState } from 'react';
import Cross from '../resources/Cross';

interface PhotoListProps {
	photos: string[]
	setPhotos?(photos: string[]): any
}

const readFile = (file: File): Promise<string> =>
	new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = () => resolve(reader.result as string);
		reader.onerror = error => reject(error);
	});

export default ({photos, setPhotos}: PhotoListProps) => 
	<div>
		<label className={'block uppercase tracking-wide text-gray-700 text-xs font-bold m-2 -mb-1'/* + labelClassName*/}>
			Photos
		</label>
		<div className="flex">
			{photos?.map((p, i) => <div key={i} className="w-48 h-48 m-2 p-4 border border-gray-300 rounded relative hover:border-gray-400">
				<img src={p} alt={'Photo ' + i} className="max-h-full max-w-full" />
				{setPhotos && <Cross onClick={() => setPhotos(photos.slice().filter((_, index) => index != i))} className="absolute right-0 bottom-0 h-4 w-4 m-2 rounded-full bg-gray-500 border-2 border-gray-500 text-white cursor-pointer hover:bg-red-700 hover:border-red-700" />}
			</div>)}

			{setPhotos && <div className="h-48 my-2 mx-8 flex flex-col justify-center items-center">
				<div className="relative mt-10 w-10 h-10 overflow-hidden text-gray-700 border border-gray-300 rounded hover:border-gray-400 hover:bg-gray-100 transform active:scale-98">
					<input type="file" className="opacity-0 absolute inset-0" onChange={({target: {files}}) => files && readFile(files[0]).then(data => setPhotos([...photos, data]))} title="" />
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="stroke-current stroke-1 absolute inset-0 pointer-events-none m-2">
						<line x1="12" y1="2" x2="12" y2="22" />
						<line x1="2" y1="12" x2="22" y2="12" />
					</svg>
				</div>
				<span className="text-gray-600 text-xs italic text-center mt-1">Cliquez pour<br />ajouter une photo</span>
			</div>}
		</div>
	</div>;
	