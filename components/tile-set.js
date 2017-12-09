import React from 'react';
import { View } from 'react-native';
import Tile from './tile';

export default ({tiles}) => {
    console.log(tiles[0]);
    return (
        <View style={style}>
            {tiles.map(t => <Tile key={t.label} label={t.label} body={t.body} />)}
        </View>
    );
};

const style = {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 5
};
