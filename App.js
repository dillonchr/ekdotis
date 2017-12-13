import React from 'react';
import { Text, View } from 'react-native';
import Store from './core/store';
import Header from './components/header';
import TileSet from './components/tile-set';

export default props => {    
    return (
        <Store>
            <View style={styles.screen}>
                <Header backButtonText={'Back'} title={'2017'} />
                <View style={styles.container}>
                    <TileSet />
                </View>
            </View>
        </Store>
    );
};

const styles = {
    screen: {
        flex: 1,
        flexDirection: 'column',
        paddingTop: 20
    },
    container: {
        flex: 1
    }   
};
