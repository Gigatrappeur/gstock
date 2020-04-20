import React from 'react';

export default ({className, ...props}: React.SVGAttributes<SVGSVGElement>) => 
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={'stroke-current stroke-2 ' + className} {...props}>
		<path d="M1 5 H23 Z M1 12 H23 Z M1 19 H23 Z" />
	</svg>;