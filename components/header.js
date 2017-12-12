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
        borderBottomColor: '#B93C6C',
        borderBottomWidth: 2,
        display: 'flex',
        flexDirection: 'row',
        padding: 10,
        //backgroundColor: '#B93C6C'//'#5B3C88'
    },
    headerText: {
        color: '#B93C6C',
        flex: 1,
        fontSize: 20,
        textAlign: 'center'
    },
    headerButton: {
        color: '#B93C6C'
    }
};
