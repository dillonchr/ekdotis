import React from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import Header from './header';
import TileSet from './tile-set';

const ScreenContainer = props => {    
    return (
        <View style={styles.screen}>
            <Header backButtonText={props.currentMonth && 'Back'} title={'2017'} />
            <View style={styles.container}>
                <TileSet />
            </View>
        </View>
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

export default connect(s => ({
    currentYear: s.currentYear,
    currentMonth: s.currentMonth
}))(ScreenContainer);
