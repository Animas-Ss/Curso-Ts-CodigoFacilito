// creamos interfaces para saber que tipo es cada objeto que creamos
interface PersonInterface {
    name: string,
    code: string | number;
    charge: number;
    token?: string;
    description?: string;// nos da la alternativa de que puede o no formar parte de nuestra interfase osea que los objetos que formemos con este typo que creamos puede o no pedirnos descripcion
    soyHello: () => string;// agregamos un metodo que nos devuelve un tipo string
}
// principal diferencia una interfase es un contrato de que tipo debe estar formado una respeusta o variable o objeto
// encambio la clase genera una estructura donde podemos definir como se tiene que crear tanto metodos como propiedades
class PersonClass {
    sayHello(){
        console.log("hola a todos")
    }
}
// interfaces como planos de como ccustruir el objero pero las clases son la construccion en si

const personTwo: PersonClass = new PersonClass();
personTwo.sayHello();

interface PetInterface {
    sayHello: () => string;
}
class PetClass {
    sayHello() {
        return "hola";
    }
}

class Dog implements PetInterface {
    sayHello(){
        return "hola"
    }
}

class Cat extends PetClass {
    
}