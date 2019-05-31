
/*const element = document.createElement('h1');
element.innerText = "Hello, platzi!";

const container = document.getElementById('app');
container.appendChild(element);
*/

/*
APUNTES:
*si se trabaja con jsx es obligatorio importar 'React'
jsx = es mucho mas legible, y es más expresivo
Expresion = se va interpretar y se va evaluar
Componentes = es una clase (Una unidad básica)
Elemento = es un objeto de la clase (elemento)

****Elemento que se repiten****
1.- Elementos en una lista (Salen de un componente)
2.- Elementos que comparten aspecto visual y
    su funcionalidad ()

*********PROPS********
Son argumentos a una funcion, atributos del componente


*/
import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css';
import './global.css';
//import Badge from './components/Badge';
import BadgeNew from './pages/BadgeNew';


const container = document.getElementById('app');

//ReactDOM.render(__Qué__, __Dónde__);
ReactDOM.render(<BadgeNew />,container);

//ReactDOM.render(<Badge firstname="Gustavo" lastname="Quino" jobTitle="Frontend Deveeloper" twitter="quinogc" footer="PlatziConf" />,container);














//Ejercicios para conocer REACT
//const jsx = <h1>Hola, Platzi Badges!!!</h1>; 
//const element = React.createElement('a',{href: 'https://platzi.com'}, "Ir a Platzi")
//const name = "Gustavo";
//const jsx = <h1>Hola soy, {___Expresiones o atributos___}</h1>
//const jsx = <h1>Hola soy, {name}</h1>
//const element = React.createElement('h1',{}, `Hola, soy ${name}`)
/*const jsx = (
    <div>
        <h1>Hola, Soy {name}</h1>
        <p>Soy informático, y novio de Bethzy!!!</p>
    </div> 
);


const element = React.createElement("div",{},
React.createElement('h1', {}, `Hola, soy ${name}`),
React.createElement('p',{},'Soy ingeniero de la web')
);
*/




