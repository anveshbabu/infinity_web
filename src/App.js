import React from "react";
// import logo from './logo.svg';

import Routes from "./routes";
import "./assets/scss/index.scss";
import 'moment-timezone';
import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css'
import { Provider } from "react-redux";
import { store } from "./helpers";
function App() {
  return (
    <div>
       <ReactNotification />
       <Provider store={store}><Routes /></Provider>
    </div>
  );
}

export default App;
