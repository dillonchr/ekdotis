import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import Tile from './tile';

const TileSet = ({tiles, isYear, dispatch}) => {
    const min = tiles.reduce((lo, {body}) => body < lo ? body : lo, Infinity);
    const max = tiles.reduce((hi, {body}) => body > hi ? body : hi, min);
    const steps = (max - min) / 3;
    const onTileTap = label => {
        if (isYear) {
            dispatch({
                type: 'set-tiles',
                value: [1,6,14]
                    .map(n => ({
                        label: n,
                        body: ~~((Math.random() * 4) + 1)
                    }))
            });
        } else {
            dispatch({
                type: 'set-tiles',
                value:  ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
                .map((label, i) => ({label, body: ~~(Math.random() * 12)}))
            });
        }
    };

    const children = tiles
        .map(t => {
            const rank = t.body / steps;
            return <Tile key={t.label} label={t.label} body={t.body} rank={rank} onTap={onTileTap} />;
        });
    
    return (
        <View style={style}>
            {children}
        </View>
    );
};

const mapStateToProps = state => ({
    tiles: state.tiles,
    isYear: state.tiles.length === 12
});

export default connect(mapStateToProps)(TileSet);

const style = {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 5
};
