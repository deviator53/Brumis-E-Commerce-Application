import React from 'react';
import Data from '../database/Data';
import AppContext from './App-Context';

const ProductContext = (props) => {
    const { products } = Data;
    return (
        <AppContext.Provider
          shop={{
             products
          }}
        >
            {props.children}
        </AppContext.Provider>
    )
}

export default ProductContext;
