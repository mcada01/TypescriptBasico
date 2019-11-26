class TouchScreenLaptop{
    ram:string;
    hd:string;
    processor:string;

    constructor(ram:string,hd:string,processor:string){
        this.ram = ram;
        this.hd = hd;
        this.processor = processor;
    }

    scroll(){
        console.log("Common func");
    }

    click(){
        console.log("Click");
    }
}

class HPLaptoo extends TouchScreenLaptop{
    selfRecovery:boolean;

    recoveryControl(){
        this.selfRecovery = true;
        console.log("Recovery");
    }

    constructor(ram:string,hd:string,processor:string,selfRecovery:boolean){
        super(ram,hd,processor);
        this.selfRecovery = selfRecovery;
    }

    scroll(){
        console.log("Scroll func HP");
    }

}

class DellLaptop extends TouchScreenLaptop{
    mobileAccess:boolean;

    accessControl(){
        this.mobileAccess = true;
        console.log("Access");
    }

    constructor(ram:string,hd:string,processor:string,mobileAccess:boolean){
        super(ram,hd,processor);
        this.mobileAccess = mobileAccess;
    }

    scroll(){
        console.log("Scroll func HP");
    }

}

var hplaptop = new HPLaptoo("4GB","HP","Pentium",false);
console.log(hplaptop.selfRecovery);
console.log(hplaptop.ram);
console.log(hplaptop.hd);
console.log(hplaptop.processor);
hplaptop.scroll();
hplaptop.click();
hplaptop.recoveryControl();

var dellaptop = new DellLaptop("3GB","HP","XXX",false);
console.log(dellaptop.mobileAccess);
console.log(dellaptop.ram);
console.log(dellaptop.hd);
console.log(dellaptop.processor);
dellaptop.scroll();
dellaptop.click();
dellaptop.accessControl();