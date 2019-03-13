import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

// paso 4
//llamar al provider  y al store creado
// envolver el app(toda la aplicacion) con el provider con el store como propiedad

import { Provider } from "react-redux";
import store from './store/index'
import App from "./components/App";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById("root")
);

serviceWorker.unregister();

// paso 5
// al componente list
