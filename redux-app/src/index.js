import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import ReactDOM from 'react-dom';
import AppComponent from './components/AppComponent'
import AppComponentDetails from './components/AppComponentDetails'

import {rootReducer} from "./reducers/index";

var appStore = createStore(rootReducer);
debugger;
ReactDOM.render((
    <Provider store={appStore}>

        <AppComponent></AppComponent>
        <AppComponentDetails></AppComponentDetails>

    </Provider>
), document.getElementById("root"))




