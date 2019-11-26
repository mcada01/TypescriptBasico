class Check{
    static bankName:string="Bank Of America";
    customerName:string;
    accNo:number;
    routingNo:number;

    display(){
        Check.bankName = "BOA";
        console.log(Check.bankName);
    }
}

var check = new Check();
// check.bankname; error xq la propiedad esta definida como static
Check.bankName = "BOA";
check.display();

var check2 = new Check();
check2.accNo;

console.log(Check.bankName);