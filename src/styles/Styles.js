import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    background: {
        //todo: global colors file
        backgroundColor: '#0A2550',
        flex: 1
    },
    title: {
        color: 'white',
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 15,
        fontFamily: 'Assistant-Regular'
    },
    addBtn: {
        width: 35,
        height: 35,
        borderRadius: 50,
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    wrapHeader: {
        margin: 20
    },
    plus: {
        color: 'white',
        fontSize: 20,
        alignSelf: 'center',
        textAlign: 'center',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    leftItem: {
        flex: 1
    },
    classicTxt: {
        color: '#FFFFFF99',
        fontSize: 18,
        fontFamily: 'Assistant-Regular',

    },
    rightItem: {
        flex: 1,
        direction: 'rtl'
    },
    headerBottomDivider: {
        borderBottomColor: '#FFFFFF',
        borderBottomWidth: StyleSheet.hairlineWidth
    },
    input: {
        height: 60,
        margin: 12,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#FFFFFF',
        borderRadius: 10,
        padding: 20,
        textAlign: 'right',
        color: '#FFFFFF99',
        fontSize: 18,
        fontFamily: 'Assistant-Regular'

    },

})