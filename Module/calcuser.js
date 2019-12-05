"use strict";
// import { add as sum, sub, Calculator } from './calc'; // la función add tiene un alias
exports.__esModule = true;
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
var calc_1 = require("./calc"); // importo una clase con alias
var calc = new calc_1.Calculator1(); // Debo crear un objeto del tipo de la clase
console.log(calc.add(2, 3));
console.log(calc.sub(10, 5));
var calc_2 = require("./calc"); // importo una clase por defecto y una con alias
var calc = new calc_2["default"](); // Debo crear un objeto del tipo de la clase
console.log(calc.add(2, 3));
console.log(calc.sub(10, 5));
