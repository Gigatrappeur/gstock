import React from 'react';

export default ({className, ...props}: React.SVGAttributes<SVGSVGElement>) => 
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" className={'stroke-current stroke-2 fill-none ' + className} {...props}>
		<path d="M1 6 l5 5 l8 -8" />
	</svg>;