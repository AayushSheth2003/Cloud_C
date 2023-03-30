// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBA7hhflcR_R_G_fiC3bq8h7hBys8V1LR0",
  authDomain: "todolist-crud-f056e.firebaseapp.com",
  projectId: "todolist-crud-f056e",
  storageBucket: "todolist-crud-f056e.appspot.com",
  messagingSenderId: "298241465492",
  appId: "1:298241465492:web:43167073f27254e0096881",
  measurementId: "G-GYQCQKSP3X"
};


firebase.initializeApp(firebaseConfig);
firebase.analytics();
var db = firebase.firestore();