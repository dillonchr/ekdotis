import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { withRouter } from 'react-router-native';

export default withRouter((props) => {
    const getTitle = () => {
        const defaultTitle = 'Ekdotis';
        try {
            return props.match.params.month || props.match.params.year || defaultTitle;
        } catch (ignore) {
            return defaultTitle;
        }
    };

    return (
        <View style={styles.header}>
            <TouchableOpacity onPress={() => console.log('implement back button')}>
                <Text style={styles.headerButton}>{props.backButtonText}</Text>
            </TouchableOpacity>
            <Text style={styles.headerText}>{getTitle()}</Text>
            <TouchableOpacity onPress={() => console.log('implement menu button')}>
                <Text style={styles.headerButton}>{'Menu'}</Text>
            </TouchableOpacity>
        </View>
    );
});

const styles = {
    header: {
        alignItems: 'center',
        borderBottomWidth: 2,
        display: 'flex',
        flexDirection: 'row',
        padding: 10,
        backgroundColor: '#5B3C88'
    },
    headerText: {
        color: '#fff',
        flex: 1,
        fontSize: 20,
        textAlign: 'center'
    },
    headerButton: {
        color: '#fff'
    }
};
