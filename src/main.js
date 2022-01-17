import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/src/jquery.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import './registerServiceWorker'

Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyDrTSQhSg5FqfsYPr6FVXKZbhHwKTQXzHQ",
  authDomain: "wa-checkers.firebaseapp.com",
  projectId: "wa-checkers",
  storageBucket: "wa-checkers.appspot.com",
  messagingSenderId: "780702677730",
  appId: "1:780702677730:web:d3f125658147d13e2cbcbb",
  measurementId: "G-4G84MJWD3F"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
onAuthStateChanged(auth, () => {
    if (app) {
      new Vue({
        router,
        render: function (h) { return h(App) }
      }).$mount('#app')
    }
});

