import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

export default (props) => {
    return (
        <View style={styles.header}>
            <TouchableOpacity onPress={() => console.log('implement back button')}>
                <Text style={styles.headerButton}>{props.backButtonText}</Text>
            </TouchableOpacity>
            <Text style={styles.headerText}>{props.title}</Text>
            <TouchableOpacity onPress={() => console.log('implement menu button')}>
                <Text style={styles.headerButton}>{'Menu'}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = {
    header: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        padding: 10,
        backgroundColor: '#5B3C88'
    },
    headerText: {
        color: 'white',
        flex: 1,
        fontSize: 20,
        textAlign: 'center'
    },
    headerButton: {
        color: 'white'
    }
};