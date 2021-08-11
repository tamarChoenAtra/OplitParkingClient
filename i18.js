// import i18n from 'i18next';
// import { reactI18nextModule } from 'react-i18next';

// i18n.use(reactI18nextModule).init({
//     resources: {
const Strings = {
    he: {
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

        },
        authSMS3: {

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
    },
    en: {
        createUserParking: {
            title: 'Enter your car details',
            firstName: 'first name',
            lastName: 'last name',
            carKind: 'car kind',
            carNumber: 'car number',
            carParking: 'number parking',
            floor: 'floor',
            addParking: 'add a new parking',
            noCar: 'I dont have car, i just have parking',
            continue: 'continue',
            addNewCar: 'add a new car'
        }
    }
}
module.exports = Strings;
//language to use if translations in user language are not available
//     fallbackLng: "en",
//     interpolation: {
//         escapeValue: false, // not needed for react!!
//     }
// });

// export default i18n;