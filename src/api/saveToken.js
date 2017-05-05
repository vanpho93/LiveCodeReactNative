import { AsyncStorage } from 'react-native';

const saveToken = async (token) => {
    await AsyncStorage.setItem('@token', token);
};

export default saveToken;
