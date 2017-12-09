import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const reducer = (state, action) => {
    switch(action.type) {
        default:
            return state;
    }
};

export const store = createStore(reducer);

export default ({children}) => <Provider store={store}>{children}</Provider>;
