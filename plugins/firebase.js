import firebase from 'firebase'

if (!firebase.apps.length) {
    firebase.initializeApp({
        apiKey: "AIzaSyA7Gs86gUw8U_wJFM-o9yAN-OSJkw-N6s0",
        authDomain: "wildman-ea177.firebaseapp.com",
        projectId: "wildman-ea177",
        storageBucket: "wildman-ea177.appspot.com",
        messagingSenderId: "481073431441",
        appId: "1:481073431441:web:b55c4a1ce0044729c55030",
        measurementId: "G-QBPL1ZL5HE"
    })
}

export default firebase