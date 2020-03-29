import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAZDx-YFF-bgNFs7LJM1DFwKJ0EYyjLrP8",
    authDomain: "expensify-1ed95.firebaseapp.com",
    databaseURL: "https://expensify-1ed95.firebaseio.com",
    projectId: "expensify-1ed95",
    storageBucket: "expensify-1ed95.appspot.com",
    messagingSenderId: "459203522728",
    appId: "1:459203522728:web:165e7f3a16252260a6929d"
  };

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

database.ref().set({
    name: 'Dainius Laucys',
    age: 25,
    stressLevel: 6,
    job: {
        title: 'Software developer',
        company: 'Google'
    },
    location: {
        city: 'Vilnius',
        country: 'Lithuania'
    }
}).then(() => {
    console.log('Data is saved.');
}).catch((e) => {
    console.log('This failed', e);
});

database.ref().update({
    stressLevel: 9,
    'job/company': 'Amazon',
    'location/city': 'Seattle'
});

// database.ref().remove().then(() => {
//         console.log('Data is removed.');
//     }).catch((e) => {
//         console.log('This failed', e);
//     });