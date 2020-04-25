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

const backgroundImages = [Bg1, Bg2, Bg3];

export default () => {
	const context = useContext(AppContext);

	const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		
		// TODO query to server
		context.setUser({email: 'test@test.fr', firstname: 'Test', lastname:'TEST'});
	};

	return (
		<div className="relative h-screen flex flex-col lg:flex-row items-center bg-cover bg-no-repeat bg-center" style={{backgroundImage: 'url(' + backgroundImages[Math.floor(Math.random() * backgroundImages.length)] + ')'}}>
			<div className="text-white m-auto">
				<BoxOpenSolid width="180" className="pt-8 m-auto" />
				<div className="text-6xl font-semibold text-center" style={{textShadow: '0 0 20px gray'}}>GStock</div>
			</div>

			<form onSubmit={onSubmitHandler} className="w-full p-8 border-t border-gray-300 sm:rounded sm:m-8 sm:w-auto sm:border-0 sm:shadow-xl lg:mx-auto lg:my-0 lg:p-16" style={{backgroundColor: 'rgba(255,255,255,0.5)', backdropFilter: 'blur(8px)'}}>
				<div className="hidden lg:block text-2xl text-gray-700 m-4 mb-6 text-center">
					Connexion
				</div>
				<div className="m-4">
					<TextBox placeholder="Email" Icon={UserSolid} />
				</div>
				<div className="m-4">
					<Password placeholder="Mot de passe" Icon={LockSolid} />
				</div>
				<div className="m-4 flex">
					<CheckBox label="Rester connecté" className="mr-8" />
					<NavLink to="/forgot-password" className="text-gray-700 hover:text-black ml-auto text-right">Mot de passe oublié ?</NavLink>
				</div>
				<div className="m-4">
					<Button className="w-full">Connexion</Button>
				</div>
			</form>
		</div>
	);
}