import * as firebase from "firebase/app";
import "firebase/messaging";

firebase.initializeApp({
  apiKey: "AIzaSyCzNWovyoyuUtCfpslY3G8RqszKx6sAfzQ",
  authDomain: "react-sec02-046.firebaseapp.com",
  projectId: "react-sec02-046",
  storageBucket: "react-sec02-046.appspot.com",
  messagingSenderId: "512788552350",
  appId: "1:512788552350:web:0408dc1afb7b2a7dadf98f"
});

let messaging = firebase.messaging();

messaging.onMessage(function (payload) {
  try {  //try???
    console.log('Message received. ', payload);

    const noteTitle = payload.notification.title;
    const noteOptions = {
      body: payload.notification.body,
      icon: "typewriter.jpg", //this is my image in my public folder
    };

    console.log("title ", noteTitle, " ", payload.notification.body);
    //var notification = //examples include this, seems not needed

    new Notification(noteTitle, noteOptions).onclick = function (event) {
      // console.log(event);
      // console.log(payload.notification.click_action);
      if(payload && payload.notification &&  payload.notification.click_action &&  payload.notification.click_action.length > 0)
      {
        window.open(payload.notification.click_action, '_blank');
      }
      this.close();
    };
  }
  catch (err) {
    console.log('Caught error: ', err);
  }
});

messaging.usePublicVapidKey(
  "BEwsgVafoTXZ7QCdgnAAuVipsgkqSA1EGVQomfhisLdBMazflSBtxdDPL9G_vVN8QXWQZFujWxdenk_FMWe25rU"
);

export { messaging };
