import React, { createContext, useReducer, useEffect } from 'react';
import { CollectionReducer } from '../reducer/CollectionReducer';

export const CollectionContext = createContext();

const CollectionContextProvider = (props) => {
    const [collection, dispatch] = useReducer(CollectionReducer, [], () => {
        const localData = localStorage.getItem('CollectionList');
        return localData ? JSON.parse(localData) : [];
    });
    useEffect(() => {
        localStorage.setItem('CollectionList', JSON.stringify(collection));
      }, [collection]);
    return ( 
        <CollectionContext.Provider value={{collection, dispatch}}>
          {props.children}
        </CollectionContext.Provider>
     );
}
 
export default CollectionContextProvider;
