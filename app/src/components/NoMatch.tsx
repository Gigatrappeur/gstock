import React from 'react';
import { RouteComponentProps, NavLink } from 'react-router-dom';

export default ({location: {pathname}}: RouteComponentProps) => 
	<div className="p-10">

		<div className="font-hairline text-6xl">Erreur 404</div>
		<div className="font-hairline text-xl">
			URL <span className="font-mono">{pathname}</span> non trouvée
		</div>
		<hr className="mt-3 mb-1 border-t border-gray-400" />
		<div className="mb-6">
			Nos meilleurs éléments travaillent dessus
		</div>
		<NavLink to="/" className="inline-block px-6 py-2 bg-gray-700 text-white">Accueil</NavLink>
	</div>