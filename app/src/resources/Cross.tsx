import React from 'react';

export default ({className, ...props}: React.SVGAttributes<SVGSVGElement>) => 
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={'stroke-current stroke-2 ' + className} {...props}>
		<path d="M2 2 L22 22Z M2 22 L22 2Z" />
	</svg>;