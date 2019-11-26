var Organizer = /** @class */ (function () {
    function Organizer() {
    }
    Organizer.prototype.display = function () {
        console.log(this._id + " " + this._name);
    };
    Object.defineProperty(Organizer.prototype, "getName", {
        get: function () {
            return this._name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Organizer.prototype, "setName", {
        set: function (name) {
            this._name = name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Organizer.prototype, "getId", {
        get: function () {
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Organizer.prototype, "setId", {
        set: function (id) {
            this._id = id;
        },
        enumerable: true,
        configurable: true
    });
    return Organizer;
}());
/*class Event{
    private _id:number;
    private _name:string;
    private _description:string;
    private _starttime:string;
    private _endtime:string;

    display(){
        console.log(this._id+" "+this._name+" "+this._description+""+this._starttime+" "+this._endtime);
    }

    get getName(){
        return this._name;
    }

    set setName(name:string){
        this._name = name;
    }

    get getId(){
        return this._id;
    }

    set setId(id:number){
        this._id = id;
    }

    get getDescription(){
        return this._description;
    }

    set setDescription(description:string){
        this._description = description;
    }

    get getStartTime(){
        return this._starttime;
    }

    set setStartTime(starttime:string){
        this._starttime = starttime;
    }

    get getEndTime(){
        return this._endtime;
    }

    set setEndTime(endtime:string){
        this._endtime = endtime;
    }

}

class Venue{
    private _id:number;
    private _name:string;
    private _description:string;
    private _address:string;

    display(){
        console.log(this._id+" "+this._name+" "+this._description+""+this._address);
    }

    get getName(){
        return this._name;
    }

    set setName(name:string){
        this._name = name;
    }

    get getId(){
        return this._id;
    }

    set setId(id:number){
        this._id = id;
    }

    get getDescription(){
        return this._description;
    }

    set setDescription(description:string){
        this._description = description;
    }

    get getAddress(){
        return this._address;
    }

    set setAddress(address:string){
        this._address = address;
    }
}*/
