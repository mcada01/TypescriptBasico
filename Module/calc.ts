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

export default class Calculator{ //exportar una clase por defecto
    add(x:number,y:number):number{ 
        return x+y;
    }
    
    sub(x:number,y:number):number{
        return x-y;
    }
}

export class Calculator1{ //exportar una clase por defecto
    add(x:number,y:number):number{ 
        return x+y;
    }
    
    sub(x:number,y:number):number{
        return x-y;
    }
}