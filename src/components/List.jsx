// paso 5
// conectar los componentes a redux con connect para que traigar la data y eso

import React from "react";
import { connect } from "react-redux";


//mapStateToProps --> función para proporcionar los datos del store al componente,
// any time the store is updated, mapStateToProps will be called. 
const mapStateToProps = state => {
  return { articles: state.articles };
};

//el componente usando como parametro la data retornada de la funcion  mapStateToProps, que usa el mero estado del reducer
const ConnectedList = ({ articles }) => (
  <ul className="list-group list-group-flush">
    {articles.map(el => (
      <li className="list-group-item" key={el.id}>
        {el.title}
      </li>
    ))}
  </ul>
);

//idk why this shit is here but it always must be here
// ahh aqui se connecta el componente con redux, important shiet
const List = connect(mapStateToProps)(ConnectedList);

export default List;
