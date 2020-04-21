import React from 'react';

interface AppContextDef {
	
}

export const AppContext = React.createContext<AppContextDef>({updateHeader: () => {}});

interface AppContextProps {
	children?: React.ReactNode
}
export default ({children}: AppContextProps) => {
	
	return (
		<AppContext.Provider value={{}}>
			{children}
		</AppContext.Provider>
	);
};
