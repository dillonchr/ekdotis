import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Store from './core/store';
import Header from './components/header';
import TileSet from './components/tile-set';

export default props => {
    const tiles = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
        .map(label => ({label, body: ~~(Math.random() * 12)}));
    
    return (
        <Store>
            <View style={styles.screen}>
                <Header backButtonText={'Back'} title={'2017'} />
                <View style={styles.container}>
                    <TileSet tiles={tiles} />
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
