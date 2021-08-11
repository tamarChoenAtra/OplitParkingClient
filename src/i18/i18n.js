import i18 from 'i18next';
import { initReactI18next, useTranslation } from 'react-i18next';

const languageDetector = {
    type: 'languageDetector',
    async: true,
    detect: cb => cb('he'),
    init: () => { },
    cacheUserLanguage: () => { },
};

i18
    .use(languageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            he: {
                translation: {
                    createUserParking: {
                        title: 'הכנס את פרטי הרכב שלך',
                        carKind: 'סוג הרכב',
                        carNumber: 'מספר הרכב',
                        carParking: 'מספר החנייה',
                        floor: 'קומה',
                        addParking: 'הוספת חנייה',
                        noCar: 'אין לי רכב , יש לי רק חנייה',
                        continue: 'המשך',
                        addNewCar: 'הוספת רכב נוסף'
                    },
                    authSMS1: {
                        title: 'הכנס טלפון נייד',
                        details: ' ייתכן תשלום מול חברת הסלולר) בכדי לאמת את הטלפון שלך אנא הכנס/י את מספר הטלפון הנייד) SMS אנו נשלח אלייך הודעת',
                        subDetails: 'ברישום מספר הטלפון אני מאשר/ת שקראתי את התקנון',
                        submit: 'שליחה'
                    },
                    authSMS2: {
                        title: 'אימות מספר הטלפון',
                        details1: ':עם קוד לטלפון SMS ברגעים אלו נשלח',
                        details2: 'יש להכניס את הקוד שהתקבל',
                        sendSMSAgain: ''
                    },
                    authSMS3: {
                        title: 'הכנס קוד משתמש',
                        details: 'יש להכניס את קוד המשתמש החד פעמי שנשלח אלייך',
                        button: 'קוד חד פעמי',
                        tryAgain: 'לא קיבלתי את הקוד'
                    },
                    parkingOption: {
                        title: 'צהרים טובים',
                        imuge: '(:',
                        alertList: 'רשימת התראות',
                        openingGates: 'צפייה / פתיחת שערים לאורחים',
                        storeList: 'רשימת חנויות פתוחות',
                        parkingPermitForHour: 'אישור חנייה שעתית',
                        parkingPermitForDay: 'אישור חנייה יומית',
                        prkingRequest: 'בקשת חנייה לאורחים',




                    },
                    deleteParking: {
                        title: '?האם ברצונך למחוק חנייה זו',
                        details: 'לאחר המחיקה החנייה תמחק מרשימת החניות השמורות והאורח לא יוכל לחנות בחנייה זו',
                        button: 'מחיקה'
                    },
                    form: {
                        firstName: 'שם פרטי',
                        lastName: 'שם משפחה',
                        phoneNumber: 'טלפון נייד',
                        kindCar: 'סוג הרכב',
                        carNum: 'מספר הרכב',
                        parkingNum: 'מספר חניה',
                        floor: 'קומה',
                        addParking: 'הוספת חניה',
                        // IHaveNoCarJustParking: 'אין לי רכב ,יש לי רק חניה'
                    }
                }
            },
            en: {
                translation: {
                    createUserParking: {
                        title: 'Enter your car details',
                        carKind: 'car kind',
                        carNumber: 'car number',
                        carParking: 'number parking',
                        floor: 'floor',
                        addParking: 'add a new parking',
                        noCar: 'I dont have car, i just have parking',
                        continue: 'continue',
                        addNewCar: 'add a new car'
                    },
                    tabsIcon: {
                        setting: 'הגדרות',
                        home: 'בית',
                        parking: 'חנייה',
                        messages: 'הודעות',
                        gate: 'שער',
                    },
                    form: {
                        firstName: 'first name',
                        lastName: 'last name',
                        phoneNumber: 'phone number'
                    }
                }
            }
        },
        //language to use if translations in user language are not available
        fallbackLng: "en",
        interpolation: {
            escapeValue: false, // not needed for react!!
        }
    });

export default i18;