importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');

// if ('serviceWorker' in navigator) {
//   navigator.serviceWorker.register('../Firebase-message-sw.js').then(function (registration) {
//     console.log("Registration suuceesfull , scope is:",registration.scope)
//   }).catch(function (err) {
//     console.log("service worker registration faile :",err)
//   })
// }
firebase.initializeApp({
 
  messagingSenderId: "73076062747",
});

const initMessaging = firebase.messaging();