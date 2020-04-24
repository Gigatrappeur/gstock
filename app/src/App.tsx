import React, { useContext } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ScanTicket from './ScanTicket';
import ProductInStock from './ProductInStock';
import NoMatch from './components/NoMatch';
import AppContextProvider, { AppContext } from './AppContextProvider';
import LoginPage from './pages/LoginPage';

export default () => 
	<Router>
		<AppContextProvider>
			<Main />
		</AppContextProvider>
	</Router>;
	

const Main = () => {
	const context = useContext(AppContext);

	if (!context.user) {
		return <LoginPage />;
	}

	return (
		<Switch>
			{/* <Route path="/search">
				<Search searchValue={searchValue} />
			</Route> */}
			<Route path="/scan-ticket" component={ScanTicket} />
			<Route path={[
				'/products/:produit/:filterId',
				'/products/:produit',
				'/products',
				'/products-:filter/:produit/:filterId',
				'/products-:filter/:produit',
				'/products-:filter',
				'/']} component={ProductInStock} />
			<Route path="*" component={NoMatch} />
		</Switch>
	);
}