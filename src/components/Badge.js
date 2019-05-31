import React from "react";

import './styles/Badge.css';
import confLogo from '../images/badge-header.svg';

//Los componentes son clases
//Todos los componentes requieren al menos 1 componente

class Badge extends React.Component {
  render() {
    return (
    <div className="Badge">
      <div className="Badge__header">
        <img src={confLogo} alt="Logo de la conferencia" />
      </div>

      <div className="Badge__section-name">
        <img
        className="Badge__avatar" 
        src="https://www.gravatar.com/avatar?d=identicon" alt="Avatar" />
        <h1>{this.props.firstname} <br /> {this.props.lastname} </h1>
      </div>
      <div className="Badge__section-info ">
        <h3>{this.props.jobTitle}</h3>
        <div>@{this.props.twitter}</div>
      </div>
      <div className="Badge__footer">#{this.props.footer}</div>
    </div>);
  }
}

//Debemos de asegurarnos exportar el componente creado
export default Badge;
