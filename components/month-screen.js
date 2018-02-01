import React from 'react';
import { Text, View } from 'react-native';
import { withRouter } from 'react-router-native';
import { connect } from 'react-redux';
import TileSet from './tile-set';

const MonthScreen = props => {
    console.log(props);
    const { year, month } = props.match.params;

    const tiles = Object.entries(props.report[year][month])
        .map(([day, report]) => {
            return {
                label: day.toString(),
                body: report.hours
            };
        });

    return (
        <View style={styles.screen}>
            <View style={styles.container}>
                <TileSet tiles={tiles} isYear={false} onTileTap={mo => console.log(mo)} />
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
