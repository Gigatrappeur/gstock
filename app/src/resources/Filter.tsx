import React from 'react';

export default ({className, ...props}: React.SVGAttributes<SVGSVGElement>) => 
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className={'stroke-current stroke-2 fill-none ' + className} {...props}>
		<path d="M2 2H22 L14 12 V22 l-4 -4 V12 Z" />
	</svg>;