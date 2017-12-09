import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Store from './core/store';

export default props => {
    return (
        <Store>
            <View style={styles.container}>
                <Text>Open up App.js to start working on your app!</Text>
                <Text>Changes you make will automatically reload.</Text>
                <Text>Shake your phone to open the developer menu.</Text>
            </View>
        </Store>
    );
};

const styles = {
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }   
};
