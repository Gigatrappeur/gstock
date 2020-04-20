import React, { useState, useEffect } from 'react';
import { createWorker, detect } from 'tesseract.js';

// const worker = createWorker({
// 	logger: (m) => console.log(m),
// });

// (async () => {
// 	await worker.load();
// 	await worker.loadLanguage('eng');
// 	await worker.initialize('eng');
// 	const { data: { text } } = await worker.recognize('https://tesseract.projectnaptha.com/img/eng_bw.png');
// 	console.log(text);
// 	await worker.terminate();
// })();

// https://github.com/naptha/tesseract.js
// https://github.com/naptha/tesseract.js/blob/master/docs/api.md
// https://github.com/jeromewu/tesseract.js-typescript/blob/master/index.ts
// https://github.com/jeromewu/tesseract.js-react-app/blob/master/src/App.js
// https://github.com/naptha/tesseract.js/blob/master/docs/local-installation.md

export default () => {
	const [fileToRecognize, setFileToRecognize] = useState<File>();
	const [progress, setProgress] = useState<number>(0);
	const worker = createWorker({
		logger: m => { console.log(m); if (m.jobId) setProgress(m.progress); }
	});
	const doOCR = async (file: File) => {
		setOcr('En cours...')
		await worker.load();
		await worker.loadLanguage('fra');
		await worker.initialize('fra');
		console.log(await worker.detect(file));
		const { data: { text } } = await worker.recognize(file);
		// console.log(await detect(file));
		setOcr(text);
		//await worker.terminate();
	};

	const [ocr, setOcr] = useState<string>();
	useEffect(() => {
		if (fileToRecognize)
			doOCR(fileToRecognize);
	}, [fileToRecognize]);

	return (
		<div>
			<h1>Scan ticket</h1>

			<input type="file" onChange={({ target: { files: [file] } }) => setFileToRecognize(file)} />
			{ocr && <div>
				<div>
					{Math.round(progress * 100)}%
				</div>
				<pre>
					{ocr}
				</pre>
			</div>}
		</div>
	);
}