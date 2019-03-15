
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

// let newObj = state; - this isn’t a new object, it’s just a reference to the original object. This isn’t specific to what your doing, it’s how JS works.
// With Object.assign though, you can assign to a new object, so if you have Object.assign({}, {foo: 1, bar: 2}, {foo: 2}) (note the empty object there) it will merge the object on the right with the the next one, so {foo: 2} over {foo: 1, bar: 2}. That means there’s a new value for foo, so you get {foo: 2, bar: 2}. Then it takes that and merges it with the next one, which is an empty object (so you still end up with {foo: 2, bar: 2} in this example, but if either of the second or third objects had been references, the end result would have been a new object unconnected to them)
// tl/dr if you want to create a new object with Object.assign, put an empty object in as the first argument, and it will merge any other objects you give into that new object. It’s what’s called a shallow copy.
// fuente : https://www.freecodecamp.org/forum/t/copy-an-object-with-object-assign-redux/203899https://www.freecodecamp.org/forum/t/copy-an-object-with-object-assign-redux/203899
    return Object.assign(
      // el objeto donde se creara el nuevo stado, o cambia el estado original crea uno nuevo
      {}, 
      // el estado actual, la referencia
      state,
       {
         // todo lo que se va a cambiar de la refercia, las demas partes del estado no cambiará
      articles: state.articles.concat(action.payload)
    }
    );
  }

  // paso 3
  // store

  
  // paso 12
  //  // agreagar un nuevo bloque de accion para la nueva action para el uso de l api
  if (action.type === "DATA_LOADED") {
    return Object.assign({}, state, {
      // aqui llega al estado
      remoteArticles: state.remoteArticles.concat(action.payload)
    });
  }
  // paso 13 --> componente post

  //devuelve el estado 
  return state; 
}

export default rootReducer;


