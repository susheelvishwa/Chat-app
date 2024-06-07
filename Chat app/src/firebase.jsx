import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/getAuth";

const firebaseConfig = {
  apiKey: "AIzaSyDonYDKVlABoGddkYAsYVnWsDg8_LgSh-4",
  authDomain: "pillu-s-chat-aap.firebaseapp.com",
  projectId: "pillu-s-chat-aap",
  storageBucket: "pillu-s-chat-aap.appspot.com",
  messagingSenderId: "415620452435",
  appId: "1:415620452435:web:92a545370bfcea226b76a6",
  measurementId: "G-BWM0S77D62",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
