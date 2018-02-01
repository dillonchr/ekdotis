import React from 'react';
import { Text, View } from 'react-native';
import Store from './core/store';
import ScreenContainer from './components/screen-container';

export default props => {    
    return (
        <Store>
            <ScreenContainer />
        </Store>
    );
};

const styles = {
    screen: {
        flex: 1,
        flexDirection: 'column'
    },
    container: {
        flex: 1
    }   
};
