import React from "react";
import ReactDOM from "react-dom/client";
import "slick-carousel/slick/slick.css";
import firebaseConfig from "./firebase.config";
// import firebase from "firebase/app";
import { PersistGate } from 'redux-persist/integration/react'
// import "~slick-carousel/slick/slick-theme.css";
import { store, persistor } from "./redux/store";
import { Provider } from "react-redux";

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ErrorBoundary from "./ErrorBoundary";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	// <React.StrictMode>
	<ErrorBoundary fallback='There was unexpected error'>
		<Provider store={store}>
			<PersistGate loading={"loading"} persistor={persistor}>
				<App />
			</PersistGate>
		</Provider>
	</ErrorBoundary>
	// </React.StrictMode>
);
// firebase.initializeApp(firebaseConfig);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
