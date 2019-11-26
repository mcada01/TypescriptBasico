var Check = /** @class */ (function () {
    function Check() {
    }
    Check.bankName = "Bank Of America";
    return Check;
}());
var check = new Check();
// check.bankname; error xq la propiedad esta definida como static
Check.bankName = "BOA";
var check2 = new Check();
check2.accNo;
console.log(Check.bankName);
