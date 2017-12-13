import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const reducer = (state = {}, action) => {
    switch(action.type) {
        case 'set-tiles':
            return {
                ...state,
                tiles: action.value
            };
        case 'view-month':
            return {
                ...state,
                currentMonth: action.value
            };
        default:
            return state;
    }
};

export const store = createStore(reducer);
store.dispatch({type: 'set-tiles', value: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
.map((label, i) => ({label, body: ~~(Math.random() * 12)}))});

export default ({children}) => <Provider store={store}>{children}</Provider>;
