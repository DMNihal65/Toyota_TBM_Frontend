import React from 'react';
// import ReactDOM from 'react-dom';
import ReactDOM from "react-dom/client";
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App';
import './index.css'
import { ThemeProvider } from "@material-tailwind/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
 
root.render(
  <React.StrictMode >
    <ThemeProvider>
      <Provider store={store}>
      <App />
      </Provider>
     
    </ThemeProvider>
  </React.StrictMode>
);

// store={store}