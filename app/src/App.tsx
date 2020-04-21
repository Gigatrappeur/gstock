import React, { useState } from 'react';
import {BrowserRouter as Router, Switch, Route, NavLink} from 'react-router-dom';
import ScanTicket from './ScanTicket';
import ProductInStock from './ProductInStock';
import { TextBox } from './components/Form';
import Loupe from './resources/Loupe';
import Menu from './components/Menu';
import BoxOpenSolid from './resources/BoxOpenSolid';
import NoMatch from './components/NoMatch';
import Search from './Search';
import AppContext from './AppContext';
import Header, { HeaderTitle } from './components/Header';
import Bars from './resources/Bars';
import LeftArrow from './resources/LeftArrow';
import Refresh from './resources/Refresh';

export default () => {

	const [navOpen, setNavOpen] = useState<'opened' | 'closed'>('closed');
	const [searchOpen, setSearchOpen] = useState<boolean>(false);
	const [searchValue, setSearchValue] = useState<string>();

	return (
		<Router>
			<AppContext>
				<div className="relative h-screen flex flex-col">

					<Header>
						<Switch>
							<Route path="/in-stock/:id"><NavLink to="/in-stock"><LeftArrow width="24" height="24" className="mx-2" /></NavLink></Route>
							<Route path="*"><Bars width="24" height="24" className="mx-2 cursor-pointer" onClick={() => setNavOpen('opened')} /></Route>
						</Switch>

						<HeaderTitle>
							<Switch>
								<Route path="/in-stock/:id">Fiche Produit</Route>
								<Route path={['/in-stock', '/']} exact>En Stock</Route>
								<Route path="*"></Route>
							</Switch>
						</HeaderTitle>
						
						<Refresh width="20" className="mx-2 cursor-pointer" />
						<Loupe width="20" className="mx-2 cursor-pointer" onClick={() => setSearchOpen(b => !b)} />
					</Header>
					
					<Menu state={navOpen} onChange={setNavOpen}>
						<div className="text-white bg-gray-700 p-4 text-2xl">
							<BoxOpenSolid height="60" className="pb-2" />
							Gestion des Stocks
						</div>
						<NavLink className="m-2" to="/" onClick={() => setNavOpen('closed')}>Accueil</NavLink>
						<NavLink className="m-2" to="/scan-ticket" onClick={() => setNavOpen('closed')}>Scanner un ticket</NavLink>
						<NavLink className="m-2" to="/upload-ticket" onClick={() => setNavOpen('closed')}>Uploader un PDF</NavLink>
					</Menu>

					{searchOpen && <div className="mr-auto ml-auto p-2 w-full">
							<TextBox Icon={Loupe} placeholder="Rechercher..." iconPosition="RIGHT" value={searchValue} onChange={({target: {value}}) => setSearchValue(value)} />
						</div>}
					
					<section className="overflow-auto h-full">
						<Switch>
							<Route path="/search">
								<Search searchValue={searchValue} />
							</Route>
							<Route path="/scan-ticket" component={ScanTicket} />
							<Route path={['/in-stock/:id', '/in-stock', '/']} component={ProductInStock} />
							<Route path="*" component={NoMatch} />
						</Switch>
					</section>
				</div>
			</AppContext>
		</Router>
	)
};