import React from 'react';
import { TouchableOpacity, View, Text, Dimensions } from 'react-native';

export default ({label, body}) => {
    const { width } = Dimensions.get('window');
    const tileSize = (width - 50) / 4;
    return (
        <TouchableOpacity style={{...styles.tile, height: tileSize, width: tileSize}} onPress={() => console.log('tile click')}>
            <View style={styles.label}>
                <Text style={styles.labelText}>{label}</Text>
            </View>
            <View style={styles.body}>
                <Text style={styles.bodyText}>{body}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = {
    tile: {
        backgroundColor: '#5B3C88',
        display: 'flex',
        margin: 5,
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
