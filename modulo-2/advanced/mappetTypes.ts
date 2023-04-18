interface Person {
    name: string;
    age: number;
}

interface getPerson {
    getName: () => string;
    getAge: () => string;
}

// para no repetit por cada interface otra intyerface con las funciones para edvolver los datos
// generamos un type con los datos que va a devolver
// disenio del mapeo de mi interface 
type Getter<T> = {
    //el corchete le da a entender a typeScript que voy a escribir codigo
    [Property in keyof T as `get${Capitalize<string & Property>}`]:() => T[Property]
    // recorre las propiedades de mi interface y reasigna el nombre por gety pone al mayuscula de la propiedad y devuelve una funcion de dicha interface con la pripiedades y sus geters o pedidos
}

interface Developer {
    id: number;
    name: string;
    skill: string[];
    job: boolean;
}
// de esta manera mapeamos nuestras interfaces!!!
type GetDeveloper = Getter<Developer>;

interface Animal{
    id: string;
    name: string;
    type: number;
    isAdopted: boolean;
}
type GetAnimal = Getter<Animal>;