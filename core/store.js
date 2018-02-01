import React from 'react';
import { AsyncStorage } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const initialState = {
    currentYear: new Date().getFullYear(),
    currentMonth: null,
    report: {},
    screenTitle: 'Ekdotis'
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'load-data':
            return {...state, report: action.value};
        case 'set-screen-title':
            return {...state, screenTitle: action.value};
        default:
            return state;
    }
};

AsyncStorage.getItem('service-report')
    .then(r => r ? JSON.parse(r) : {})
    .then(report => {
        console.log('REPORT',   report);
        store.dispatch({
            type: 'load-data',
            value: report
        });
    });

export const store = createStore(reducer);

export default ({children}) => <Provider store={store}>{children}</Provider>;
