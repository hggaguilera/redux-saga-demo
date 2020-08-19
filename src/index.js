import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import App from "./components/App";
import reducers from "./reducers";
import rootSaga from "./sagas";

// Axios Config
axios.defaults.withCredentials = true;
axios.defaults.baseURL = "http://rem-rest-api.herokuapp.com/api";

// Middleware
const sagaMiddleware = createSagaMiddleware();

// Store
const store = createStore(reducers, applyMiddleware(sagaMiddleware));

// Run Sagas
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
