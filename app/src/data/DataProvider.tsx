import React, { useEffect, useState } from 'react';
import {openDB, DBSchema, IDBPDatabase} from 'idb';
import Product from '../model/Product';

interface GStockDB extends DBSchema {
	products: {
		value: Product
		key: number
		indexes: {}
	}
}

interface DataContextProps {
	db?: IDBPDatabase<GStockDB>
	dbErrors?: any[]
}

const upgrade = (db: IDBPDatabase<GStockDB>/*, oldVersion: number, newVersion: number | null, transaction: IDBPTransaction<GStockDB, 'products'[]>*/) => {
	db.createObjectStore('products', {keyPath: 'id'});
}


const log = (l: any) => () => console.log(l);
export const DataContext = React.createContext<DataContextProps>({});


export default ({children}: {children?: React.ReactNode}) => {
	const [dbErrors, setDbErrors] = useState<any[]>();
	const addDbError = (error: any) => setDbErrors(errors => ([...errors, error]));
	const [db, setDb] = useState<IDBPDatabase<GStockDB>>();

	useEffect(() => {
		openDB<GStockDB>('gstock', 1, {upgrade, terminated: log('DB Terminated anormaly'), blocked: log('older version connected'), blocking: log('block newer version')})
			.then(setDb)
			.catch(addDbError);

		return () => db?.close();
	}, []);
	
	return (
		<DataContext.Provider value={{db, dbErrors}}>
			{children}
		</DataContext.Provider>
	);
}
