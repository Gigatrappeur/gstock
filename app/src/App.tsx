import React, { useState } from 'react';
import {BrowserRouter as Router, Switch, Route, NavLink} from 'react-router-dom';
import ScanTicket from './ScanTicket';
import ProductInStock from './ProductInStock';
import { TextBox } from './components/Form';
import Loupe from './resources/Loupe';
import Bars from './resources/Bars';
import Menu from './components/Menu';
import BoxOpenSolid from './resources/BoxOpenSolid';
import NoMatch from './components/NoMatch';
import Search from './Search';

export default () => {

	const [navOpen, setNavOpen] = useState<'opened' | 'closed'>('closed');
	const [searchOpen, setSearchOpen] = useState<boolean>(false);
	const [searchValue, setSearchValue] = useState<string>();

	return (
		<Router>
			<div className="relative h-screen flex flex-col">

				<header className="text-gray-700">
					<div className="text-xl flex items-center h-12 p-2 bg-gray-700 text-white">
						<Bars width="24" height="24" className="mx-2 cursor-pointer" onClick={() => setNavOpen('opened')} />
						<div className="ml-4 mr-auto">En stock</div>

						<Loupe width="20" className="mx-2 cursor-pointer" onClick={() => setSearchOpen(b => !b)} />
					</div>
					{searchOpen && <div className="mr-auto ml-auto p-2 w-full">
						<TextBox Icon={Loupe} placeholder="Rechercher..." iconPosition="RIGHT" value={searchValue} onChange={({target: {value}}) => setSearchValue(value)} />
					</div>}
				</header>
				
				<Menu state={navOpen} onChange={setNavOpen}>
					<div className="text-white bg-gray-700 p-4 text-2xl">
						<BoxOpenSolid height="60" className="pb-2" />
						Gestion des Stocks
					</div>
					<NavLink className="m-2" to="/" onClick={() => setNavOpen('closed')}>Accueil</NavLink>
					<NavLink className="m-2" to="/scan-ticket" onClick={() => setNavOpen('closed')}>Scanner un ticket</NavLink>
					<NavLink className="m-2" to="/upload-ticket" onClick={() => setNavOpen('closed')}>Uploader un PDF</NavLink>
				</Menu>
				
				<section className="overflow-auto">
					<Switch>
						<Route exact path="/" component={ProductInStock} />
						<Route path="/search"  render={() => <Search searchValue={searchValue} />} />
						<Route path="/scan-ticket" component={ScanTicket} />
						<Route path="*" component={NoMatch} />
					</Switch>
				</section>
			</div>
		</Router>
	)
};