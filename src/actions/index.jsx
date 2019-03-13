// paso 6
//importar el nombre de la accion
//crear un funcion retornando la accion(type) y el payload(data)
import { ADD_ARTICLE } from "../constants/action-types";


//action creators --> plain JavaScript function in charge for returning Redux actions.

// actiosn son objetos planos
export function addArticle(payload) {
  return { type: ADD_ARTICLE, payload };
}

// paso 10
// llamadas a apis en action creator con una funcion nhormal - nop no funciona
// Redux is expecting objects as actions but we’re trying to return a Promise

// export function getData() {
//   return fetch("https://jsonplaceholder.typicode.com/posts")
//     .then(response => response.json())
//     .then(json => {
//       return { type: "DATA_LOADED", payload: json };
//     });
// }

// usar redux-thunk return functions from action creators
//inside that function we can call APIs, delay the dispatch of an action, and so on.
// npm i redux-thunk --save-dev
// refactorizar la funcion getData() para usar redux-thunk

 
export function getData() {
  return function(dispatch) {
    return fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(json => {
        dispatch({ type: "DATA_LOADED", payload: json });
        console.log('hoa')
      });
  };
}

// paso 11
// load the middleware(redux-thunk) en el store: