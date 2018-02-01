import React from 'react';
import { View } from 'react-native';
import { NativeRouter, Route, AndroidBackButton } from 'react-router-native';
import Store from './core/store';
import Header from './components/header';
import YearScreen from './components/year-screen';
import MonthScreen from './components/month-screen';

export default props => {    
    return (
        <NativeRouter>
            <Store>
                <View>
                    <Header />
                    <AndroidBackButton />
                    <Route exact path="/" component={YearScreen} />
                    <Route exact path="/year/:year" component={YearScreen} />
                    <Route path="/year/:year/:month" component={MonthScreen} />
                </View>
            </Store>
        </NativeRouter>
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
