import React, { useEffect, useState } from 'react';
import {
    SafeAreaView,
    TouchableOpacity,
    View,
    TextInput,
    Button,
    Text,
    StyleSheet
} from 'react-native';
import ArrowBack from '../../assets/arrowBack.svg';
import styles from '../../styles/Styles';
import Header from '../header/Header';
import { Formik } from 'formik';
import i18 from '../../i18/i18n';
import LinearGradient from 'react-native-linear-gradient';
import FrameIcon from '../../assets/svg/FrameIcon.svg';

export default () => {

    const authSMS1 = 'authSMS1'.toString();
    const form = 'form'.toString();

    const [formValues, setFormValues] = useState({})


    return (
        <View style={_styles.wrap}>
            <View style={[styles.row, styles.wrapHeader]}>
                <FrameIcon />
            </View>
            <Text style={styles.title}>
                {i18.t(`${authSMS1}.title`)}
            </Text>
            <View style={_styles.wrapDetails}>
                <Text style={[_styles.detailsGeneric, _styles.details]}>
                    {i18.t(`${authSMS1}.details1`)}
                </Text>
                <Text style={[_styles.detailsGeneric, _styles.details]}>
                    {i18.t(`${authSMS1}.details2`)}
                </Text>
            </View>
            <View style={_styles.subDetailsTop}>
                <Text style={[_styles.detailsGeneric, _styles.subDetails]}>
                    {i18.t(`${authSMS1}.subDetails`)}
                </Text>
            </View>
        </View>
    )
}

const _styles = StyleSheet.create(
    {
        wrapDetails: {
            marginTop: 40
        },
        detailsGeneric: {
            textAlign: 'center',
            color: 'white',
        },
        details: {
            fontSize: 18
        },
        subDetails: {
            fontSize: 15
        },
        wrap: {
            paddingHorizontal: 20
        },
        subDetailsTop:{
            marginTop:20
        }
    }
)
