import {stylesheet} from 'react-native';
import constant from 'expo-constants';

export default styllesheet.create({
    container:{
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: constant.statusBarHeight+20,
    },
    header:{
        flexdiection: 'row',
        justifyContent: 'space-between',
        alignItens: 'center',
    },
});