import React, { useContext } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ScanTicket from './ScanTicket';
import ProductsPage from './pages/ProductsPage';
import NoMatch from './components/NoMatch';
import AppContextProvider, { AppContext } from './AppContextProvider';
import LoginPage from './pages/LoginPage';
import DataProvider from './data/DataProvider';
import AddProductPage from './pages/AddProductPage';

export default () => 
	<Router>
		<DataProvider>
			<AppContextProvider>
				<Main />
			</AppContextProvider>
		</DataProvider>
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
				'/']} exact component={ProductsPage} />
			<Route path="/add-product" component={AddProductPage} />
			<Route path="*" component={NoMatch} />
		</Switch>
	);
}