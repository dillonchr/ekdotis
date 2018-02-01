import React from 'react';
import { Text, View } from 'react-native';
import { withRouter } from 'react-router-native';
import { connect } from 'react-redux';
import TileSet from './tile-set';
import monthNames from './month-names';

const YearScreen = props => {
    const getYear = () => {
        const currentYear = (new Date().getFullYear()).toString();
        try {
            return props.matches.params.year || currentYear;
        } catch (ignore) {
            return currentYear;
        }
    };

    props.dispatch({type: 'set-screen-title', value: getYear()});

    const viewMonth = mo => {
        props.history.push(`/year/${getYear()}/${mo}`);
    };

    const tiles = Object.entries(props.report[getYear()])
        .map(([month, report]) => {
            return {
                label: monthNames[month - 1],
                body: Math.floor(Object.values(report).reduce((sum, r) => sum + r.minutes, 0) / 60)
            };
        });

    return (
        <View style={styles.screen}>
            <View style={styles.container}>
                <TileSet tiles={tiles} isYear={true} onTileTap={viewMonth} />
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
}))(YearScreen));
