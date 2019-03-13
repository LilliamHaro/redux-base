// paso 8
// A Redux middleware is a function that is able to intercept, and act accordingly, our actions, before they reach the reducer
// Son funciones para mantener la logica fuera de lo componentes
// nside the middleware you can access getState and dispatch,

import { ADD_ARTICLE } from "../constants/action-types";
import '../index.css';

const forbiddenWords = ["spam", "money"];

export function forbiddenWordsMiddleware({ dispatch }) {
  return function(next) {
    return function(action) {
      // do your stuff
      if (action.type === ADD_ARTICLE) {
        
        const foundWord = forbiddenWords.filter(word =>
          action.payload.title.includes(word)
        );
        if (foundWord.length) {
          return dispatch({ type: "FOUND_BAD_WORD" });
        }
      }
      return next(action);
    };
  };
}

// pasos siguientes de modificacion 

// store --> para el uso de redux dev tolls // const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// store --> crear el store aumentando el Middleware

