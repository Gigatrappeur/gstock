import React from 'react';

export default ({className, ...props}: React.SVGAttributes<SVGSVGElement>) => 
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className={'stroke-current stroke-2 fill-current ' + className} {...props}>
		<path d="M20.66 17 A10 10 0 1 1 20.66 7" className="fill-none" />
		<path d="M20.66 7 h-5 l5 -5z" />
	</svg>;