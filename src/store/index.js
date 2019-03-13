
// paso 3
// crear el store usando el reducer
import { createStore,  applyMiddleware, compose } from "redux";
import rootReducer from '../reducers';
import { forbiddenWordsMiddleware } from '../middleware';
import thunk from "redux-thunk";


// paso 9 
// para el uso del redux devtolls
const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer,
  //paso 9
  //aplicando los Middleware
  // storeEnhancers(applyMiddleware(forbiddenWordsMiddleware))

  // paso 11
  // para la llamada de api desde el action load the middleware(redux-thunk) en el store:
  storeEnhancers(applyMiddleware(forbiddenWordsMiddleware, thunk))


  // paso12
  // aumentar un nuevo action type en el reducer 

  );
export default store;