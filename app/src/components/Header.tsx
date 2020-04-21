import React from 'react';

interface HeaderProps {
	children?: React.ReactNode
}

export default ({children}: HeaderProps) => 
	<header className="flex items-center h-12 p-2 bg-gray-700 text-xl text-white">
		{children}
	</header>;

export const HeaderTitle = ({children}: HeaderProps) => 
	<div className="ml-4 mr-auto">{children}</div>;