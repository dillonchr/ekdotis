import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { connect } from 'react-redux';

const Header = ({ title }) => (
    <View style={styles.header}>
        <Text style={styles.headerText}>{title}</Text>
    </View>
);

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
    }
};

export default connect(s => ({title: s.screenTitle}))(Header);
