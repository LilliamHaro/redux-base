
//pas 2
//crear el estado inicial (de aqui viene toda la data)
// importar los actions types
// crear el reducer (función pura que toma el estado anterior y una acción, y devuelve en nuevo estado)
//crear la funcio pura? con el estado y el action que retornara el nuevo estado
// hacer el if o el switch dentro de la funcion con los bloques de codigo dependiendo del action type

import { ADD_ARTICLE } from '../constants/action-types';

// el mero estado 
const initialState = {
  articles: [],
  // paso 12
  // agreagar un nuevo action para el uso de l api
  remoteArticles: []
};

function rootReducer(state = initialState, action) {
  //si hay una accion que conicide el if se ejecuta 
  if (action.type === ADD_ARTICLE) {
    return Object.assign({}, state, {
      articles: state.articles.concat(action.payload)
    });
  }

  // paso 3
  // store

  
  // paso 12
  //  // agreagar un nuevo bloque de accion para la nueva action para el uso de l api
  if (action.type === "DATA_LOADED") {
    return Object.assign({}, state, {
      remoteArticles: state.remoteArticles.concat(action.payload)
    });
  }

  //devuelve el estado 
  return state; 
}

export default rootReducer;


