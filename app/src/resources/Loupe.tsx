import React from 'react';

export default ({className, ...props}: React.SVGAttributes<SVGSVGElement>) => 
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" className={'stroke-2 stroke-current fill-none ' + className} {...props}>
		<circle cx="10" cy="10" r="8" />
		<line x1="16.5" y1="16.5" x2="20" y2="20" strokeLinecap="round" />
	</svg>;