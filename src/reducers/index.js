
//pas 2
//crear el estado inicial (de aqui viene toda la data)
// importar los actions
//crear la funcio pura? con el estado y el action que retornara el estado
// hacer el if o el switch dentro de la funcion con los bloques de codigo dependiendo de la action

import { ADD_ARTICLE } from '../constants/action-types';

// el mero estado 
const initialState = {
  articles: [1,23,123,1234,123456]
};

function rootReducer(state = initialState, action) {

  //si hay una accion que conicide el if se ejecuta 
  if (action.type === ADD_ARTICLE) {
    return Object.assign({}, state, {
      articles: state.articles.concat(action.payload)
    });
  }

  //devuelve el estado 
  return state; 
}

export default rootReducer;