import { AsyncStorage } from 'react-native';
import { store } from './store';

export default const storage = {
    prefix: 'Ekdotis',
    load() {
        return AsyncStorage.getItem(`${this.prefix}.report`);
    },
    save(report) {
        return AsyncStorage.setItem(`${this.prefix}.report`, JSON.stringify(report));
    }
};

storage.load().then(report => {
    store.dispatch({
        type: 'loaded-report',
        value: report || {}
    });
});
