/*function hello(name: string):string{
    return "Hello " + name;
}*/
var hello = function (name) {
    return "Hello " + name;
};
function add(num1, num2) {
    return num1 + num2;
}
/*function calculator(fun:any):void{
    console.log(fun(10,20));
}*/
function calculator() {
    function subtract(num1, num2) {
        return num1 - num2;
    }
    return subtract;
}
function display(id, name, role) {
    if (role === void 0) { role = "Normal"; }
    console.log("Id", id);
    console.log("Name", name);
    //if(role!=undefined){
    console.log("Role", role);
    //}    
}
//console.log(hello("Melissa"));
//console.log("Sum is: " + add(10,20));
//display(1,"Melissa");
//display(1,"Melissa","Admin");
//calculator(add);
//var sub = calculator();
//console.log(sub(20,5));
//console.log(calculator()(20,5));
console.log(hello("Melissa"));
