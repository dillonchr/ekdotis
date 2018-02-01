import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const mockData = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
    .reduce((report, label, i) => ({...report, [i + 1]: {
        3: {hours: ~~(Math.random() * 12)},
        10: {hours: ~~(Math.random() * 12)},
        17: {hours: ~~(Math.random() * 12)},
        24: {hours: ~~(Math.random() * 12)}
    }}), {});

const initialState = {
    currentYear: new Date().getFullYear(),
    currentMonth: null,
    report: {
        2018: mockData
    }
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'set-tiles':
            return {...state, tiles: action.value};
        case 'view-month':
            return {...state, currentMonth: action.value};
        default:
            return state;
    }
};

export const store = createStore(reducer);

export default ({children}) => <Provider store={store}>{children}</Provider>;
