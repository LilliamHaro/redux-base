
// paso 3
// crear el store usando el reducer
import { createStore,  applyMiddleware, compose } from "redux";
import rootReducer from '../reducers';
import { forbiddenWordsMiddleware } from '../middleware';


// paso 9 
// para el uso del redux devtolls
const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer,
  //paso 9
  //aplicando los Middleware
  storeEnhancers(applyMiddleware(forbiddenWordsMiddleware))
  );
export default store;