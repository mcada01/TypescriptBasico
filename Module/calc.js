"use strict";
/*export function add(x:number,y:number):number{ // ejemplo para exportar solo una función
    return x+y;
}

export default function add(x:number,y:number):number{ //exportar función por defecto
    return x+y;
}

export function sub(x:number,y:number):number{
    return x-y;
}

// export {add,sub}; //exportar funciones al mismo tiempo

export class Calculator{ //exportar una clase
    add(x:number,y:number):number{
        return x+y;
    }
    
    sub(x:number,y:number):number{
        return x-y;
    }
}*/
exports.__esModule = true;
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.add = function (x, y) {
        return x + y;
    };
    Calculator.prototype.sub = function (x, y) {
        return x - y;
    };
    return Calculator;
}());
exports["default"] = Calculator;
var Calculator1 = /** @class */ (function () {
    function Calculator1() {
    }
    Calculator1.prototype.add = function (x, y) {
        return x + y;
    };
    Calculator1.prototype.sub = function (x, y) {
        return x - y;
    };
    return Calculator1;
}());
exports.Calculator1 = Calculator1;
