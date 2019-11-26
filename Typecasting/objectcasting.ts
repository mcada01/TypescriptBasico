interface Employee{
    id:number;
}

let e1:Employee;

let e2 = {id:123,name:"John"};

e1 = e2;
// e2 = e1; error porque name no esta contenida en la variable e1