import React, { useContext } from 'react';

import Bg1 from '../../resources/bg-1.jpg';
import Bg2 from '../../resources/bg-2.jpg';
import Bg3 from '../../resources/bg-3.jpg';
import BoxOpenSolid from '../../resources/BoxOpenSolid';
import { TextBox, Password, Button, CheckBox } from '../../components/Form';
import UserSolid from '../../resources/UserSolid';
import LockSolid from '../../resources/LockSolid';
import { AppContext } from '../../AppContextProvider';
import { NavLink } from 'react-router-dom';

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
						{/* appearance-none block w-full text-base border-gray-400 py-3 px-4 pl-10 leading-tight focus:outline-none border-b-2 bg-transparent */}
					</div>
					<div className="m-4">
						<Password placeholder="Mot de passe" Icon={LockSolid} />
					</div>
					<div className="m-4 flex justify-between">
						<CheckBox label="Rester connecté" />

						<NavLink to="/forgot-password">Mot de passe oublié ?</NavLink>
					</div>
					<div className="m-4">
						<Button className="w-full">Connexion</Button>
					</div>
				</form>
			</div>
		</div>
	)
}