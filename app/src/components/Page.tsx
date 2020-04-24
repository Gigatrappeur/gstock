import React, { useState, useContext } from 'react';
import Header from './Header';
import Menu from './Menu';
import LeftArrow from '../resources/LeftArrow';
import { NavLink } from 'react-router-dom';
import Refresh from '../resources/Refresh';
import Loupe from '../resources/Loupe';
import BoxOpenSolid from '../resources/BoxOpenSolid';
import { TextBox } from './Form';
import Bars from '../resources/Bars';
import { AppContext } from '../AppContextProvider';

interface PageProps {
	title?: string
	back?: string
	children?: React.ReactNode
	subHeader?: React.ReactNode
	actions?: React.ReactNode
}

export default ({title, back, children, actions, subHeader}: PageProps) => {
	const [navOpen, setNavOpen] = useState<'opened' | 'closed'>('closed');
	const [searchOpen, setSearchOpen] = useState<boolean>(false);
	const [searchValue, setSearchValue] = useState<string>();
	const context = useContext(AppContext);

	return (
		<div className="relative h-screen flex flex-col">
			<Header>
				{back
					? <NavLink to={back}><LeftArrow width="24" height="24" className="mx-2" /></NavLink>
					: <Bars width="24" height="24" className="mx-2 cursor-pointer" onClick={() => setNavOpen('opened')} />}
				
				<div className="ml-4 mr-auto">{title}</div>
				
				{actions}
				<Refresh width="20" className="mx-2 cursor-pointer" />
				<Loupe width="20" className="mx-2 cursor-pointer" onClick={() => setSearchOpen(b => !b)} />
			</Header>
			{subHeader && <div className="flex items-center p-2 pt-0 bg-gray-700 text-white">
				{subHeader}
			</div>}

			<Menu state={navOpen} onChange={setNavOpen}>
				<div className="text-white bg-gray-700 p-4 text-2xl">
					<BoxOpenSolid height="60" className="pb-2" />
					Gestion des Stocks
				</div>
				<NavLink className="m-2" to="/" onClick={() => setNavOpen('closed')}>Accueil</NavLink>
				<NavLink className="m-2" to="/scan-ticket" onClick={() => setNavOpen('closed')}>Scanner un ticket</NavLink>
				<NavLink className="m-2" to="/upload-ticket" onClick={() => setNavOpen('closed')}>Uploader un PDF</NavLink>

				<button onClick={() => context.setUser(undefined)}>Déconnexion</button>
			</Menu>

			{searchOpen && <div className="mr-auto ml-auto p-2 w-full">
					<TextBox Icon={Loupe} placeholder="Rechercher..." iconPosition="RIGHT" value={searchValue} onChange={({target: {value}}) => setSearchValue(value)} />
				</div>}
			
			<section className="overflow-auto h-full">
				{children}
			</section>
		</div>
	)
}