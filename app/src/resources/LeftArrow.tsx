import React from 'react';

export default ({className, ...props}: React.SVGAttributes<SVGSVGElement>) => 
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={'stroke-2 stroke-current ' + className} {...props}>
		<path d="M2 12 22 12z M2 12 L12 2Z M2 12 L12 22Z" strokeLinejoin="round" />
	</svg>;