import React from 'react';
import { TouchableOpacity, View, Text, Dimensions } from 'react-native';

export default (props) => {
    const { width } = Dimensions.get('window');
    const tileSize = (width - 50) / 4;
    return (
        <TouchableOpacity onPress={() => console.log('tile click')}>
            <View style={{...styles.tile, height: tileSize, width: tileSize}}>
                <View style={styles.label}>
                    <Text style={styles.labelText}>Jan</Text>
                </View>
                <View style={styles.body}>
                    <Text style={styles.bodyText}>8</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = {
    tile: {
        backgroundColor: '#5B3C88',
        display: 'flex',
        margin: 10,
        width: '25%'
    },
    labelText: {
        color: 'white',
        fontSize: 12,
        paddingLeft: 5,
        paddingTop: 5
    },
    body: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    bodyText: {
        color: 'white',
        fontSize: 36
    }
};
