
// paso 3
// crear el store usando el reducer
import { createStore } from "redux";
import rootReducer from '../reducers';
const store = createStore(rootReducer);
export default store;