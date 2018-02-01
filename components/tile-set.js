import React from 'react';
import { View } from 'react-native';
import Tile from './tile';

export default ({tiles, isYear, onTileTap = () => {}}) => {
    const min = tiles.reduce((lo, {body}) => body < lo ? body : lo, Infinity);
    const max = tiles.reduce((hi, {body}) => body > hi ? body : hi, min);
    const steps = (max - min) / 3;

    const children = tiles
        .map((t, i) => {
            const rank = t.body / steps;
            return <Tile key={t.label} label={t.label} body={t.body} rank={rank} onTap={() => onTileTap(i + 1)} />;
        });
    
    return (
        <View style={style}>
            {children}
        </View>
    );
};

const style = {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 5
};
