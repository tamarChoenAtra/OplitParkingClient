import React, { useEffect, useState } from 'react';
import {
    SafeAreaView,
    TouchableOpacity,
    View,
    TextInput,
    Button,
    Text
} from 'react-native';
import ArrowBack from '../../assets/arrowBack.svg';
import styles from '../../styles/Styles';
import Header from '../header/Header';
import { Formik } from 'formik';
import i18 from '../../i18/i18n';
import LinearGradient from 'react-native-linear-gradient';

export default () => {

    const createUserParking = 'createUserParking'.toString();
    const form = 'form'.toString();

    const [formValues, setFormValues] = useState({})


    return (
        <>
            <SafeAreaView style={styles.background} >
                <Header
                    headerRightElement={
                        <TouchableOpacity>
                            <ArrowBack />
                        </TouchableOpacity>
                    }
                />
                <Text style={styles.title}>
                    {i18.t(`${createUserParking}.title`)}
                </Text>
                <Formik
                    initialValues={{
                        email: '',
                        firstName: '',
                        lastName: '',
                        carKind: '',
                        carSerNum: '',
                        parkingNum: '',
                        floor: '',

                    }}
                    onSubmit={values => console.log(values)}
                >
                    {({ handleChange, handleBlur, handleSubmit, values }) => (
                        <View>
                            <View style={styles.row}>
                                <View style={styles.rightItem}>
                                    <TextInput
                                        onChangeText={handleChange('firstName')}
                                        onBlur={handleBlur('firstName')}
                                        value={values.firstName}
                                        style={styles.input}
                                        placeholder={i18.t(`${form}.firstName`)}
                                        placeholderTextColor={'#FFFFFF99'}
                                    />
                                </View>
                                <View style={styles.leftItem}>
                                    <TextInput
                                        onChangeText={handleChange('firstName')}
                                        onBlur={handleBlur('firstName')}
                                        value={values.firstName}
                                        style={styles.input}
                                        placeholder={i18.t(`${form}.lastName`)}
                                        placeholderTextColor={'#FFFFFF99'}
                                    />
                                </View>
                            </View>
                            <TextInput
                                onChangeText={handleChange('firstName')}
                                onBlur={handleBlur('firstName')}
                                value={values.firstName}
                                style={styles.input}
                                placeholder={i18.t(`${form}.kindCar`)}
                                placeholderTextColor={'#FFFFFF99'}
                            />
                            <TextInput
                                onChangeText={handleChange('firstName')}
                                onBlur={handleBlur('firstName')}
                                value={values.firstName}
                                style={styles.input}
                                placeholder={i18.t(`${form}.carNum`)}
                                placeholderTextColor={'#FFFFFF99'}
                            />
                            <View style={styles.row}>
                                <View style={styles.row}>
                                    <Text style={styles.classicTxt}>{i18.t("form.addParking")}</Text>
                                    <TouchableOpacity >
                                        <LinearGradient colors={['#FFC803', '#FF6813']} style={styles.addBtn}>
                                            <Text style={styles.plus}>+</Text>
                                        </LinearGradient>
                                    </TouchableOpacity>
                                </View>
                                <TextInput
                                    onChangeText={handleChange('firstName')}
                                    onBlur={handleBlur('firstName')}
                                    value={values.firstName}
                                    style={styles.input}
                                    placeholder={i18.t(`${form}.floor`)}
                                    placeholderTextColor={'#FFFFFF99'}
                                />
                                <TextInput
                                    onChangeText={handleChange('firstName')}
                                    onBlur={handleBlur('firstName')}
                                    value={values.firstName}
                                    style={styles.input}
                                    placeholder={i18.t(`${form}.parkingNum`)}
                                    placeholderTextColor={'#FFFFFF99'}
                                />
                            </View>
                            <Button onPress={handleSubmit} title="Submit" />
                        </View>

                    )}
                </Formik>
            </SafeAreaView>

        </>
    )
}

