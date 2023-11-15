import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getApp, initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyApD8QKA3FcIQYENb1TnfTEx_1JcxEC08I",
  authDomain: "food-shop-fc549.firebaseapp.com",
  databaseURL: "https://food-shop-fc549-default-rtdb.firebaseio.com",
  projectId: "food-shop-fc549",
  storageBucket: "food-shop-fc549.appspot.com",
  messagingSenderId: "384960998366",
  appId: "1:384960998366:web:a01360651e0bc9780d4b4f",
};

let app;
try {
  app = getApp();
} catch (error) {
  app = initializeApp(firebaseConfig);
}
// const app = getApp().length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
