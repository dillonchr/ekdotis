import React from 'react';
import { Text, View } from 'react-native';
import { withRouter } from 'react-router-native';
import { connect } from 'react-redux';
import TileSet from './tile-set';
import monthNames from './month-names';

const MonthScreen = props => {
    const { year, month } = props.match.params;

    props.dispatch({type: 'set-screen-title', value: `Report for ${monthNames[month - 1]} ${year}`});

    const tiles = Object.entries(props.report[year][month])
        .map(([day, report]) => {
            return {
                label: day.toString(),
                body: Math.floor(report.minutes / 60)
            };
        });

    return (
        <View style={styles.screen}>
            <View style={styles.container}>
                <TileSet tiles={tiles} isYear={false} onTileTap={mo => {}} />
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

export default withRouter(connect(s => ({
    report: s.report
}))(MonthScreen));
