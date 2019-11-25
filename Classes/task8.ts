class Organizer{
    id:number;
    name:string;

    constructor(id:number,name:string){
        this.id = id;
        this.name = name;
    }

    display(){
        console.log(this.id+" "+this.name);
    }
}

/*class Event{
    id:number;
    name:string;
    description:string;
    starttime:string;
    endtime:string;

    constructor(id:number,name:string,description:string,starttime:string,endtime:string){
        this.id = id;
        this.name = name;
        this.description = description;
        this.starttime = starttime;
        this.endtime = endtime;
    }

    display(){
        console.log(this.id+" "+this.name+" "+this.description+""+this.starttime+" "+this.endtime);
    }
}

class Venue{
    id:number;
    name:string;
    description:string;
    address:string;

    constructor(id:number,name:string,description:string,address:string){
        this.id = id;
        this.name = name;
        this.description = description;
        this.address = address;
    }

    display(){
        console.log(this.id+" "+this.name+" "+this.description+""+this.address);
    }
}*/

var organizer = new Organizer(1,"Melissa");
organizer.display();

/*var organizer = new Event(1,"Diego","Developers Fest","February20","February22");
organizer.display();

var organizer = new Venue(1,"Ruta N","Dir 13 #34 - 3");
organizer.display();*/