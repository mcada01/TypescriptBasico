// import { add as sum, sub, Calculator } from './calc'; // la función add tiene un alias

// console.log(sum(2,3));
// console.log(sub(10,5));

// import * as c from './calc'; // alias para el módulo entero

// console.log(c.add(2,3));
// console.log(c.sub(10,5));

// import add,{sub} from './calc'; // si fue exportada por defecto no debe ir adentro de las llaves su importación

// console.log(add(2,3));
// console.log(sub(10,5));

/* import { Calculator } from './calc'; // importo una clase

var calc = new Calculator(); // Debo crear un objeto del tipo de la clase
console.log(calc.add(2,3));
console.log(calc.sub(10,5));*/

import { Calculator1 as Cal} from './calc'; // importo una clase con alias

var calc = new Cal(); // Debo crear un objeto del tipo de la clase
console.log(calc.add(2,3));
console.log(calc.sub(10,5));

import Calculator, { Calculator1 } from './calc'; // importo una clase por defecto y una con alias

var calc = new Calculator(); // Debo crear un objeto del tipo de la clase
console.log(calc.add(2,3));
console.log(calc.sub(10,5));