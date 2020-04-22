import React, { useContext } from 'react';

import Bg1 from '../../resources/bg-1.jpg';
import Bg2 from '../../resources/bg-2.jpg';
import Bg3 from '../../resources/bg-3.jpg';
import BoxOpenSolid from '../../resources/BoxOpenSolid';
import { TextBox, Password } from '../../components/Form';
import UserSolid from '../../resources/UserSolid';
import LockSolid from '../../resources/LockSolid';
import { AppContext } from '../../AppContextProvider';

export default () => {
	const context = useContext(AppContext);

	const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		context.setUser({email: 'test@test.fr', firstname: 'Test', lastname:'TEST'});
	};

	return (
		<div className="text-white ">
			<div className="fixed inset-0 bg-fixed bg-cover bg-no-repeat bg-center opacity-75" style={{backgroundImage: 'url(' + [Bg1, Bg2, Bg3][Math.floor(Math.random() * 3)] + ')'}}>
			</div>
			<div className="relative h-screen flex flex-col items-center">
				<div className="m-auto">
					<BoxOpenSolid className="w-64" />
					<div className="text-6xl font-semibold text-center">GStock</div>
				</div>

				<form onSubmit={onSubmitHandler} className="w-10/12 m-auto">
					
					<div className="m-4">
						<TextBox placeholder="Email" Icon={UserSolid} />
					</div>
					<div className="m-4">
						<Password placeholder="Mot de passe" Icon={LockSolid} />
					</div>
					<div className="m-4">
						<button className="border rounded border-gray-400 w-full py-3 px-4 bg-gray-600 outline-none focus:outline-none">Connexion</button>
					</div>
				</form>
			</div>
		</div>
	)
}