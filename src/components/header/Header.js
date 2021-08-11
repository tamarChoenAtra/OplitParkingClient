import React from 'react';
import {
    View,
    StatusBar
} from 'react-native';
import Logo from '../../assets/logo.svg';
import styles from '../../styles/Styles';

export default ({ headerRightElement }) => {
    return (
        <>
            <StatusBar
                animated={true}
            />
            <View style={[styles.row, styles.wrapHeader]}>
                <View style={styles.leftItem}>
                    <Logo />
                </View>
                <View style={styles.rightItem}>
                    {headerRightElement}
                </View>
            </View> 
            <View style={styles.headerBottomDivider}></View>
        </>
    )
}