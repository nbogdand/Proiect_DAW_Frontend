// importScripts('https://www.gstatic.com/firebasejs/5.5.0/firebase-app.js');
// importScripts('https://www.gstatic.com/firebasejs/5.5.0/firebase-messaging.js');


// firebase.initializeApp({
//     messagingSenderId: "580943499315"
// })

importScripts('https://www.gstatic.com/firebasejs/8.2.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.2/firebase-messaging.js');

firebase.initializeApp({
    apiKey: "AIzaSyCW43k14ASz_iJlJr6byCEvh7TDuvwn5IA",
    authDomain: "basketball-season.firebaseapp.com",
    projectId: "basketball-season",
    storageBucket: "basketball-season.appspot.com",
    messagingSenderId: "580943499315",
    appId: "1:580943499315:web:0a1f287b0acf92a9eb1346"
});

const message = firebase.messaging();