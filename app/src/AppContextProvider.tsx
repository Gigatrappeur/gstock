import React, { useState } from 'react';
import User from './model/User';

interface AppContextDef {
	user?: User
	setUser(user?: User): void
}

const noop = () => {};
export const AppContext = React.createContext<AppContextDef>({setUser: noop});

interface AppContextProps {
	children?: React.ReactNode
}
export default ({children}: AppContextProps) => {

	const [user, setUser] = useState<User>()
	
	return (
		<AppContext.Provider value={{user, setUser}}>
			{children}
		</AppContext.Provider>
	);
};
