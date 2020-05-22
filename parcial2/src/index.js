import React from 'react';
import ReactDOM from 'react-dom';
import {IntlProvider} from 'react-intl';
import * as serviceWorker from './serviceWorker';
import Movies from "./components/Movies";
import staticES from "./locales/static-en";

ReactDOM.render(
  <IntlProvider locale="en-EN" messages= {staticES}>
      <Movies /> 
   </IntlProvider>,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
