import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyEbJ7Vtlvl5mOkZ3VZ3qzhzLT--hATb4",
  authDomain: "dulces-delicias-295eb.firebaseapp.com",
  projectId: "dulces-delicias-295eb",
  storageBucket: "dulces-delicias-295eb.appspot.com",
  messagingSenderId: "332372798244",
  appId: "1:332372798244:web:5b36368e5cb56d60f521b1"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
